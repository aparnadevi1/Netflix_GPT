import React from 'react'
import { useSelector } from 'react-redux';
import MovieList from"./MovieList";

const GptMovieSuggestions = () => {

  const {movieResults,movieNames}=useSelector((store)=>store.gpt);
  if(!movieNames)return null;
  return (
    <div className="p-4 m-4 text-white">
      <div>
        {movieNames.map((movieName,index)=>(
           <MovieList key={movieName}title={movieNames[index]} movies={movieResults[index]}/>
        ))}
        
      </div>
    </div>
  )
}

export default GptMovieSuggestions;