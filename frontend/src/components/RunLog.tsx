import { useState, useEffect } from 'react'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import { getEntries, reset } from '../features/entries/entrySlice'
import Entry from './Entry'

function RunLog() {

  const { entries, isLoading, isSuccess } = useSelector((state: RootStateOrAny) => state.entries)
  const dispatch = useDispatch()

  //unmount
  useEffect(() => {
    return () => {
      if (isSuccess) {
        dispatch(reset())
      }
    }
  }, [dispatch, isSuccess])

  useEffect(() => {
    dispatch(getEntries())
  }, [dispatch])

  return (
    <div className="log">
      {entries.map((run: { date: string, speed: number }, i: number) => { return <Entry date={run.date} speed={run.speed} key={i} /> })}
    </div>
  )
}
export default RunLog