import { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './components/search-bar/search-bar';
import MovieList from './components/movie-list/movie-list';

function App() {
  const moviess = [
    {
      id: 1,
      name: 'De Rock',
      genre: 'Action',
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto excepturi molestiae pariatur ut eligendi. Vitae sunt assumenda illum nobis dolor.',
    },
    {
      id: 2,
      name: 'Love and Prejudice',
      genre: 'Romance',
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto excepturi molestiae pariatur ut eligendi. Vitae sunt assumenda illum nobis dolor.',
    },
    {
      id: 3,
      name: 'Jungle Justice',
      genre: 'Comedy',
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto excepturi molestiae pariatur ut eligendi. Vitae sunt assumenda illum nobis dolor.',
    },
  ];

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
