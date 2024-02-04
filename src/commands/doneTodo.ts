import client from "../db";

async function doneTodo(id: number) {
  try {
    const result = await client.query(
      "UPDATE todos SET completed = true WHERE id = $1 RETURNING *",
      [id]
    );
    console.log(`Task completed: ${result.rows[0].task}`);
  } catch (error) {
    console.log("Error marking todo as done: ", error);
  }
}

export default doneTodo;
