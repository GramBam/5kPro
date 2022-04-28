import { ChangeEvent, FormEvent, useState } from "react"
import { useNavigate } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({ email: '', password: '', })

  const { email, password } = formData



  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
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