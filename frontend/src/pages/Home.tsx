import RunLog from "../components/RunLog"
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux'
import { ChangeEvent, FormEvent, useState } from "react";
import { createEntry, reset } from "../features/entries/entrySlice";

function Home() {
  const { user } = useSelector((state: RootStateOrAny) => state.auth)

  const [submitting, setSubmitting] = useState(false)
  const [date, setDate] = useState('')
  const [speed, setSpeed] = useState(0)

  const dispatch = useDispatch()

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    const data = { date, speed }
    dispatch((createEntry as (entryData: { date: string, speed: number }) => void)(data))
  }

  const inputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.id === 'speed') {
      setSpeed(Number(e.target.value))
    } else {
      setDate(e.target.value)
    }
  }

  return user && (
    <>
      <RunLog />
      {submitting &&

        <section className='form'>
          <form onSubmit={onSubmit}>
            <div className='form-group'>
              <label htmlFor='date'>date</label>
              <input
                name='date'
                id='date'
                type='date'
                className='form-control'
                onChange={inputChange}
              ></input>
              <label htmlFor='date'>speed</label>
              <input
                name='speed'
                id='speed'
                type='number'
                className='form-control'
                onChange={inputChange}
              ></input>
            </div>
            <div className='form-group'>
              <button className='btn btn-block'>Submit</button>
            </div>
          </form>
        </section>
      }
      {!submitting && <button className='new-entry' onClick={() => setSubmitting(true)}>New Entry</button>}
    </>

  )
}
export default Home