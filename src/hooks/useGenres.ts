import useData from "./useData";

export interface Genre {
  genreId: number;
  name: string;
  imageBackground: string;
}

const useGenres = () => useData<Genre>("Genre/GetGenresWithCount");

export default useGenres;
