import React, { useCallback, useEffect, useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';
import AddMovie from './components/AddMovie';
function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // const dummyMovies = [
  //   {
  //     id: 1,
  //     title: 'Some Dummy Movie',
  //     openingText: 'This is the opening text of the movie',
  //     releaseDate: '2021-05-18',
  //   },
  //   {
  //     id: 2,
  //     title: 'Some Dummy Movie 2',
  //     openingText: 'This is the second opening text of the movie',
  //     releaseDate: '2021-05-19',
  //   },
  // ];
  // function fetchMoviesHandler() {
  //   fetch('https://swapi.dev/api/films/')
  //     .then((respone) => respone.json())
  //     .then((data) => {
  //       const MoviesFetched = data.results.map((movieData) => {
  //         return {
  //           id: movieData.episode_id,
  //           title: movieData.title,
  //           openingText: movieData.opening_crawl,
  //         };
  //       });
  //       setMovies(MoviesFetched);
  //     });
  // }
  //fetch with asyn await
  const fetchMoviesHandler = useCallback(async () => {
    setLoading(true);
    try {
      let response = await fetch(
        'https://react-httprequest-4a67c-default-rtdb.firebaseio.com/movies.json'
      );
      if (!response.ok) {
        throw new Error('something went wrong!');
      }
      let data = await response.json();
      let loadedMovie = [];
      // let fethcedMoive = data.map((movieData) => {
      //   return {
      //     id: movieData.episode_id,
      //     title: movieData.title,
      //     openingText: movieData.opening_crawl,
      //   };
      // });
      for (const key in data) {
        loadedMovie.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        });
      }
      setMovies(loadedMovie);
    } catch (error) {
      setError(error.message);
    }

    setLoading(false);
  }, []);
  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);
  async function addMovieHandler(movie) {
    if (!movie.title || !movie.releaseDate || !movie.openingText) {
      console.log('add Content');
      return;
    }
    let response = await fetch(
      'https://react-httprequest-4a67c-default-rtdb.firebaseio.com/movies.json',
      {
        method: 'POST',
        body: JSON.stringify(movie),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const data = await response.json();
    console.log(data);
  }
  let content = <p>there no moive</p>;
  if (movies.length > 0) {
    content = <MoviesList movies={movies}></MoviesList>;
  }
  if (error) {
    content = <p>{error}</p>;
  }
  if (isLoading) {
    content = <p>Loading....</p>;
  }
  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler}></AddMovie>
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movies.length > 0 && (
          <MoviesList movies={movies}></MoviesList>
        )}
        {/* {!isLoading && <MoviesList movies={movies} />} */}
        {!isLoading && movies.length === 0 && !error && (
          <p>there no moive 💢</p>
        )}
        {!isLoading && error && <p>{error}</p>}
        {isLoading && <p>Loading .💫.💫.💫.💫.💫.💫.</p>}
        {/* <MoviesList movies={movies} /> */}
      </section>
    </React.Fragment>
  );
}

export default App;
