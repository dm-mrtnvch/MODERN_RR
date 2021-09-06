import axios from 'axios'

const KEY = 'AIzaSyCmB756hjgfTTGowM6AWbJ67lUC3h-IPpw'
// const KEY = 'AIzaSyDFKGtcN11GPeL_-rUWfIqkl2HE3xD9d8w'


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})

