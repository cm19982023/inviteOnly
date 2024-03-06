// PostsService.js
const baseUrl = '/api/posts';

const PostsService = {
  getAllPosts: async () => {
    const response = await fetch(baseUrl);
    if (!response.ok) {
      throw new Error(`Error fetching posts: ${response.statusText}`);
    }
    return response.json();
  },
};

export default PostsService;
