import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID ye1gLyosQPC6HgDXYQEbn6yaknQM5nM8dtaGxCFVpO8'
    }
})