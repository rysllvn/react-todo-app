import { useMemo, useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import NewTask from './components/NewTask';
import TaskCard from './components/TaskCard';

export type Task = {
	id: string;
	name: string;
	description: string;
	completed: boolean;
};

function App() {
	const [tasks, setTasks] = useState<{ [key: string]: Task }>({});

	const [todos, completed] = useMemo(() => {
		const todos: Task[] = [];
		const completed: Task[] = [];
		Object.values(tasks).forEach((task) => {
			if (task.completed) {
				completed.push(task);
			} else {
				todos.push(task);
			}
		});
		return [todos, completed];
	}, [tasks]);

	function handleNewTask(task: Task) {
		const updatedTasks = { ...tasks };
		updatedTasks[task.id] = task;
		setTasks(updatedTasks);
	}

	function handleTaskChange(task: Task) {
		const updatedTasks = { ...tasks };
		updatedTasks[task.id] = task;
		setTasks(updatedTasks);
	}

	return (
		<div className="flex flex-col gap-2">
			<header>
				<a href="https://reactjs.org" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
				<h1 className="text-6xl text-blue-500">React Todo</h1>
			</header>
			<main className="flex w-full gap-4">
				<section className="flex flex-col gap-2">
					<h2>To Do</h2>
					<ul>
						{todos.map((task) => {
							return <TaskCard key={task.id} task={task} onChange={handleTaskChange} />;
						})}
					</ul>
					<NewTask onNewTask={handleNewTask} />
				</section>
				<section className="flex flex-col gap-2">
					<h2>Completed</h2>
					<ul>
						{completed.map((task) => {
							return <TaskCard key={task.id} task={task} onChange={handleTaskChange} />;
						})}
					</ul>
				</section>
			</main>
		</div>
	);
}

export default App;
