export const FETCH_SERIES=(state,series)=>{
    
    state.series=series
    
}

export const FETCH_SEASON=(state,season)=>{
    state.season=season
}

export const CLEAR_STATE=(state)=>{
    state.season=null;
    // state.series=null;
}