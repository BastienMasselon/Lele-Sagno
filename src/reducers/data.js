import { SAVE_ALL_YOUTUBE_VIDEOS, SAVE_HOME_VIDEO, SAVE_POSTS, SAVE_RECIPES } from "actions/apiData";
import { SET_LOADING } from "actions/app";

const initialState = {
  allYoutubeVideos: [],
  postList: [],
  recipeList: [],
  homeVideo: {},
  loadingPosts: false,
  loadingRecipes: false,
  loadingVideos: false,
  loadingHomeVideo: false,
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {

    case SAVE_ALL_YOUTUBE_VIDEOS: {
      return {
          ...state,
          loadingVideos: false,
          allYoutubeVideos: action.allYoutubeVideos,
      }
    }

    case SAVE_HOME_VIDEO: {
      return {
        ...state,
        loadingHomeVideo: false,
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

    case SET_LOADING: {
      return {
        ...state,
        [action.loaderName]: action.loaderValue
      }
    }

    default:
      return state;
  }
}

export default reducer;
