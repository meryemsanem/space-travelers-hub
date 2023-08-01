import { createAsyncThunk } from '@reduxjs/toolkit';
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