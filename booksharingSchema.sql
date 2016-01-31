CREATE SCHEMA `booksharing` ;

Use booksharing;

CREATE TABLE users(
	userID integer PRIMARY KEY,
	username varchar(25) NOT NULL,
	password varchar(64),
	FBToken blob,
	FBuserID bigint
);

CREATE TABLE bookInfo(
	bookID integer PRIMARY KEY,
	isbn bigint,
	bookName varchar(1024) NOT NULL,
	author varchar(256),
	description text
);

CREATE TABLE bookClub(
	bookClubID integer PRIMARY KEY,
	bookClub_name varchar(64) NOT NULL
);

CREATE TABLE userBook(
	userID integer,
	bookID integer,
	bookClubID integer,
	borrower integer,
	constraint foreign key (userID) references users(userID),
	constraint foreign key (bookID) references bookInfo(bookID),
	constraint foreign key (bookClubID) references bookClub(bookClubID),
	constraint foreign key (borrower) references users(userID)
);

CREATE TABLE bookClubMembers(
	bookClubID integer,
	userID integer,
	constraint foreign key (bookClubID) references bookClub(bookClubID),
	constraint foreign key (userID) references users(userID)
);