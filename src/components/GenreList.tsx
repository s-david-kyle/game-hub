import useData from "../hooks/useData";
import useGenres, { Genre } from "../hooks/useGenres";

const GenreList = () => {
  const { data } = useData<Genre>("Genre/GetGenresWithCount");

  return (
    <ul>
      {data.map((genre) => (
        <li key={genre.genreId}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
