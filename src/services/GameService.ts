import ApiClient from "./api-client";
import {Game} from "../hooks/useGames";

export default new ApiClient<Game>("/games");