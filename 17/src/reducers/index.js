import {combineReducers, createStore} from 'redux';

export const songsReducer = () => {
    return [
        {title: 'raz again', duration: '4.05'},
        {title: 'dva older', duration: '3.55'},
        {title: 'tri fixed', duration: '2.13'},
        {title: 'che string', duration: '6.26'},
    ]
}

export const selectedSongReducer = (selectedSong=  null, action) => {
    if(action.type === 'SONG_SELECTED') {
        return action.payload
    }
    return selectedSong
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})
