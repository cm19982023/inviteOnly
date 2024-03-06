using inviteOnly.Models;

namespace inviteOnly.Repositories
{
    public interface IPostRepository
    {
        void Add(Post post);

        List<Post> GetAll();
        Post GetPostById(int id);
    }
}