using inviteOnly.Models;

namespace inviteOnly.Repositories
{
    public interface ICommunityRepository
    {
        Community GetCommunityById(int communityId);
        // Add other method signatures as needed
    }
}
