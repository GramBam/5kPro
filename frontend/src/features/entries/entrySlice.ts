import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { RootStateOrAny } from 'react-redux';
import entryService from './entryService'

interface EntryState {
  entries: Entry[] | [];
  entry: Partial<Entry>;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string;
}

export interface Entry {
  date: string;
  speed: number;
}

const initialState: EntryState = {
  entries: [],
  entry: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const createEntry = createAsyncThunk<RootStateOrAny, Entry, { state: RootStateOrAny }>
  ("entries/create", async (entryData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await entryService.createEntry(entryData, token);
    } catch (error: any) {
      const message: string =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  });

export const getEntries = createAsyncThunk('entries/getAll', async (_, thunkAPI) => {
  try {
    const token = (thunkAPI.getState() as RootStateOrAny).auth.user.token
    return await entryService.getEntries(token)
  } catch (error: any) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
    return thunkAPI.rejectWithValue(message)
  }
})

export const entrySlice = createSlice({
  name: 'entry',
  initialState,
  reducers: {
    reset: (state) => initialState
  },
  extraReducers: (builder) => {
    builder
      .addCase(createEntry.pending, (state) => { state.isLoading = true })
      .addCase(createEntry.fulfilled, (state) => {
        state.isLoading = false
        state.isSuccess = true
      })
      .addCase(createEntry.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload as string
      })
      .addCase(getEntries.pending, (state) => { state.isLoading = true })
      .addCase(getEntries.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.entries = action.payload
      })
      .addCase(getEntries.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload as string
      })
  }
})

export const { reset } = entrySlice.actions
export default entrySlice.reducer