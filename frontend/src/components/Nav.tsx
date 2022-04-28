import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className="nav">
      <Link to="/" className="header">5kPro</Link>
      <div className='nav-buttons'>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/calculator">Pace Calculator</Link>
      </div>
    </div>
  )
}
export default Nav