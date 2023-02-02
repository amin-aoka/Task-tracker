import PropTypes from 'prop-types'
import Button from './Button';

 export default function Header ({title}){
  const  onClick = ()=>{
    console.log('Clicked')
  } 
    return(
        <header className="header">
           <h1>{title}</h1>
           <Button text ="add" color = "green" onClick = {onClick} /> 
        </header>
    )
 }

 Header.defaultProps = {
    title: 'Task Tracker',
  }
  
  Header.propTypes = {
    title: PropTypes.string.isRequired,
  }