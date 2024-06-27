import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../customHooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../customHooks/usePopularMovies";
import useUpComingMovies from "../customHooks/useUpComingMovies.js";
import GptSearch from "./GptSearch.js";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useUpComingMovies();
  return (
    <div>
      <Header />
      {
        showGptSearch ? 
        (<GptSearch />)
        :(
        <> 
        <MainContainer />
        <SecondaryContainer />
        </>)
      }
      
    </div>
  );
};

export default Browse;
