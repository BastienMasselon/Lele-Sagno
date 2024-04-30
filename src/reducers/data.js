import { SAVE_ALL_YOUTUBE_VIDEOS, SAVE_HOME_VIDEO, SAVE_POSTS, SAVE_RECIPES } from "actions/apiData";

const initialState = {
  allYoutubeVideos: [],
  postList: [],
  recipeList: [],
  homeVideo: {},
  loadingPosts: true,
  loadingRecipes: true,
  loadingVideos: false,
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {

    case SAVE_ALL_YOUTUBE_VIDEOS: {
        return {
            ...state,
            allYoutubeVideos: action.allYoutubeVideos,
        }
    }

    case SAVE_HOME_VIDEO: {
      return {
        ...state,
        homeVideo: action.homeVideo
      }
    }

    case SAVE_POSTS: {
      return {
        ...state,
        loadingPosts: false,
        postList: action.postList,
      }
    }

    case SAVE_RECIPES: {
      return {
        ...state, 
        loadingRecipes: false,
        recipeList: action.recipeList,
      }
    }
    default:
      return state;
  }
}

export default reducer;
