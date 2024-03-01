using inviteOnly.Models;
using inviteOnly.Models;

namespace inviteOnly.Repositories
{
    public interface IUserRepository
    {
        void Add(UserProfile userProfile);
        UserProfile GetByEmail(string email);
    }
}