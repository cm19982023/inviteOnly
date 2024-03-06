using inviteOnly.Models;
using inviteOnly.Utils;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data;

namespace inviteOnly.Repositories
{
    public class CommunityRepository : BaseRepository, ICommunityRepository
    {
        public CommunityRepository(IConfiguration configuration) : base(configuration) { }

        public Community GetCommunityById(int communityId)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT Id, Title, DateCreated                 
                          FROM Communities
                         WHERE Id = @communityId";

                    DbUtils.AddParameter(cmd, "@communityId", communityId);

                    Community community = null;

                    var reader = cmd.ExecuteReader();
                    if (reader.Read())
                    {
                        community = new Community()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            Title = DbUtils.GetString(reader, "Title"),
                            DateCreated = DbUtils.GetDateTime(reader, "DateCreated"),
                        };
                    }
                    reader.Close();

                    return community;
                }
            }
        }

        //GetAllCommunities, AddCommunity, UpdateCommunity, DeleteCommunity as needed
    }
}
