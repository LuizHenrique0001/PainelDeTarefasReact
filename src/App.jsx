
import {useEffect, useState} from 'react'
import './App.css'
import Tasks from './Components/Tasks'
import AddTasks from "./Components/AddTasks.jsx";
import { v4 } from 'uuid';


function App() {
  const [tasks, setTask] = useState([]);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    },[tasks])

    useEffect(() => {
        const loadTasks = async () => {
            const response = await fetch('http://localhost:8080/', {method: 'GET'})

            const data = await response.json()
            console.log(data)
            setTask(data);
        }
        loadTasks()
    }, []);

  function onClickTask(taskId){
    const newTasks = tasks.map((task)=>{
      if(task.id === taskId){
        return { ...task, isCompleted: !task.isCompleted }
      }
      
      return task
    })
   
    setTask(newTasks);
  }

  function onDeleteTask(taskId){
      const newTasks = tasks.filter(task => task.id !== taskId);
      setTask(newTasks);
  }

  function onAddTask(title, description){
          const newTasks = {
          id: v4(),
          title: title,
          description: description,
          isCompleted: false
      }
      setTask([...tasks, newTasks])
  }

  function onViewTask(taskId){
      const task = tasks.filter(task => task.id === taskId);
      console.log(task);
  }

  return (
    <div className='w-screen h-full bg-slate-500 flex justify-center p-6'>
      <div className='w-[500] space-y-4 p-6space-y-4 p-6'>
        <h1 className='text-3xl text-slate-100 font-bold text-center'>Gerenciador de tarefas</h1>
        <AddTasks onAddTask={onAddTask} />
        <Tasks tasks={tasks} onClickTask={onClickTask} onViewTask={onViewTask} onDeleteTask={onDeleteTask} />
      </div>
    </div>
  )
}

export default App

