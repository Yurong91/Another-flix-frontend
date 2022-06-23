import axios from 'axios'
import {getToken} from './users-service'

const BASE_URL = 'http://localhost:8080/api/v1/movies'

export const getMovies = async() => {
    try {
        const options = {
            headers: {
                // prefscing with 'Beasrer is recommended in HTTP specification
                Authorization: `Bearer ${getToken()}`
            }
        }
         
        const response = await axios.get(BASE_URL, options)
        console.log(response)
        return response
    } catch(e) {
        console.log(e)
    }
}

