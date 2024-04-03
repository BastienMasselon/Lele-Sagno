// Fetch data of all youtube videos from the channel, using youtube API
export const FETCH_ALL_YOUTUBE_VIDEOS = 'FETCH_ALL_YOUTUBE_VIDEOS';
export const fetchAllYoutubeVideos = () => ({
  type: FETCH_ALL_YOUTUBE_VIDEOS,
});

// Save all the youtube videos (fetched with youtube API) in the state
export const SAVE_ALL_YOUTUBE_VIDEOS = 'SAVE_ALL_YOUTUBE_VIDEOS';
export const saveAllYoutubeVideos = (allYoutubeVideos) => ({
  type: SAVE_ALL_YOUTUBE_VIDEOS,
  allYoutubeVideos,
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
