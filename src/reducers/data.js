import { SAVE_ALL_YOUTUBE_VIDEOS, SAVE_POSTS, SAVE_RECIPES } from "actions/apiData";

const initialState = {
  allYoutubeVideos: [],
  postList: [],
  recipeList: [],
  loadingPosts: true,
  loadingRecipes: true,
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
