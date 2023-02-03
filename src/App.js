
import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
    const [showAddTask,setShowAddTask]=useState(true);
    const[tasks,setTasks]= useState( [   
    {
        id:1,
        text:"Study Math",
        day: 'Feb 05th at 02:30',
        reminder:false,
    },
    {
        id:2,
        text:"Go gym",
        day: 'March 05th at 07:00',
        reminder:true,
    },
    {
        id:3,
        text:"Food Shopping",
        day: 'Jan 29th at 18:00',
        reminder:false,
    }]
)

const toggleReminder =(id)=>{
  setTasks(
    tasks.map((task)=>
      task.id === id ? {...task, reminder : !task.reminder} : task
      )
  )
}

const deleteTask= (id)=>{
  setTasks(
    tasks.filter((task)=> task.id !== id )
  )
}

const addTask = (task)=>{
  const id= Math.floor(Math.random() *1000) +1;
  const newTask =  {id, ...task}
  setTasks([...tasks, newTask])
}

const onAdd =()=>{
  setShowAddTask(!showAddTask)
}

  return (
    <div className="container">
      <Header title ="Task Tracker" onAdd ={onAdd} showAddTask = {showAddTask}/>
      {showAddTask?<AddTask onAdd={addTask}/> :""}
      {tasks.length !== 0 ?(<Tasks tasks={tasks} onDelete = {deleteTask} onToggle = {toggleReminder} /> ): ("No Task to show")}
    </div>
  );
}
export default App;
