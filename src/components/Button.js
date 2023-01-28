import PropTypes from 'prop-types'
export default function Button ({color,text}){
    render(
        <button style= {{ backgroundColor:color}}className ="btn"> {text}</button>
    )
}

Button.defaultProps = {
    color: 'steelblue',
  }
  
  Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
  }