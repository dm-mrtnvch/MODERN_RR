import axios from 'axios'

const KEY = 'AIzaSyCmB756hjgfTTGowM6AWbJ67lUC3h-IPpw'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})

