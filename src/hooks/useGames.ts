
import {GameQuery} from "../App";
import {useQuery} from "@tanstack/react-query";
import {GAMES_QUERY_LEY} from "./constants";
import apiClient, {FetchResponse} from "../services/api-client";
import {Platform} from "./usePlatforms";
import GameService from "../services/GameService";

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform: Platform}[]
    metacritic: number;
    rating_top: number;
    //rating: number;
}

const useGames = (gameQuery: GameQuery) => useQuery<FetchResponse<Game>, Error>({
  queryKey : GAMES_QUERY_LEY,
  queryFn : () => GameService.getAll({
      params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText
      }
  })
})

export default useGames;
