import { FETCH_ALL_POSTS, FETCH_ALL_RECIPES, FETCH_ALL_YOUTUBE_VIDEOS, FETCH_HOME_POSTS, FETCH_HOME_RECIPES, FETCH_HOME_VIDEO, FETCH_POST, FETCH_RECIPE, fetchError, saveAllYoutubeVideos, saveHomePosts, saveHomeRecipes, saveHomeVideo, savePost, savePosts, saveRecipe, saveRecipes } from "actions/apiData";
import { setLoading } from "actions/app";
import axios from "axios";
import { getLatestVideosInfos } from "utils/utils";

const apiData = (store) => (next) => (action) => {

    const wordpressDomain = process.env.REACT_APP_WP_API_DOMAIN;

  switch (action.type) {

    // fetch all youtube videos from youtube API and save retrieved data in the state
    case FETCH_ALL_YOUTUBE_VIDEOS: {
        
        /*
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
            .catch((error) => {
                // console.log(error);
            })
        */
        store.dispatch(setLoading('loadingVideos', true));
        
        getLatestVideosInfos(5)
            .then(result => {
                const videos = result;
                if (typeof videos !== undefined && videos.length > 0) {
                    store.dispatch(saveAllYoutubeVideos(videos));
                }    
            })
            .catch((error) => {
                store.dispatch(fetchError('allYoutubeVideos', 'videosError', 'Network Error'))
            })
            .finally(() => {
                store.dispatch(setLoading('loadingVideos', false));
            })

        next(action);
        break;  
    }

    case FETCH_HOME_VIDEO: {
        // Bug niveau middleware ? Les actions setloading se déclenchent avant les actions fetch...
        store.dispatch(setLoading('loadingHomeVideo', true));
        getLatestVideosInfos(1).then(result => {
            const video = result[0];
            if (typeof video !== undefined && result.length > 0) {
                store.dispatch(saveHomeVideo(video));
            }
        });
        
        next(action);
        break;  
    }

    case FETCH_HOME_POSTS: {
        const requestUrl = `${wordpressDomain}/posts?_fields=id,title.rendered,slug,featured_image&per_page=5`
        store.dispatch(setLoading('loadingHomePosts', true));

        // requesting posts to the wordpress API
        axios.get(requestUrl)
            .then((response) => {
                if (response.status === 200) {
                    store.dispatch(saveHomePosts(response.data));
                }
            }) 
            .catch((error) => {
                // console.log(error)
            })

        next(action);
        break;
    }

    case FETCH_ALL_POSTS: {
        const requestUrl = `${wordpressDomain}/posts?_fields=id,title.rendered,content.rendered,date,slug,featured_image`
        store.dispatch(setLoading('loadingPosts', true));
        // requesting posts to the wordpress API
        axios.get(requestUrl)
            .then((response) => {
                if (response.status === 200) {
                    store.dispatch(savePosts(response.data))
                }
            }) 
            .catch((error) => {
                // console.log(error)
            })

        next(action);
        break;
    }

    case FETCH_POST : {
        store.dispatch(setLoading("loadingPost", true));
        const requestUrl = `${wordpressDomain}/posts?slug=${action.slug}&_fields=title,content,date`;

        axios.get(requestUrl)
            .then((response) => {
                if (response.status === 200 && response.data.length > 0) {
                    store.dispatch(savePost(response.data[0]));
                }
                if (response.data.length == 0) {
                    store.dispatch(fetchError('currentPost', 'postError', 'No post found'));
                }
            })
            .catch(error => {
                store.dispatch(fetchError('currentPost', 'postError', 'Network error'));
            })

        next(action);
        break;
    }

    case FETCH_HOME_RECIPES: {
        const requestUrl = `${wordpressDomain}/recipes?_fields=id,title.rendered,slug,featured_image&per_page=5`
        store.dispatch(setLoading('loadingHomeRecipes', true));

        // requesting posts to the wordpress API
        axios.get(requestUrl)
            .then((response) => {
                if (response.status === 200) {
                    store.dispatch(saveHomeRecipes(response.data));
                }
            }) 
            .catch((error) => {
                // console.log(error)
            })

        next(action);
        break;
    }

    case FETCH_ALL_RECIPES: {
        store.dispatch(setLoading('loadingRecipes', true));
        const requestUrl = `${wordpressDomain}/recipes?_fields=id,title.rendered,content.rendered,date,slug,featured_image,acf`

        // requesting recipes to the wordpress API
        axios.get(requestUrl)
            .then((response) => {
                if (response.status === 200) {
                    store.dispatch(saveRecipes(response.data))
                }
            }) 
            .catch((error) => {
                // console.log(error)
            })

        next(action);
        break;
    }

    case FETCH_RECIPE : {
        store.dispatch(setLoading("loadingRecipe", true));
        const requestUrl = `${wordpressDomain}/recipes?slug=${action.slug}&_fields=title,content,slug,featured_image,acf`;

        axios.get(requestUrl)
            .then((response) => {
                if (response.status === 200 && response.data.length > 0) {
                    store.dispatch(saveRecipe(response.data[0]));
                }
                if (response.data.length == 0) {
                    store.dispatch(fetchError('currentRecipe', 'recipeError', 'No recipe found'));
                }
            })
            .catch(error => {
                store.dispatch(fetchError('currentRecipe', 'recipeError', 'Network error'));
            })

        next(action);
        break;
    }

    default:
      next(action);
      break;
  }
};

export default apiData;
