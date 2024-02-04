import { Client } from "pg";

const client = new Client({
  user: "vinaybadguajr",
  host: "localhost",
  database: "todo",
  password: "badgujar102",
  port: 5432,
});

export default client;
