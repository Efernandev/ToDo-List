import FlatList from 'flatlist-react';
// aos lib animatiom
import AOS from "aos";
import 'aos/dist/aos.css';
// react icons
import { GrAddCircle } from "react-icons/gr"
import { FaTrashAlt } from "react-icons/fa"
import { GiNotebook } from "react-icons/gi"

import { useState, useEffect, ChangeEvent, InvalidEvent, FormEvent } from 'react';
import styled from "styled-components";
import { PanelEmpty, ContentDashboard } from './styles'
interface Task {
	id: number;
	content: string;
	isChecked: boolean;
}

export function Dashboard() {
	const [tasks, setTasks] = useState<Task[]>([]);
	const [tasksChecked, setNumberTasksCheckeds] = useState(0);
	const [newTask, setNewTask] = useState('');

	function handleCreateNewTask(event: FormEvent) {
		event.preventDefault();
		if (!newTask) return;

		const newTaskCreated = {
			id: Math.random(),
			content: newTask,
			isChecked: false
		}

		setTasks([...tasks, newTaskCreated])
		setNewTask('');
	}

	function handleCheckingTask(id: number) {
		const changedTasks = tasks.map(task => task.id === id ? { ...task, isChecked: !task.isChecked } : task)
		setTasks(changedTasks)
		const newTaskCounter = changedTasks.filter(task => task.isChecked === true) || 0;
		setNumberTasksCheckeds(newTaskCounter?.length)
	}

	function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
		event.target.setCustomValidity('Esse campo é obrigatório!')
	}

	function deleteTask(id: number) {
		const tasksDeleted = tasks.filter(task => task.id !== id)
		setTasks(tasksDeleted)
		const changedTasks = tasksDeleted.map(task => task.id === id ? { ...task, isChecked: !task.isChecked } : task)
		const newTaskCounter = changedTasks.filter(task => task.isChecked === true) || 0;
		setNumberTasksCheckeds(newTaskCounter?.length)
	}


	// color
	const BtnStyled = styled.button`
		path {
			stroke:#fff;
		}
	`;

	function myTasks(task: Task) {
		return (
			<div className='task' >
				<div className='wrapper'>
					<label className='checkField'>
						<input
							type="checkbox"
							checked={task.isChecked}
							onClick={() => handleCheckingTask(task.id)}
						/>
						<span className='checkHere'></span>
					</label>
					<p className={task.isChecked === true ? 'risk' : 'content'}>{task.content}</p>
				</div>
				<button className='btnDelete' onClick={() => deleteTask(task.id)} >
					<FaTrashAlt />
				</button>
			</div>
		)
	}

	function panelShowContentisEmpty() {
		return (
			<PanelEmpty>
				<GiNotebook />
				<h3>Você ainda não tem tarefas cadastradas</h3>
				<p>Crie tarefas e organize seus itens a fazer</p>
			</PanelEmpty>
		)
	}
	useEffect(() => {
		AOS.init({
			duration: 800
		})
	}, [])
	return (
		<ContentDashboard>

			<div className='col'>
				<form className='field' onSubmit={handleCreateNewTask}>
					<input
						type="text"
						placeholder="Adicione uma nova tarefa"
						onChange={(e) => {
							setNewTask(e?.target?.value)
						}}
						value={newTask}
						onInvalid={handleNewTaskInvalid}
						required
						data-aos="fade-right"
					/>
					<BtnStyled>
						Criar
						<GrAddCircle />
					</BtnStyled>
				</form>
				<div className='panel'>
					<div className='categories'>
						<span>
							<p className='created'>Tarefas Criadas</p>
							<strong className='number'>{tasks.length}</strong>
						</span>
						<span>
							<p className='completed'>Tarefas Concluidas</p>
							<strong className='number'>{<p>{tasksChecked} de {tasks.length} concluídas</p>}</strong>
						</span>
					</div>
					<FlatList
						list={tasks}
						renderItem={(item: Task) => myTasks(item)}
						renderWhenEmpty={panelShowContentisEmpty}
					/>
				</div>
			</div>
		</ContentDashboard>
	)
}