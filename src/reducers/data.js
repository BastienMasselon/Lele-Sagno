import { SAVE_ALL_YOUTUBE_VIDEOS } from "actions/apiData";

const initialState = {
  allYoutubeVideos: [],
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {

    case SAVE_ALL_YOUTUBE_VIDEOS: {
        return {
            ...state,
            allYoutubeVideos: action.allYoutubeVideos,
        }
    }
    default:
      return state;
  }
}

export default reducer;
