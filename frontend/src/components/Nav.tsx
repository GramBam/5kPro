import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'

function Nav() {

  const nav = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state: RootStateOrAny) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    nav('/')
  }

  return (
    <div className="nav">
      <Link to="/" className="header">5kPro</Link>
      <div className='nav-buttons'>
        {user ? (
          <button onClick={onLogout}>Logout</button>

        ) : (
          <div>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </div>

        )}

        <Link to="/calculator">Pace Calculator</Link>
      </div>
    </div>
  )
}
export default Nav