import lang from "../utils/languageConstants";
import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constant";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch= useDispatch();
  const langKeySelected = useSelector((store) => store.config.language);
  const searchText = useRef(null);

  // search mvie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };
  const handleGptSearchClick = async () => {
    //console.log(searchText.current.value);
    //make an api call to gpt api and get movie results
    const gptQuery =
      "Act as a Movie Recommendation sysytem and suggest some movies for the query" +
      searchText.current.value +
      ".only give me names of 5 movies,comma seperated like the example result given ahead.Example Result: Gadar , Sholey, Don, Sankranthi, Koi Mil Gaya";
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    if (gptResults.choices) {
      //Write Error Handling
    }
    console.log(gptResults.choices?.[0]?.message?.content);
    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults);
    dispatch(addGptMovieResult({movieNames:gptMovies,movieResults:tmdbResults}));
  };

  return (
    <div className="pt-[50%] md:pt-[15%] flex justify-center">
      <form
        className="w-full md:w-1/2 grid grid-cols-12 "
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          ref={searchText}
          type="text"
          placeholder={lang[langKeySelected].gptSearchPlaceHolder}
          className="p-4 m-4 col-span-9"
        ></input>
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[langKeySelected].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
