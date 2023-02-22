import { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './components/search-bar/search-bar';
import MovieList from './components/movie-list/movie-list';

function App() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState(movies);

  const API_KEY = 'a7cbd06c';

  useEffect(() => {
    fetch('http://www.omdbapi.com/?s=Batman&page=2&apikey=a7cbd06c')
      .then((response) => response.json())
      .then((movies) => {
        setMovies(movies.Search);
      });
  }, []);

  return (
    <div className='App p-10'>
      <SearchBar />
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
