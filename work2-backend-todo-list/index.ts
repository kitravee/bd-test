import bodyParser from "body-parser";
import { TodoSchema, type Todo } from "./features/todos/todos-schema";
import { createValidateSchema } from "./middlewares/validate-schema";

import express, { type Request, type Response } from "express";

const app = express();
const port = 8080;

app.use(bodyParser.json());

let todos: Todo[] = [];
let idCounter = 1;

app.get("/", (_req: Request, res: Response) => {
  res.send("Hello BD!");
});

app.get('/todos', (_req: Request, res: Response) => {
  res.json(todos);
});

const newTodoValidateSchema = createValidateSchema(TodoSchema);
app.post("/todos", newTodoValidateSchema, (req: Request, res: Response) => {
  const newTodo: Todo = {
    id: idCounter,
    title: req.body.title,
    completed: req.body.completed || false,
  };

  idCounter = idCounter + 1;
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

app.get("/todos/:id", (req, res) => {
  const todo = todos.find((t) => t.id === parseInt(req.params.id));
  if (todo) {
    res.json(todo);
  } else {
    res.status(404).send("Todo not found");
  }
});

const updateTodoValidateSchema = createValidateSchema(TodoSchema.partial());
app.put(
  "/todos/:id",
  updateTodoValidateSchema,
  (req: Request, res: Response) => {
    const todo = todos.find((t) => t.id === parseInt(req.params.id));
    if (todo) {
      const title = req.body.title;
      const completed = req.body.completed;
      todo.title = title !== undefined ? title : todo.title;
      todo.completed = completed !== undefined ? completed : todo.completed;
      res.json(todo);
    } else {
      res.status(404).send("Todo not found");
    }
  }
);

app.delete("/todos/:id", (req: Request, res: Response) => {
  todos = todos.filter((t) => t.id !== parseInt(req.params.id));
  res.status(204).send();
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
