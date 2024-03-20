import genres from "../data/genres";
import {useQuery} from "@tanstack/react-query";
import {GENRE_QUERY_KEY} from "./constants";
import GenreService from "../services/GenreService";
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => {
  return useQuery({
    queryKey: GENRE_QUERY_KEY,
    queryFn: GenreService.getAll,
    initialData: {count: genres.length , results: genres}
  })
}

export default useGenres;