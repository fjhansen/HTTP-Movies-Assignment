import React, { useEffect, useState } from 'react';
import axios from 'axios';
import api from "../utils/api"
import { useRouteMatch, useHistory } from 'react-router-dom';
import MovieCard from './MovieCard';
import { Link } from 'react-router-dom'


function Movie({ addToSavedList, setMovieList, movies }) {
  const [movie, setMovie] = useState(null);
  const match = useRouteMatch();
  const history = useHistory();

  const fetchMovie = id => {
    api()
      .get(`/api/movies/${id}`)
      .then(res => {
        setMovie(res.data)
        console.log("MOVIE.JS: ", res.data)
      })
        
      .catch(err => console.log(err.response));
  };

  const saveMovie = () => {
    addToSavedList(movie);
  };

  useEffect(() => {
    fetchMovie(match.params.id);
  }, [match.params.id]);



  if (!movie) {
    return <div>Loading movie information...</div>;
  }
  const handleDelete = id => {

    // const movie = movie.find(movie => movie.id === id)

    api()
    // .delete(`/api/movies/${match.params.id}`)
    .delete(`/api/movies/${id}`)
    .then(result => {
      setMovieList(movies.filter(movie => movie.id !== result.data))
      console.log("movie deleted")
    
      history.push("/")
    })
    .catch(error => {
      console.log("DEL ERROR: ", error)
      setMovie()
    })
  }

  const handleUpdate = event => {
    event.preventDefault()
    history.push(`/update-movie/${movie.id}`)
  }

  return (
    <div className='save-wrapper'>
      <MovieCard movie={movie} />
<div>
      <div className='save-button' onClick={saveMovie}>
        Save      

      </div>  
      {/* <Link to={`/api/movies/${match.id}`}>
        Delete
      </Link> */}
      <div
      onClick=
      {() => {handleDelete(match.params.id)}}
      >
        Delete
      </div>
      <Link to={`/update-movie/${match.params.id}`}>
      <div>
        Edit
      </div>
      </Link>

</div>
{/* cd friends
yarn add now
client
yarn now --prod */}


    </div>
  );
}

export default Movie;
