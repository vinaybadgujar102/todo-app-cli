CREATE DATABASE todo;

CREATE TABLE todo (
    id SERIAL PRIMARY KEY,
    task VARCHAR(255) NOT NULL,
    completed boolean DEFAULT false
)