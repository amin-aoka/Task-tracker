import PropTypes from 'prop-types'
 export default function Header ({title}){
    render(
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