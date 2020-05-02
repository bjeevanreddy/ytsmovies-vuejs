import axios from 'axios';
const api='https://omdbapi.com/?apiKey=acde29e5&t=';
export const searchmovie=({commit},moviename)=>{

        axios.get(`${api}${moviename}&type=movie`)
        .then(movieinfo=>{
            commit('FETCH_MOVIE',movieinfo.data);
        })
        
}