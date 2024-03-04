using inviteOnly.Models;
using inviteOnly.Utils;
using Microsoft.Extensions.Configuration;
using System.Data;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory.Database;

namespace inviteOnly.Repositories
{
    public class UserRepository : BaseRepository, IUserRepository
    {
        public UserRepository(IConfiguration configuration) : base(configuration) { }

        public users GetByEmail(string email)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT Id, UserName, Bio, Email, DateCreated                 
                          FROM users
                         WHERE Email = @email";

                    DbUtils.AddParameter(cmd, "@email", email);

                    users users = null;

                    var reader = cmd.ExecuteReader();
                    if (reader.Read())
                    {
                        users = new users()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            UserName = DbUtils.GetString(reader, "UserName"),
                            Bio = DbUtils.GetString(reader, "Bio"),
                            Email = DbUtils.GetString(reader, "Email"),
                            DateCreated = DbUtils.GetDateTime(reader, "DateCreated"),
                        };
                    }
                    reader.Close();

                    return users;
                }
            }
        }

        public void Add(users users)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"INSERT INTO users (UserName, Bio, Email, DateCreated)
                                        OUTPUT INSERTED.ID
                                        VALUES (@UserName, @Bio, @Email, @DateCreated)";
                    DbUtils.AddParameter(cmd, "@UserName", users.UserName);
                    DbUtils.AddParameter(cmd, "@Bio", users.Bio);
                    DbUtils.AddParameter(cmd, "@Email", users.Email);
                    DbUtils.AddParameter(cmd, "@DateCreated", users.DateCreated);

                    users.Id = (int)cmd.ExecuteScalar();
                }
            }
        }

    }
}
