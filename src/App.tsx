import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import NewTask from "./components/NewTask";
import TaskCard from "./components/TaskCard";

export type Task = {
  id: string;
  name: string;
  description: string;
  due: string | null;
  completed: boolean;
};

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleNewTask(task: Task) {
    setTasks([...tasks, task]);
  }

  return (
    <div>
      <header>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
          <h1>React Todo</h1>
        </a>
      </header>
      {tasks.length > 0 ? (
        <ul>
          {tasks.map((task) => {
            return <TaskCard key={task.id} task={task} />;
          })}
        </ul>
      ) : (
        <div>No tasks yet</div>
      )}
      <NewTask onNewTask={handleNewTask} />
    </div>
  );
}

export default App;
