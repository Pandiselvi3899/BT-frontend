import axios from 'axios'
import{URL}from "../../App"
export async function getRoutesFromApi(startCity, destination) {
    const baseURL = URL+"booking/"
    let incoming = await axios.post(baseURL, { startCity, destination })
    return incoming
}