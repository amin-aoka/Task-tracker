import PropTypes from 'prop-types'
import Button from './Button';

 export default function Header ({title,onAdd,showAddTask}){

    return(
        <header className="header">
           <h1>{title}</h1>
           <Button text ={showAddTask ? "close" : "add"} color = {showAddTask ? "red" : "ngreen"} onAdd = {onAdd} /> 
        </header>
    )
 }

 Header.defaultProps = {
    title: 'Task Tracker',
  }
  
  Header.propTypes = {
    title: PropTypes.string.isRequired,
  }