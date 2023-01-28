import PropTypes from 'prop-types'
 export default function Header ({title}){
    return(
        <header className="header">
            {title}
        </header>
    )
 }

 Header.defaultProps = {
    title: 'Task Tracker',
  }
  
  Header.propTypes = {
    title: PropTypes.string.isRequired,
  }