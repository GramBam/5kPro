import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, reset } from "../features/auth/authSlice";

function Login() {
  const [formData, setFormData] = useState({ email: '', password: '', })

  const { email, password } = formData

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

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()

    const userData = {
      email,
      password
    }

    dispatch((login as (user: {}) => void)(userData))
  }

  return (
    <>
      <section className="heading">
        <h1>
          Login
        </h1>
      </section>

      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input type="text" className="form-control" id='email' value={email} onChange={onChange} name="email" placeholder='Enter Email' required />
          </div>
          <div className="form-group">
            <input type="password" className="form-control" id='password' value={password} onChange={onChange} name="password" placeholder='Enter Password' required />
          </div>
          <div className="form-group">
            <button className="btn btn-block">Submit</button>
          </div>
        </form>
      </section>
    </>
  )
}
export default Login