import client from "../db";

async function deleteTodo(id: number) {
  try {
    const result = await client.query(
      "DELETE FROM todos WHERE id = $1 RETURNING *",
      [id]
    );
    console.log(`Task removed: ${result.rows[0].task}`);
  } catch (error) {
    console.error("Error deleting todo:", error);
  }
}

export default deleteTodo;
