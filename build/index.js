"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var commander_1 = require("commander");
var figlet_1 = __importDefault(require("figlet"));
var program = new commander_1.Command();
console.log(figlet_1.default.textSync("Todo App CLI"));
program
    .version("1.0.0")
    .description("Todo App CLI which will help you manage your todos")
    .option("-n, --new", "Add a new todo")
    .option("-l, --list", "List all todos")
    .option("-d, --done <id>", "Mark a todo as done")
    .option("-r, --remove <id>", "Remove a todo")
    .option("-h, --help", "Help")
    .parse(process.argv);
var options = program.opts();
