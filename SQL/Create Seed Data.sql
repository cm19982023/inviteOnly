USE [master]
GO
IF db_id('inviteOnly') IS NULL
  CREATE DATABASE [inviteOnly]
GO
USE [inviteOnly]
GO

DROP TABLE IF EXISTS [Posts];
DROP TABLE IF EXISTS [Users];
DROP TABLE IF EXISTS [Communities];


CREATE TABLE [Users] (
  [Id] int PRIMARY KEY IDENTITY NOT NULL,
  [UserName] nvarchar(255) NOT NULL,
  [Bio] nvarchar(255),
  [Email] nvarchar(255) UNIQUE, 
  [DateCreated] datetime NOT NULL
);

CREATE TABLE [Communities] (
  [Id] int PRIMARY KEY IDENTITY NOT NULL,
  [Title] nvarchar(255) NOT NULL,
  [DateCreated] datetime NOT NULL
);

CREATE TABLE [Posts] (
  [Id] int PRIMARY KEY IDENTITY NOT NULL,
  [UserId] int NOT NULL,
  [CommunityId] int NOT NULL,
  [Title] nvarchar(255) NOT NULL,
  [Body] nvarchar(MAX) NOT NULL,
  [DateCreated] datetime NOT NULL,
  FOREIGN KEY ([UserId]) REFERENCES [Users] ([Id]),
  FOREIGN KEY ([CommunityId]) REFERENCES [Communities] ([Id])
);


INSERT INTO [Users] ([UserName], [Email], [Bio], [DateCreated])
VALUES ('Test User', 'TestUser@email.com', NULL, '2020-06-21');
INSERT INTO [Users] ([UserName], [Email], [Bio], [DateCreated])
VALUES ('Test2', 'Test2@email.com', NULL, '2020-04-20');

INSERT INTO [Communities] ([Title], [DateCreated])
VALUES ('Bitcoin Talk', '2020-06-22'),
('NY Fashion Week 2024 - Rooftop Party', '2024-06-23'),
('the Beatles Fan Theories', '2020-06-29'),
('Health and Hollistics', '2020-06-29');

INSERT INTO [Posts] ([UserId], [CommunityId], [Title], [Body], [DateCreated])
VALUES (2, 1, 'Bitcoin talk', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', '2020-06-22'),
       (1, 2, 'NY Fashion Week 2024 - Rooftop Party', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', '2024-06-23'),
       (1, 3, 'The Beatles Fan Theories', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', '2020-06-29'),
       (2, 4, 'Health and Hollistics', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', '2020-06-29');
