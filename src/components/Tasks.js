import Task from "./Task"   

export default function Tasks ({tasks}){

    return(
        <>
          { tasks.map((task)=>{ 
            
                return <Task key ={task.id} text ={task.text} day={task.day} onDelete ={onDelete}/>
            })}  
        </>
    )}
