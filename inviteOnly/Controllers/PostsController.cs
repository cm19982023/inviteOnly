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


        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_postRepository.GetAll());
        }

        [HttpGet("{postId}")]
        public ActionResult<Post> Get(int postId)
        {
            var post = _postRepository.GetPostById(postId);

            if (post == null)
            {
                return NotFound();
            }

            return Ok(post);
        }

        [HttpPost]
        public IActionResult Post(Post post)
        {
            _postRepository.Add(post);
            return CreatedAtAction(nameof(Get), new { id = post.Id }, post);
        }

        //GetAllPosts, AddPost, UpdatePost, DeletePost 
    }
}
