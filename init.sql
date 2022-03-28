CREATE DATABASE IF NOT EXISTS booking;
USE booking;

CREATE TABLE IF NOT EXISTS user (email varchar(255), password varchar(255));
INSERT INTO user (email, password) VALUES ('admin@admin.com', 'pass123');