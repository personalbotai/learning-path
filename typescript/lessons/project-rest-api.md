# Project: REST API dengan TypeScript (Express.js)

Bangun RESTful API menggunakan Express.js dengan TypeScript. Project ini mencakup proper typing untuk request/response, middleware, validation, error handling, dan database integration dengan Drizzle ORM.

⏱️ 4-6 jam
📊 Kesulitan: Project

## 🎯 Tujuan Pembelajaran

-
Setup Express.js project dengan TypeScript

-
Typing untuk Express Request/Response objects

-
Type-safe route handlers dan middleware

-
Request validation dengan Zod atau Joi

-
Error handling dan proper HTTP status codes

## 📚 Konten Utama

### Project: Task Management API

Kita akan membuat REST API untuk manajemen tasks dengan:

- CRUD operations (Create, Read, Update, Delete)

- Request validation

- Error handling konsisten

- In-memory storage (or SQLite for persistence)

- Type-safe throughout

### Setup Project

# Create project
mkdir task-api-ts
cd task-api-ts

# Initialize
npm init -y

# Install dependencies
npm install express zod
npm install --save-dev typescript @types/node @types/express tsx

# Initialize TypeScript
npx tsc --init

### Type Definitions

`src/types.ts`:

export interface Task {
id: string;
title: string;
description?: string;
completed: boolean;
priority: 'low' | 'medium' | 'high';
createdAt: Date;
updatedAt: Date;
}

export type TaskInput = Omit<Task, 'id' | 'createdAt' | 'updatedAt'>;

export type TaskUpdate = Partial<Omit<Task, 'id' | 'createdAt'>>;

export interface ApiResponse<T> {
success: boolean;
data?: T;
error?: string;
message?: string;
}

### Validation with Zod

`src/validation.ts`:

import { z } from 'zod';
import { TaskInput, TaskUpdate } from './types';

export const taskInputSchema = z.object({
title: z.string().min(1).max(100),
description: z.string().optional(),
completed: z.boolean().optional().default(false),
priority: z.enum(['low', 'medium', 'high']).default('medium')
}) as z.ZodType<TaskInput>;

export const taskUpdateSchema = z.object({
title: z.string().min(1).max(100).optional(),
description: z.string().optional(),
completed: z.boolean().optional(),
priority: z.enum(['low', 'medium', 'high']).optional()
}) as z.ZodType<TaskUpdate>;

// Type inference from schema
export type TaskInputValidated = z.infer<typeof taskInputSchema>;  // same as TaskInput
export type TaskUpdateValidated = z.infer<typeof taskUpdateSchema>;  // same as TaskUpdate

### Typed Express App

`src/app.ts`:

import express from 'express';
import { Task, TaskInput, TaskUpdate, ApiResponse } from './types';

const app = new express();

app.use(express.json());

// In-memory storage (replace with real DB)
let tasks: Task[] = [];

// GET all tasks
app.get<ApiResponse<Task[]>>('/api/tasks', (req, res) => {
res.json({ success: true, data: tasks });
});

// GET single task
app.get<ApiResponse<Task>, { id: string }>('/api/tasks/:id', (req, res) => {
const task = tasks.find(t => t.id === req.params.id);
if (!task) {
return res.status(404).json({ success: false, error: 'Task not found' });
}
res.json({ success: true, data: task });
});

// POST create task
app.post<ApiResponse<Task>, TaskInput>('/api/tasks', (req, res) => {
const newTask: Task = {
id: crypto.randomUUID(),
title: req.body.title,
description: req.body.description,
completed: req.body.completed || false,
priority: req.body.priority || 'medium',
createdAt: new Date(),
updatedAt: new Date()
};
tasks.push(newTask);
res.status(201).json({ success: true, data: newTask, message: 'Task created' });
});

// PUT update task
app.put<ApiResponse<Task>, { id: string }, TaskUpdate>('/api/tasks/:id', (req, res) => {
const index = tasks.findIndex(t => t.id === req.params.id);
if (index === -1) {
return res.status(404).json({ success: false, error: 'Task not found' });
}
tasks[index] = { ...tasks[index], ...req.body, updatedAt: new Date() };
res.json({ success: true, data: tasks[index] });
});

// DELETE task
app.delete<ApiResponse<null>, { id: string }>('/api/tasks/:id', (req, res) => {
const index = tasks.findIndex(t => t.id === req.params.id);
if (index === -1) {
return res.status(404).json({ success: false, error: 'Task not found' });
}
tasks.splice(index, 1);
res.json({ success: true, message: 'Task deleted' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

### Middleware with Types

`src/middleware/errorHandler.ts`:

import { Request, Response, NextFunction } from 'express';
import { ApiResponse } from '../types';

export interface AppError extends Error {
statusCode?: number;
isOperational?: boolean;
}

export const errorHandler = (
err: AppError,
req: Request,
res: Response<ApiResponse<null>>,
next: NextFunction
) => {
const status = err.statusCode || 500;
const message = err.message || 'Internal server error';

res.status(status).json({
success: false,
error: message
} as ApiResponse<null>);
};

### Best Practices

- Use `express.Response<T>` generic untuk typed JSON responses

- Define consistent `ApiResponse<T>` envelope untuk semua endpoints

- Validate request bodies dengan Zod/Joi sebelum processing

- Use `HTTP status codes` appropriately (200, 201, 400, 404, 500)

- Implement global error handling middleware

- Use `async/await` dan proper error catching

- Log errors dengan structured logging (pino, winston)

## 💻 Exercises

### Exercise 1: Setup & Basic Routes

Setup Express dengan TypeScript.

- Initialize project dengan TypeScript + Express

- Create `Task` interface dan `ApiResponse<T>` type

- Implement GET `/api/tasks` dengan typed response

- Test dengan curl/Postman

### Exercise 2: CRUD Operations

Implement full CRUD dengan validation.

- Add POST `/api/tasks` dengan request body typing

- Add PUT `/api/tasks/:id` dengan partial update

- Add DELETE `/api/tasks/:id`

- Handle 404 errors properly

### Exercise 3: Validation & Error Handling

Tambahkan Zod validation dan error middleware.

- Install Zod dan create schemas untuk TaskInput dan TaskUpdate

- Create validation middleware yang parse dan validate request body

- Create typed error handler middleware

- Test dengan invalid inputs dan verify proper error responses

← Previous

Take Quiz
