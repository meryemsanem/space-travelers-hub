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

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchRocketsData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchRocketsData.fulfilled, (state, action) => {
      state.isLoading = false;
      const fetchRockets = action.payload.map((rockets) => {
        id = rockets.id;
        name = rockets.rocket_name;
        type = rockets.rocket_type;
        image = rockets.flickr_images;
        return rocket;
      });
      state.data = fetchRockets;
    });
    builder.addCase(fetchRocketsData.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default rocketsSlice.reducer;
export { fetchRocketsData };
