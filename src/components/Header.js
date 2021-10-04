import PropTypes from 'prop-types'

const Header = ({title}) => {
    return (
        <header>
            <h1> {title}</h1>
            
        </header>
    )
}

Header.defaultProps = {
    title: "task tracker from props",
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// CSS in the JS page 
//const headingStyle = {
//     color: "red", 
//     backgroundColor: "black"
// };


export default Header

