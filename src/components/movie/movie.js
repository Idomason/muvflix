import MovieOverview from '../movie-overview/movie-overview';

const Movie = ({ movie }) => {
  const { Title, Released, Genre, Plot, Poster } = movie;

  return (
    <>
      <div className='p-4 m-2 bg-slate-200 rounded-sm shadow-md cursor-pointer hover:scale-105 transition-all'>
        <img src={Poster} alt={Title} />
        <h1 className='font-bold text-base pt-3'>{Title}</h1>
        {/* <MovieOverview
          title={Title}
          releasedDate={Released}
          genre={Genre}
          overview={Plot}
        /> */}
        {/* <link to={`/${movie.imdbID}`}> */}
        <button className='p-2 m-2 bg-red-600 text-white rounded-md hover:scale-105 transition-all hover:bg-red-800'>
          Learn More
        </button>
        {/* </link> */}
      </div>
    </>
  );
};

export default Movie;
