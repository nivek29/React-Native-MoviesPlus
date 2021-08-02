import axios from 'axios';

const movieDb = axios.create ({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params:{
        api_key:'e6ad07380c6495e2d78ffd9a6379d1b3',
        language:'es-ES'
    }
    
});
export default movieDb;