import useData from "./useData";

export interface Genre {
  genreId: number;
  name: string;
}

const useGenres = () => useData<Genre>("Genre/GetGenresWithCount");

export default useGenres;
