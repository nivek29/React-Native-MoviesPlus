/*
    Extracts information about the list of films
*/


import { useEffect, useState } from 'react'

import { MoviesResponse, Result } from '../interface/MovieInterface';
import movieDb from '../api/movieDb';
import { ListMoviesState } from '../interface/ListMoviesInterface';



export const useMovies = () => {
    
    const [ listMovies, setListMovies ] = useState<ListMoviesState>({
        nowPlaying: [],
        popular: [],
        topRated: [],
        upcoming: [],
    })

    const [ isLoad, setIsLoad ] = useState(true);

    const getMovies = async () => {
        
        const now_playingProm = movieDb.get<MoviesResponse>('/now_playing');
        const popularProm = movieDb.get<MoviesResponse>('/popular');
        const top_ratedProm = movieDb.get<MoviesResponse>('/top_rated');
        const upcomingProm = movieDb.get<MoviesResponse>('/upcoming');

        const response = await Promise.all([
            
            now_playingProm,
            popularProm,
            top_ratedProm,
            upcomingProm

        ]);
        setListMovies({
            nowPlaying: response[0].data.results,
            popular: response[1].data.results,
            topRated: response[2].data.results,
            upcoming: response[3].data.results,
        })

        setIsLoad(false);
    
    }

    useEffect(() => {
        getMovies();
    }, []);

    return {
        listMovies,
        isLoad
    }
}
