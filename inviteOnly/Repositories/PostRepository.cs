using inviteOnly.Models;
using inviteOnly.Utils;
using Microsoft.Extensions.Configuration;
using System;
using System.Data;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory.Database;

namespace inviteOnly.Repositories
{
    public class PostRepository : BaseRepository, IPostRepository
    {
        public PostRepository(IConfiguration configuration) : base(configuration) { }

        public void Add(Post post)
        {
            throw new NotImplementedException();
        }

        public List<Post> GetAll()
        {
            throw new NotImplementedException();
        }

        public Post GetPostById(int postId)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT Id, UserId, CommunityId, Title, Body, DateCreated                 
                          FROM Posts
                         WHERE Id = @postId";

                    DbUtils.AddParameter(cmd, "@postId", postId);

                    Post post = null;

                    var reader = cmd.ExecuteReader();
                    if (reader.Read())
                    {
                        post = new Post()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            UserId = DbUtils.GetInt(reader, "UserId"),
                            CommunityId = DbUtils.GetInt(reader, "CommunityId"),
                            Title = DbUtils.GetString(reader, "Title"),
                            Body = DbUtils.GetString(reader, "Body"),
                            DateCreated = DbUtils.GetDateTime(reader, "DateCreated"),
                        };
                    }
                    reader.Close();

                    return post;
                }
            }
        }

        //GetAllPosts, AddPost, UpdatePost, DeletePost 
    }
}
