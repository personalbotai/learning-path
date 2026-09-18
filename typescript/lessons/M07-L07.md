# Project: React Application dengan TypeScript

Bangun aplikasi React menggunakan TypeScript dengan proper typing untuk components, props, state, dan API interactions. Project ini mencakup setup, type-safe hooks, dan integration dengan REST API.

⏱️ 4-6 jam
📊 Kesulitan: Project

## 🎯 Tujuan Pembelajaran

-
Setup React project dengan TypeScript template (Vite atau CRA)

-
Typing untuk React components (props, state, events)

-
Menggunakan generic types dengan React hooks (useState, useEffect, useContext)

-
Type-safe API calls dengan fetch/axios

-
Custom hooks dengan proper return types

## 📚 Konten Utama

### Project: Todo List App

Kita akan membuat aplikasi Todo List dengan fitur:

- Add, complete, dan delete todos

- Filter by status (all, active, completed)

- Persist ke localStorage

- Fetch dari mock API (simulated async)

- Type-safe components dan hooks

### Setup Project

# Using Vite (recommended)
npm create vite@latest todo-ts-app -- --template react-ts
cd todo-ts-app
npm install

# Install additional dependencies
npm install axios uuid
npm install --save-dev @types/uuid

# Start dev server
npm run dev

### Type Definitions

`src/types.ts`:

export interface Todo {
id: string;
title: string;
completed: boolean;
createdAt: Date;
}

export type FilterType = 'all' | 'active' | 'completed';

export interface TodoContextType {
todos: Todo[];
filter: FilterType;
addTodo: (title: string) => void;
toggleTodo: (id: string) => void;
deleteTodo: (id: string) => void;
setFilter: (filter: FilterType) => void;
get filteredTodos(): Todo[];
}

### Typed React Components

`src/components/TodoItem.tsx`:

import React from 'react';
import { Todo } from '../types';

interface TodoItemProps {
todo: Todo;
onToggle: (id: string) => void;
onDelete: (id: string) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete }) => {
return (
<div className="todo-item">
<input
type="checkbox"
checked={todo.completed}
onChange={() => onToggle(todo.id)}
/>
<span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
{todo.title}
</span>
<button onClick={() => onDelete(todo.id)}>Delete</button>
</div>
);
};

### Typed Custom Hooks

`src/hooks/useTodos.ts`:

import { useState, useEffect, useCallback, useMemo } from 'react';
import { Todo, FilterType, TodoContextType } from '../types';
import { v4 as uuidv4 } from 'uuid';

export const useTodos = (): TodoContextType => {
const [todos, setTodos] = useState<Todo[]>([]);
const [filter, setFilter] = useState<FilterType>('all');

// Load from localStorage on mount
useEffect(() => {
const saved = localStorage.getItem('todos');
if (saved) {
try {
const parsed: Todo[] = JSON.parse(saved);
setTodos(parsed);
} catch {
console.error('Failed to parse todos');
}
}
}, []);

// Save to localStorage whenever todos change
useEffect(() => {
localStorage.setItem('todos', JSON.stringify(todos));
}, [todos]);

const addTodo = useCallback((title: string) => {
const newTodo: Todo = {
id: uuidv4(),
title,
completed: false,
createdAt: new Date()
};
setTodos(prev => [...prev, newTodo]);
}, []);

const toggleTodo = useCallback((id: string) => {
setTodos(prev => prev.map(todo =>
todo.id === id ? { ...todo, completed: !todo.completed } : todo
));
}, []);

const deleteTodo = useCallback((id: string) => {
setTodos(prev => prev.filter(todo => todo.id !== id));
}, []);

const filteredTodos = useMemo(() => {
switch (filter) {
case 'active':
return todos.filter(t => !t.completed);
case 'completed':
return todos.filter(t => t.completed);
default:
return todos;
}
}, [todos, filter]);

return {
todos,
filter,
addTodo,
toggleTodo,
deleteTodo,
setFilter,
get filteredTodos() { return filteredTodos; }
};
};

### Type-Safe API Integration

`src/services/api.ts`:

import axios from 'axios';
import { Todo } from '../types';

