import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    trailerVideo: null,
    upComingMovies: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addUpComingMovies: (state, action) => {
      state.upComingMovies = action.payload;
    },
  },
});
export const {
  addNowPlayingMovies,
  addTrailerVideo,
  addPopularMovies,
  addUpComingMovies,
} = moviesSlice.actions;
export default moviesSlice.reducer;
