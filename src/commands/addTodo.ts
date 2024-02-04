import client from "../db";
import { ITodo } from "../types/ITodo";

async function addTodo(todos: ITodo) {
  try {
    const result = await client.query(
      `
            INSERT INTO todos (task, completed)
            VALUES ($1, $2)
            RETURNING *
        `,
      [todos.task, false]
    );
    console.log("Added todo: ", result.rows[0]);
  } catch (error) {
    console.error("Error addding todo: ", error);
  }
}

export default addTodo;
