import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.spacexdata.com/v3/rockets';
const initialState = {
  isLoading: false,
  data: [],
  error: '',
};
const getData = (data) => data.map((rockets) => ({
  id: rockets.id,
  name: rockets.rocket_name,
  description: rockets.description,
  image: rockets.flickr_images,
}));

export const fetchRocketsData = createAsyncThunk(
  'rockets/fetchRocketsData',
  async () => {
    try {
      const response = await axios.get(url);
      const { data } = response;
      return getData(data);
    } catch (error) {
      throw new Error(error);
    }
  },
);
const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchRocketsData.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchRocketsData.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        data: action.payload,
      }))
      .addCase(fetchRocketsData.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.error.message,
      }));
  },
});
export default rocketsSlice.reducer;
