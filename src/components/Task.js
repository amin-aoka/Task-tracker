import {FaTimes} from 'react-icons/fa'
const Task =({text,day,id,onDelete})=>{
    return(
        <div className="task" key={id}>
            <h3>{text} <FaTimes onClick={onDelete} style = {{color:"red", cursor:"pointer"}}/></h3>
            <p>{day}</p>
        </div>
    )
}
export default Task;