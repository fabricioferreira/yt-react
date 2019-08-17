import axios from 'axios';
import { key } from './youtubekey'

const search = terms => {
    const axiosClient = axios.create({
        baseURL: 'https://www.googleapis.com/youtube/v3',
    })

    return axiosClient.get('search', {
        params: {
            part: 'snippet',
            maxResults: 5,
            key: key,
            type: 'video',
            q: terms
        }
    })
}

export default search