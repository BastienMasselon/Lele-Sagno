import { FETCH_ERROR, SAVE_ALL_YOUTUBE_VIDEOS, SAVE_HOME_POSTS, SAVE_HOME_RECIPES, SAVE_HOME_VIDEO, SAVE_POST, SAVE_POSTS, SAVE_RECIPE, SAVE_RECIPES } from "actions/apiData";
import { SET_LOADING } from "actions/app";

const initialState = {
  homePosts: [],
  homeRecipes: [],
  homeVerse: {},
  homePicture: {},
  allYoutubeVideos: [],
  postList: [],
  currentPost: {},
  recipeList: [],
  currentRecipe: {},
  homeVideo: {},
  postError: null,
  recipeError: null,
  videosError: null,
  loadingHomePosts: true,
  loadingHomeRecipes: true,
  loadingHomeVideo: false,
  loadingPosts: false,
  loadingPost: true,
  loadingRecipes: false,
  loadingRecipe: true,
  loadingVideos: true,
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {

    case SAVE_HOME_POSTS: {
      return {
        ...state, 
        homePosts: action.postList,
        loadingHomePosts: false,
      }
    }

    case SAVE_ALL_YOUTUBE_VIDEOS: {
      return {
          ...state,
          allYoutubeVideos: action.allYoutubeVideos,
          loadingVideos: false,
          videosError: null,
      }
    }

    case SAVE_HOME_VIDEO: {
      return {
        ...state,
        homeVideo: action.homeVideo,
        loadingHomeVideo: false,
      }
    }

    case SAVE_POSTS: {
      return {
        ...state,
        postList: action.postList,
        loadingPosts: false,
      }
    }

    case SAVE_POST: {
      return {
        ...state,
        currentPost: action.post,
        loadingPost: false,
        postError: null,
      }
    }

    case SAVE_HOME_RECIPES: {
      return {
        ...state,
        homeRecipes: action.recipeList,
        loadingHomeRecipes: false,
      }
    }

    case SAVE_RECIPES: {
      return {
        ...state, 
        loadingRecipes: false,
        recipeList: action.recipeList,
      }
    }

    case SAVE_RECIPE: {
      return {
        ...state,
        currentRecipe: action.recipe,
        loadingRecipe: false,
        recipeError: null,
      }
    }

    case SET_LOADING: {
      return {
        ...state,
        [action.loaderName]: action.loaderValue
      }
    }

    case FETCH_ERROR: {
      return {
        ...state,
        [action.dataName]: initialState[action.dataName],
        [action.errorName]: action.error,
      }
    }

    default:
      return state;
  }
}

export default reducer;
