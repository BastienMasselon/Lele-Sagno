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
