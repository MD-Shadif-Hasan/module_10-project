# ✅ Basic Todo List with Status Filter

## 📌 Module 8 Assignment – JavaScript

---

## 🧠 Project Overview

This project is a **console-based Todo List simulator** built using **pure JavaScript**. It demonstrates how to manage data using arrays and objects, and how to apply filtering logic in JavaScript using the `filter()` method.

Each **todo item** in the list is represented as a JavaScript object with the following properties:

- `title` (String): The name or description of the task (e.g., `"Do homework"`)
- `done` (Boolean): A status flag indicating whether the task is completed (`true`) or ongoing (`false`)

The program organizes the todo items into two categories:

- ✅ **Completed Tasks** – where `done: true`
- ⏳ **Ongoing Tasks** – where `done: false`

These tasks are then printed to the console in a clear, readable format.

---

## 🎯 Assignment Objectives

The main goals of this assignment are to:

- ✅ Use **JavaScript arrays and objects** effectively
- ✅ Practice **filtering data** with JavaScript
- ✅ Structure output using `console.log()`
- ✅ Write **clean, readable, and modular** code
- ✅ Document and demonstrate the code clearly

---

## 🔧 Features & Functionality

- ✅ Array of todo objects with consistent schema
- ✅ Filters completed and ongoing tasks using `filter()`
- ✅ Uses `forEach()` to display each category
- ✅ Fully console-based with no UI (no HTML input fields)
- ✅ Simple and clean logic
- ✅ Includes inline comments to explain the code

---

## 📂 Project Structure

```
📁 Basic-Todo-List/
├── todo.js       # Main JavaScript file containing the todo logic
└── README.md     # Complete project documentation
```

---

## 🛠️ How It Works (Logic Breakdown)

### 1. Define an array of todo objects

```javascript
const todos = [
  { title: "Do homework", done: false },
  { title: "Clean the room", done: true },
  { title: "Buy groceries", done: false },
  { title: "Pay electricity bill", done: true },
  { title: "Read a book", done: false }
];
```

### 2. Filter completed tasks

```javascript
const completedTasks = todos.filter(todo => todo.done);
```

### 3. Filter ongoing tasks

```javascript
const ongoingTasks = todos.filter(todo => !todo.done);
```

### 4. Display tasks in the console

```javascript
console.log("✅ Done:");
completedTasks.forEach((task, index) => {
  console.log(`${index + 1}. ${task.title}`);
});

console.log("\n⏳ Ongoing:");
ongoingTasks.forEach((task, index) => {
  console.log(`${index + 1}. ${task.title}`);
});
```

---

## 🧪 Sample Console Output

```
✅ Done:
1. Clean the room
2. Pay electricity bill

⏳ Ongoing:
1. Do homework
2. Buy groceries
3. Read a book
```

---

## ▶️ How to Run the Code

### 📋 Requirements:
- [Node.js](https://nodejs.org/) must be installed on your system.

### 💻 Steps:

```bash
# Move into the project folder
cd basic-todo-list

# Run the code
node todo.js
```

---


## ✅ Evaluation Checklist

| Requirement                     | Status      ||
|---------------------------------|-------------||
| Public GitHub repository        | ✅ Done     |
| Filtering logic using `filter()`| ✅ Done     |
| Clear, readable console output  | ✅ Done     |
| Code is clean and commented     | ✅ Done     |
| Demo video added to README      | ✅ Done     |

---


## 👤 Author Info

**Name:** *MD SHADIF HASAN*  
**GitHub:** [github.com/MD-Shadif-Hasan](https://github.com/MD-Shadif-Hasan/Module_10-project)  
**Institute/Class:** [OSTAD], (Full Stack Web Development with PHP, Laravel & Vue Js, Batch-8) 

---
