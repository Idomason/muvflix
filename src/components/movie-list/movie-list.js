import Movie from '../movie/movie';

const MovieList = ({ movies }) => {
  return (
    <>
      <div className='mt-10 grid sm:grid-cols-2 md:grid-cols-3 justify-center'>
        {movies.map((movie) => (
          <Movie key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </>
  );
};

export default MovieList;
