DROP DATABASE IF EXISTS tweeter;

CREATE DATABASE tweeter;

\ c tweeter;

CREATE TABLE IF NOT EXISTS tweeter_feeds (
	id SERIAL UNIQUE PRIMARY KEY,
	userName varchar(45) NOT NULL,
	handler varchar(450) NOT NULL,
	title varchar(450) NOT NULL,
	profileImg varchar(450) NOT NULL,
	tweetImg varchar(450) NOT NULL
);

INSERT INTO
	tweeter_feeds(userName, handler, title, profileImg, tweetImg)
VALUES
	(
		'Daniel Glover',
		'@dev_dglover',
		'I accepted a job @Facebook as a Software Engineer',
		'https://mpb-site.s3.us-east-2.amazonaws.com/imgs/daniel.jpeg',
		'https://mpb-site.s3.us-east-2.amazonaws.com/imgs/facebook-post.jpeg'
	),
	(
		'Jason Mitchell',
		'@dev_jmitchell',
		'I accepted a job @GoDaddy as a Software Engineer',
		'https://mpb-site.s3.us-east-2.amazonaws.com/imgs/jason.jpeg',
		'https://mpb-site.s3.us-east-2.amazonaws.com/imgs/godaddy-post.jpeg'
	),
	(
		'Emily Johnson',
		'@dev_ejohnson',
		'I accepted a job @Target as a Senior Software Engineer',
		'https://mpb-site.s3.us-east-2.amazonaws.com/imgs/black-girl-smile.jpeg',
		'https://mpb-site.s3.us-east-2.amazonaws.com/imgs/target-post.jpeg'
	);