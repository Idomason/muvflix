const SearchBar = ({ onChange, searchField, setMovies }) => {
  // Fetch movies from an omdb api
  const fetchMovies = (movieName) => {
    const url = `http://www.omdbapi.com/?s=${movieName}&page=26&apikey=a7cbd06c`;
    fetch(url)
      .then((response) => response.json())
      .then((movies) => setMovies(movies.Search));
  };

  return (
    <>
      <div className='p-2'>
        <h2 className='text-4xl font-bold capitalize mb-5 border-b-1 border-red-600'>
          muvFlix movies
        </h2>
        <input
          className='p-2 outline-none border-none bg-slate-200 rounded-sm text-xl text-center'
          type='search'
          onChange={onChange}
          placeholder='Search Movies'
        />
        <button
          onClick={() => fetchMovies(searchField)}
          className='p-2 ml-2 outline-none border-none bg-red-600 rounded-sm text-white hover:bg-red-700 text-xl text-center'
        >
          Search
        </button>
      </div>
    </>
  );
};

export default SearchBar;
