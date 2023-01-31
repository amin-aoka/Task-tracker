import Task from "./Task"   

export default function Tasks ({tasks,onDelete,onDbl}){

    return(
        <>
          { tasks.map((task)=>{          
                return <Task key ={task.id} task={task} onDelete ={onDelete}/>
            })}  
        </>
    )}
 