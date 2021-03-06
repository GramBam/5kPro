import axios from 'axios'
import { Entry } from './entrySlice'

const API_URL = '/api/entries/'

const createEntry = async (entryData: Entry, token: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  const response = await axios.post(API_URL, entryData, config)

  return response.data
}

const getEntries = async (token: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  const response = await axios.get(API_URL, config)

  return response.data
}

const entryService = {
  createEntry,
  getEntries
}

export default entryService