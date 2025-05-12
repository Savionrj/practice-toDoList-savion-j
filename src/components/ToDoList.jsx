// Define an array of static to -do list tasks(e.g., "Learn React",
//   "Build a project", "Read documentation").
// ■ Hard code a To - Do list to display each task inside a bulleted list of your choice.

let tasks = ['Learn React', 'Build a Project', 'Read Documentation'];

export default function ToDoList() {
  return (
    <div>
      <ul>
        <li>Learn React</li>
        <li>Build a Project</li>
        <li>Read Documentation</li>
      </ul>
    </div>
  );
}
