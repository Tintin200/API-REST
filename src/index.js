const express = require("express");
const { randomUUID } = require("crypto");

const app = express();

app.use(express.json());

const tasks = [];

app.get("/", (req, res) => res.json({ message: "Bonjouuuur :)" }));

app.post("/tasks", (req, res) => {
  const { title, description, status = "pending" } = req.body;

  if (title !== undefined && (typeof title !== "string" || !title.trim())) {
    return res.status(400).json({ error: "Le champ 'title' est invalide." });
  }

  if (typeof description !== "string" || !description.trim()) {
    return res.status(400).json({ error: "Le champ 'description' est requis." });
  }

  if (typeof status !== "string" || !status.trim()) {
    return res.status(400).json({ error: "Le champ 'status' est invalide." });
  }

  const now = new Date().toISOString();
  const task = {
    id: randomUUID(),
    title: title ? title.trim() : "",
    description: description.trim(),
    status: status.trim(),
    createdAt: now,
    updatedAt: now,
  };

  tasks.push(task);
  return res.status(201).json(task);
});

app.get("/tasks", (req, res) => {
  return res.json(tasks);
});

app.get("/tasks/:id", (req, res) => {
  const task = tasks.find((item) => item.id === req.params.id);

  if (!task) {
    return res.status(404).json({ error: "Tâche introuvable." });
  }

  return res.json(task);
});

app.put("/tasks/:id", (req, res) => {
  const task = tasks.find((item) => item.id === req.params.id);

  if (!task) {
    return res.status(404).json({ error: "Tâche introuvable." });
  }

  const { title, description, status } = req.body;

  if (title !== undefined) {
    if (typeof title !== "string" || !title.trim()) {
      return res.status(400).json({ error: "Le champ 'title' est invalide." });
    }
    task.title = title.trim();
  }

  if (description !== undefined) {
    if (typeof description !== "string" || !description.trim()) {
      return res.status(400).json({ error: "Le champ 'description' est invalide." });
    }
    task.description = description.trim();
  }

  if (status !== undefined) {
    if (typeof status !== "string" || !status.trim()) {
      return res.status(400).json({ error: "Le champ 'status' est invalide." });
    }
    task.status = status.trim();
  }

  task.updatedAt = new Date().toISOString();

  return res.json(task);
});

app.delete("/tasks/:id", (req, res) => {
  const index = tasks.findIndex((item) => item.id === req.params.id);

  if (index === -1) {
    return res.status(404).json({ error: "Tâche introuvable." });
  }

  const [deletedTask] = tasks.splice(index, 1);
  return res.json({ message: "Tâche supprimée.", task: deletedTask });
});

const port = process.env.PORT || 8080;

app.listen(port, () =>
  console.log(`app listening on http://localhost:${port}`)
);