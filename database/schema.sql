DROP DATABASE caves;

CREATE DATABASE caves;

USE caves;

CREATE TABLE location(
  STATE VARCHAR(2),
  COUNTRY VARCHAR(20),
  PRIMARY KEY (STATE)
);

CREATE TABLE cave(
  ID INT NOT NULL AUTO_INCREMENT,
  NAME VARCHAR(30),
  LENGTH_FT INT,
  DEPTH_FT INT,
  CITY VARCHAR(20),
  STATE VARCHAR (2),
  PRIMARY KEY (ID),
  FOREIGN KEY (STATE) REFERENCES LOCATION (STATE)
);
