using inviteOnly.Models;
using inviteOnly.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace inviteOnly.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostsController : ControllerBase
    {
        private readonly IPostRepository _postRepository;

        public PostsController(IPostRepository postRepository)
        {
            _postRepository = postRepository;
        }

        [HttpGet("{postId}")]
        public ActionResult<Post> GetPostById(int postId)
        {
            var post = _postRepository.GetPostById(postId);

            if (post == null)
            {
                return NotFound();
            }

            return post;
        }

        //GetAllPosts, AddPost, UpdatePost, DeletePost as needed
    }
}
