
import {GameQuery} from "../App";
import {useQuery} from "@tanstack/react-query";
import {GAMES_QUERY_LEY} from "./constants";
import apiClient, {FetchResponse} from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

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
  queryFn : async () => {
      const res = await apiClient.get<FetchResponse<Game>>('/games', {
          params: {
              genres: gameQuery.genre?.id,
              parent_platforms: gameQuery.platform?.id,
              ordering: gameQuery.sortOrder,
              search: gameQuery.searchText
          }
      });
      return res.data;
  }
})

export default useGames;
