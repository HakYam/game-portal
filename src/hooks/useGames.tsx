import useData from "./useData";
import { Genre } from "./useGenres";



export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (slectedGenre: Genre | null, selectedPlatform : Platform | null) =>
  useData<Game>("/games", { params: { genres: slectedGenre?.id, platforms: selectedPlatform?.id } }, 
  [
    slectedGenre?.id, selectedPlatform?.id
  ]);
export default useGames;
