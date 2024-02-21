import useData from "./useData";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

export const useGenres = () => useData<Genre>("/genres");

export default useGenres;
