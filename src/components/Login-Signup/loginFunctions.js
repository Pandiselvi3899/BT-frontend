import axios from 'axios'
import{URL}from "../../App"
export function logUserIn(userCredentials) {
    let apiUrl = URL+'login'
    return axios.post(apiUrl,userCredentials, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}


export function loadRoutes(){
    const authToken = sessionStorage.getItem('authToken' || '')
    let apiUrl = URL+`user/profile?secret_token=${authToken}`
    return axios.get(apiUrl)
}

export function getCurrentUserDetails(authToken){
    const token =  authToken
    let apiUrl = URL+`user/profile?secret_token=${token}`
    return axios.get(apiUrl)
}