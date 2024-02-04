import client from "../db";
import { ITodo } from "../types/ITodo";

async function listTodos(filter: string) {
  try {
    let query;
    switch (filter) {
      case "pending":
        query = "SELECT * FROM todos WHERE completed = false";
        break;
      case "done":
        query = "SELECT * FROM todos WHERE completed = true";
        break;
      default:
        query = "SELECT * FROM todos";
    }
    const result = await client.query(query);
    result.rows.forEach((row: ITodo) => {
      console.log(
        "ID: ",
        row.id,
        "Task: ",
        row.task,
        "Completed: ",
        row.completed
      );
    });
  } catch (error) {
    console.log("Error listing todos: ", error);
  }
}

export default listTodos;
