import { ChangeEvent, FormEvent, useState, useEffect } from "react"
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { register, reset } from '../features/auth/authSlice'

function Register() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', password2: '' })

  const { name, email, password, password2 } = formData

  const dispatch = useDispatch()
  const nav = useNavigate()

  const { user, isLoading, isError, isSuccess, message } = useSelector((state: RootStateOrAny) => state.auth)

  useEffect(() => {
    if (isError) {
      alert(message)
    }

    if (isSuccess || user) {
      nav('/')
    }

    dispatch(reset())
  }, [isError, isSuccess, user, message, nav, dispatch])


  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()

    if (password !== password2) {
      alert('Passwords do not match')
    } else {
      const userData = {
        name,
        email,
        password
      }
      dispatch((register as (user: { name: string, email: string, password: string }) => void)(userData))
    }

  }

  return (
    <>
      <section className="heading">
        <h1>
          Register
        </h1>
        <p>Please create an account</p>
      </section>

      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input type="text" className="form-control" id='name' value={name} onChange={onChange} name="name" placeholder='Enter Name' required />
          </div>
          <div className="form-group">
            <input type="text" className="form-control" id='email' value={email} onChange={onChange} name="email" placeholder='Enter Email' required />
          </div>
          <div className="form-group">
            <input type="password" className="form-control" id='password' value={password} onChange={onChange} name="password" placeholder='Enter Password' required />
          </div>
          <div className="form-group">
            <input type="password" className="form-control" id='password2' value={password2} onChange={onChange} name="password2" placeholder='Confirm Password' required />
          </div>
          <div className="form-group">
            <button className="btn btn-block">Submit</button>
          </div>
        </form>
      </section>
    </>
  )
}
export default Register