// ✅ Array of Todo Items
const todos = [
  { title: "Do homework", done: false },
  { title: "Clean the room", done: true },
  { title: "Buy groceries", done: false },
  { title: "Pay electricity bill", done: true },
  { title: "Read a book", done: false }
];

// ✅ Filter Completed Tasks
const completedTasks = todos.filter(todo => todo.done);

// ✅ Filter Ongoing Tasks
const ongoingTasks = todos.filter(todo => !todo.done);

// ✅ Display Completed Tasks
console.log("✅ Done:");
completedTasks.forEach((task, index) => {
  console.log(`${index + 1}. ${task.title}`);
});

// ✅ Display Ongoing Tasks
console.log("\n⏳ Ongoing:");
ongoingTasks.forEach((task, index) => {
  console.log(`${index + 1}. ${task.title}`);
});
