import { FETCH_ALL_YOUTUBE_VIDEOS, saveAllYoutubeVideos } from "actions/apiData";
import axios from "axios";

const apiData = (store) => (next) => (action) => {
  switch (action.type) {

    // fetch all youtube videos from youtube API and save retrieved data in the state
    case FETCH_ALL_YOUTUBE_VIDEOS: {
        
        // preparing request to youtube API
        // Requests with public keys will be made in a dedicated back-end API once it is set up.
        const youtubeApiKey = process.env.REACT_APP_YOUTUBE_API_KEY;
        const requestUrl = `https://www.googleapis.com/youtube/v3/search?channelId=UCDXo3PHjEJrIa_2aZ6vxToQ&key=${youtubeApiKey}&order=date&maxResults=5&part=snippet,id&fields=items(id(videoId),snippet(title))`;

        // requesting all youtube videos to youtube API
        axios.get(requestUrl)
            .then((response) => {
                if (response.status=200) {
                    // if request is successfull, first filtering videos to keep only still existing videos
                    const filteredVideos = response.data.items.filter((video) => {
                        return (
                            video.id.videoId !== undefined
                        )
                    });
                    // then dispatching action to save filtered video list in app's state
                    store.dispatch(saveAllYoutubeVideos(filteredVideos));
                }
            })
            .catch((error) => console.log(error))

        next(action);
        break;  
    }

    default:
      next(action);
      break;
  }
};

export default apiData;
