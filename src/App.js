
import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
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

  return (
    <div className="container">

      <Header title ="Task Tracker"/>
      <Tasks tasks={tasks}/>
      
    </div>
  );
}
export default App;
