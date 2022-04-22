import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className="nav">
      <Link to="/" className="header">5kPro</Link>
      <div className='nav-buttons'>
        <Link to="/" className="btn btn-ghost btn-sm rounded-btn">Home</Link>
        <Link to="/calculator" className="btn btn-ghost btn-sm rounded-btn">Pace Calculator</Link>
      </div>
    </div>
  )
}
export default Nav