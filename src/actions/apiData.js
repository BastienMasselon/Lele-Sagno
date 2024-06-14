// Fetch data of youtube videos from the channel
export const FETCH_ALL_YOUTUBE_VIDEOS = 'FETCH_ALL_YOUTUBE_VIDEOS';
export const fetchAllYoutubeVideos = () => ({
  type: FETCH_ALL_YOUTUBE_VIDEOS,
});

// Save all youtube videos in the state
export const SAVE_ALL_YOUTUBE_VIDEOS = 'SAVE_ALL_YOUTUBE_VIDEOS';
export const saveAllYoutubeVideos = (allYoutubeVideos) => ({
  type: SAVE_ALL_YOUTUBE_VIDEOS,
  allYoutubeVideos,
});

export const FETCH_HOME_VIDEO = 'FETCH_HOME_VIDEO';
export const fetchHomeVideo = () => ({
  type: FETCH_HOME_VIDEO,
});

export const SAVE_HOME_VIDEO = 'SAVE_HOME_VIDEO';
export const saveHomeVideo = (homeVideo) => ({
  type: SAVE_HOME_VIDEO,
  homeVideo,
});

// Fetch data of all posts from the wordpress API
export const FETCH_ALL_POSTS = 'FETCH_ALL_POSTS';
export const fetchAllPosts = () => ({
  type: FETCH_ALL_POSTS,
});

// Save posts in the state
export const SAVE_POSTS = 'SAVE_POSTS';
export const savePosts = (postList) => ({
  type: SAVE_POSTS,
  postList,
});

// Fetch data of a post from the wordpress API
export const FETCH_POST = 'FETCH_POST';
export const fetchPost = (slug) => ({
  type: FETCH_POST,
  slug
});

export const SAVE_POST = 'SAVE_POST';
export const savePost = (post) => ({
  type: SAVE_POST,
  post
});

export const FETCH_ERROR = 'FETCH_ERROR';
export const fetchError = (dataName, errorName, error) => ({
  type: FETCH_ERROR,
  dataName, // name of the data field in the state (ex : currentPost)
  errorName, // name of the error field in the state (ex : postError)
  error // error message (ex : 'Network Error' or 'No post found')
});

// Fetch data of all recipes from the wordpress API
export const FETCH_ALL_RECIPES = 'FETCH_ALL_RECIPES';
export const fetchAllRecipes = () => ({
  type: FETCH_ALL_RECIPES,
});

// Save recipes in the state
export const SAVE_RECIPES = 'SAVE_RECIPES';
export const saveRecipes = (recipeList) => ({
  type: SAVE_RECIPES,
  recipeList,
});

export const FETCH_RECIPE = 'FETCH_RECIPE';
export const fetchRecipe = (slug) => ({
  type: FETCH_RECIPE,
  slug
});

export const SAVE_RECIPE = 'SAVE_RECIPE';
export const saveRecipe = (recipe) => ({
  type: SAVE_RECIPE,
  recipe
});

