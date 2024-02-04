const { Command } = require("commander");
const figlet = require("figlet");

const program = new Command();

console.log(figlet.textSync("Todo App CLI", { font: "Standard" }));

program
  .version("1.0.0")
  .description("Todo App CLI which will help you manage your todos")
  .option("-n, --new", "Add a new todo")
  .option("-l, --list", "List all todos")
  .option("-d, --done <id>", "Mark a todo as done")
  .option("-r, --remove <id>", "Remove a todo")
  .parse(process.argv);

const options = program.opts();
