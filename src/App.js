import { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './components/search-bar/search-bar';
import MovieList from './components/movie-list/movie-list';

function App() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState(movies);
  const [searchField, setSearchField] = useState('');

  // // Fetch movies from omdb api
  // let movieName;
  // useEffect(() => {
  //   movieName = searchField;
  //   fetch(`http://www.omdbapi.com/?s=${movieName}&page=26&apikey=a7cbd06c`)
  //     .then((response) => response.json())
  //     .then((res) => console.log(res));
  //   // .then((movies) => setMovies(movies.Search));
  // }, [searchField]);

  // Filter Movies
  useEffect(() => {
    const filteredMovies = movies.filter((movie) =>
      movie.Title.toLowerCase().includes(searchField.toLowerCase())
    );
    setFilteredMovies(filteredMovies);
  }, [movies, searchField]);

  // OnChange Handler
  const onChangeHandler = (event) => {
    const searchFieldString = event.target.value;
    setSearchField(searchFieldString);
  };

  return (
    <div className='App p-10'>
      <SearchBar
        onChange={onChangeHandler}
        setMovies={setMovies}
        searchField={searchField}
      />
      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;
