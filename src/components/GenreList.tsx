import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { genres } = useGenres();

  return (
    <ul>
      {genres.map((genre) => (
        <li key={genre.genreId}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
