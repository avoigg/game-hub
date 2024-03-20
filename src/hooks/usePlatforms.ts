
import {useQuery} from "@tanstack/react-query";
import {PLATFORM_QUERY_KEY} from "./constants";
import apiClient, {FetchResponse} from "../services/api-client";
import PlatformsService from "../services/PlatformsService";
export interface Platform  {
    id: number;
    name: string;
    slug: string;
}

const usePlatforms = () => useQuery({
    queryKey: PLATFORM_QUERY_KEY,
    queryFn : PlatformsService.getAll,
})
export default usePlatforms;