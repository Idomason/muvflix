const SearchBar = () => {
  return (
    <>
      <div className='p-2'>
        <h2 className='text-4xl font-bold capitalize mb-5 border-b-1 border-red-600'>
          muvFlix movies
        </h2>
        <input
          className='p-2 outline-none border-none bg-slate-200 rounded-sm text-xl text-center'
          type='search'
          placeholder='Search Movies'
        />
      </div>
    </>
  );
};

export default SearchBar;
