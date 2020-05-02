import axios from 'axios';

const api='https://omdbapi.com/?apiKey=acde29e5&t=';
export const searchSeries=({commit},series)=>{
    axios.get(`${api}${series}&type=series`)
    .then(response=>{
        commit('FETCH_SERIES',response.data);
    });
}


export const getEpisodes=({commit},payload)=>{
    // console.log('the season muber ',payload.season)
    axios.get(`https://omdbapi.com/?apiKey=acde29e5&t=${payload.t}&type=series&season=${payload.season}`)
    .then(response=>{
        commit('FETCH_SEASON',response.data);
    })
}

export const clearStates=({commit})=>{
    commit('CLEAR_STATE');
}