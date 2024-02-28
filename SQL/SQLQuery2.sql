USE [master]
GO
IF db_id('inviteOnly') IS NULL
  CREATE DATABASE [inviteOnly]
GO
USE [inviteOnly]
GO

DROP TABLE IF EXISTS [Users];
DROP TABLE IF EXISTS [Communities];
DROP TABLE IF EXISTS [Posts];

CREATE TABLE [Users] (
  [Id] int PRIMARY KEY IDENTITY NOT NULL,
  [UserName] nvarchar(255) NOT NULL,
  [Bio] nvarchar(255),
  [Email] nvarchar(255) UNIQUE, 
  [DateCreated] datetime NOT NULL
);

CREATE TABLE [Communities] (
  [CommunityId] int PRIMARY KEY IDENTITY NOT NULL,
  [Title] nvarchar(255) NOT NULL,
  [DateCreated] datetime NOT NULL
);

CREATE TABLE [Posts] (
  [Id] int PRIMARY KEY IDENTITY NOT NULL,
  [UserId] int NOT NULL,
  [CommunityId] int NOT NULL,
  [Title] nvarchar(255) NOT NULL,
  [Body] nvarchar(255) NOT NULL,
  [DateCreated] datetime NOT NULL,
  --FOREIGN KEY ([UserId]) REFERENCES [Users] ([Id]),
  --FOREIGN KEY ([CommunityId]) REFERENCES [Communities] ([CommunityId])
);

