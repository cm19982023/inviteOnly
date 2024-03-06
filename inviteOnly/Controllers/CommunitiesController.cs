using inviteOnly.Models;
using inviteOnly.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace inviteOnly.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CommunitiesController : ControllerBase
    {
        private readonly ICommunityRepository _communityRepository;

        public CommunitiesController(ICommunityRepository communityRepository)
        {
            _communityRepository = communityRepository;
        }

        [HttpGet("{communityId}")]
        public ActionResult<Community> GetCommunityById(int communityId)
        {
            var community = _communityRepository.GetCommunityById(communityId);

            if (community == null)
            {
                return NotFound();
            }

            return community;
        }

        //GetAllCommunities, AddCommunity, UpdateCommunity, DeleteCommunity as needed
    }
}
