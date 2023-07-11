import { browser } from "$app/environment"
import axios from "axios"

const API_URL = "http://localhost:3000/api/auth/"


export function login (identify: string, password: string) {
    return axios.post(API_URL + "login", {
            identify,
            password
        })
        .then(response => {
            if (response.data.token) {
                localStorage.setItem("token", response.data.token)
                // go to home page
                if (browser) {
                    window.location.href = "/"
                }
            }
            console.log(response.data)
            return response.data
        })
}


export function register (username: string, password: string, email: string) {
    return axios.post(API_URL + "register", {
            username,
            password,
            email
        })
        .then(response => {
            console.log(response.data)
            return response.data
        })
}
