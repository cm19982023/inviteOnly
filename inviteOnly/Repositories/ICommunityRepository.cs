using inviteOnly.Models;

namespace inviteOnly.Repositories
{
    public interface ICommunityRepository
    {

        void Add(Community community);
        void Update(Community community);

        List<Community> GetAll();
        Community GetCommunityById(int communityId);
        
    }
}
