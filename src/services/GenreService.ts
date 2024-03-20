import ApiClient from "./api-client";
import {Genre} from "../hooks/useGenre";

export default new ApiClient<Genre>("/genres");