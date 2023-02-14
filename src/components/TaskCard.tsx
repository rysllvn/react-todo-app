import { Task } from "../App";

export default function TaskCard({ task }: { task: Task }) {
  const { completed, name, description, due } = task;
  return (
    <li className="border rounded-md max-w-md shadow">
      <div>{completed ? "done" : "not done"}</div>
      <div>{name}</div>
      <div>{description}</div>
      {due ? <div>{due}</div> : <div>No Date</div>}
    </li>
  );
}