const API_BASE = 'https://jsonplaceholder.typicode.com';

export const api = axios.create({
baseURL: API_BASE,
timeout: 5000,
headers: { 'Content-Type': 'application/json' }
});

// Type-safe response wrapper
interface ApiResponse<T> {
data: T;
status: number;
message: string;
}

export const fetchTodos = async (): Promise<Todo[]> => {
const response = await api.get<Todo[]>('/todos');
return response.data;
};

export const createTodo = async (title: string): Promise<Todo> => {
const response = await api.post<Todo>('/todos', { title, completed: false });
return response.data;
};

export const updateTodo = async (id: number, updates: Partial<Todo>): Promise<Todo> => {
const response = await api.put<Todo>(`/todos/${id}`, updates);
return response.data;
};

### Context dengan Type Safety

`src/context/TodoContext.tsx`:

import React from 'react';
import { TodoContextType } from '../types';
import { useTodos } from '../hooks/useTodos';

export const TodoContext = React.createContext<TodoContextType | null>(null);

export const TodoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
const todoContext = useTodos();

return (
<TodoContext.Provider value={todoContext}>
{children}
</TodoContext.Provider>
);
};

export const useTodoContext = (): TodoContextType => {
const context = React.useContext(TodoContext);
if (!context) {
throw new Error('useTodoContext must be used within TodoProvider');
}
return context;
};

### Main App Component

`src/App.tsx`:

import React from 'react';
import { TodoProvider, useTodoContext } from './context/TodoContext';
import { TodoItem } from './components/TodoItem';
import { FilterType } from './types';

const TodoList: React.FC = () => {
const { filteredTodos, filter, setFilter, addTodo, toggleTodo, deleteTodo } = useTodoContext();
const [newTitle, setNewTitle] = useState<string>('');

const handleSubmit = (e: React.FormEvent) => {
e.preventDefault();
if (newTitle.trim()) {
addTodo(newTitle.trim());
setNewTitle('');
}
};

return (
<div>
<h1>Todo List</h1>
<form onSubmit={handleSubmit}>
<input
value={newTitle}
onChange={(e) => setNewTitle(e.target.value)}
placeholder="Add new todo..."
/>
<button type="submit">Add</button>
</form>

<div>
{('all' | 'active' | 'completed').map(f => (
<button
key={f}
onClick={() => setFilter(f as FilterType)}
style={{ fontWeight: filter === f ? 'bold' : 'normal' }}
>
{f}
</button>
))}
</div>

<ul>
{filteredTodos.map(todo => (
<TodoItem
key={todo.id}
todo={todo}
onToggle={toggleTodo}
onDelete={deleteTodo}
/>
))}
</ul>
</div>
);
};

export default App = () => (
<TodoProvider>
<TodoList />
</TodoProvider>
);

### Best Practices

- Gunakan `React.FC<Props>` atau explicit return type untuk components

- Define interfaces untuk semua props, state, dan context values

- Use `useState<Type>` dengan explicit generic untuk type inference

- Type event handlers properly: `(e: React.ChangeEvent<HTMLInputElement>) => void`

- Use `useCallback` dan `useMemo` dengan proper dependency arrays

- Enable `"strict": true` di tsconfig untuk React projects

- Install `@types/react` dan `@types/react-dom` (biasanya sudah termasuk)

## 💻 Exercises

### Exercise 1: Setup & Basic Component

Setup React TypeScript project.

- Create Vite React TypeScript project

- Create `Todo` interface

- Build simple `TodoItem` component dengan typed props

- Render static list of todos

### Exercise 2: State Management

Implement typed custom hooks.

- Create `useTodos` hook dengan return type `TodoContextType`

- Implement add, toggle, delete functions dengan proper types

- Add localStorage persistence

- Wrap app dengan `TodoProvider`

### Exercise 3: API Integration

Fetch data dari REST API dengan type safety.

- Setup axios instance dengan TypeScript generics

- Create `fetchTodos` function yang return `Promise<Todo[]>`

- Use `useEffect` untuk fetch data on mount

- Handle loading dan error states dengan proper types

← Previous

Take Quiz
