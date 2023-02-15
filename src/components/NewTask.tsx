import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

type Props = {
	onNewTask: Function;
};
export default function NewTaskForm({ onNewTask }: Props) {
	const [open, setOpen] = useState(false);
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [due, setDue] = useState('');

	function handleAddTask() {
		setOpen(true);
	}

	function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
		setName(event.target.value);
	}
	function handleDescriptionChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
		setDescription(event.target.value);
	}
	function handleDueChange(event: React.ChangeEvent<HTMLInputElement>) {
		setDue(event.target.value);
	}

	function handleCancel() {
		setOpen(false);
	}
	function handleConfirm() {
		onNewTask({
			id: uuidv4(),
			completed: false,
			name,
			description
		});
		setName('');
		setDescription('');
		setDue('');
		setOpen(false);
	}

	return (
		<>
			{open ? (
				<div className="flex flex-col border border-slate-500 max-w-xs rounded-md p-2 gap-1">
					<input
						className="w-full focus:border-none"
						type="text"
						placeholder="Task name"
						onChange={handleNameChange}
						value={name}
					/>
					<textarea
						placeholder="Description"
						onChange={handleDescriptionChange}
						value={description}
					/>
					<div className="flex justify-end w-full">
						<button onClick={handleCancel}>Cancel</button>
						<button onClick={handleConfirm}>Confirm</button>
					</div>
				</div>
			) : (
				<button className="border border-indigo-600 p-3 rounded w-fit" onClick={handleAddTask}>
					Add Task
				</button>
			)}
		</>
	);
}
