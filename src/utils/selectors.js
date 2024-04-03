/**
 *  find a specific post in the list of posts, by slug
 * @param {Array} posts - the post list
 * @param {string} searchedSlug - slug of searched post
 * @return {Object} - the found post
 */
export function findPost(posts, searchedSlug) {
    const post = posts.find((testedPost) => {
      return testedPost.slug === searchedSlug;
    });
    return post;
}