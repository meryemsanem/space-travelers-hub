import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const apiUrl = 'https://api.spacexdata.com/v3/missions';

const initialState = {
  loading: false,
  missions: [],
  error: '',
};

export const fetchMissions = createAsyncThunk('missions/fetchMissions', async () => {
  try {
    const response = await axios.get(apiUrl);
    const { data } = response;
    console.log(data);
    return data;
  } catch (error) {
    throw Error(error);
  }
});

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  extraReducers: (bulider) => {
    bulider.addCase(fetchMissions.pending, (state) => ({
      ...state,
      loading: true,
    }))
      .addCase(fetchMissions.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        missions: action.payload,
      }))
      .addCase(fetchMissions.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.error.message,
      }));
  },
});

export default missionsSlice.reducer;
