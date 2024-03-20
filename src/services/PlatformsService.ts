import ApiClient from "./api-client";
import {Platform} from "../hooks/usePlatforms";


export default new ApiClient<Platform>("/platforms/lists/parents");