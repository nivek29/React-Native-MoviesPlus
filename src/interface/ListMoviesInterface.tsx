import { Result } from "./MovieInterface";

export interface ListMoviesState{
    nowPlaying: Result[];
    popular: Result[];
    topRated: Result[];
    upcoming: Result[];
}