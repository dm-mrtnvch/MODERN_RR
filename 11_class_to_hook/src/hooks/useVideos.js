import youtube from '../apis/youtube';
import {useEffect, useState} from 'react';

const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([])

    useEffect(() => {
        search(defaultSearchTerm)
    },[defaultSearchTerm])

    const search = async (term) => {
        const response = await youtube.get('/search', {
            q: term
        })
        setVideos(response.data.items)
    }

    return [videos, search]
};

export default useVideos;