import { useState } from 'react';
import { Task } from '../App';

type Props = {
	task: Task;
	onChange: Function;
};
export default function TaskCard({ task, onChange }: Props) {
	const { completed, name, description } = task;
	function handlCompletedChange() {
		onChange({ ...task, completed: !completed });
	}
	return (
		<li className="flex items-start border rounded-md w-80 max-w-xs shadow-md p-3 gap-3">
			<input
				className="mt-2 cursor-pointer"
				type="checkbox"
				name=""
				id=""
				onChange={handlCompletedChange}
				checked={completed}
			/>
			<div className="flex flex-col items-start">
				<div className="text-md">{name}</div>
				<div className="text-sm text-slate-400">{description}</div>
			</div>
		</li>
	);
}
