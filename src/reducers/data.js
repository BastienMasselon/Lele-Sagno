import { SAVE_ALL_YOUTUBE_VIDEOS, SAVE_POSTS } from "actions/apiData";

const initialState = {
  allYoutubeVideos: [],
  postList: [],
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {

    case SAVE_ALL_YOUTUBE_VIDEOS: {
        return {
            ...state,
            allYoutubeVideos: action.allYoutubeVideos,
        }
    }

    case SAVE_POSTS: {
      return {
        ...state,
        postList: action.postList,
      }
    }
    default:
      return state;
  }
}

export default reducer;
