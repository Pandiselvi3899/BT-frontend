import axios from 'axios'
import{URL}from "../../App"
export function registerUser(newUserDetails){
    let apiUrl = URL+'register'
    return axios.post(apiUrl,newUserDetails,{
        headers:{
            'Content-Type': 'application/json'
        }
    })
}
