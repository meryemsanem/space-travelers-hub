import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.spacexdata.com/v3/rockets';

const fetchRocketsData = createAsyncThunk(
  'rockets/fetchRocketsData',
  async (thunkAPI) => {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('error');
    }
  }
);
const initialState = {
  data: [],
  error: null,
  isLoading: false,
};
