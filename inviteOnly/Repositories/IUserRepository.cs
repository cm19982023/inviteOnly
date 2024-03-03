using inviteOnly.Models;
using inviteOnly.Models;

namespace inviteOnly.Repositories
{
    public interface IUserRepository
    {
        void Add(users users);
        users GetByEmail(string email);
    }
}