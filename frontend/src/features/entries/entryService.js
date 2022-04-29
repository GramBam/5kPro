import axios from 'axios'

const API_URL = '/api/entries/'

const createEntry = async (entryData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  const response = await axios.post(API_URL, entryData, config)

  return response.data
}

const entryService = {
  createEntry
}

export default entryService