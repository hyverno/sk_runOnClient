import axios from 'axios';
import * as dt from './data';
const API_URL = "http://127.0.0.1:3000/api/template/";


export async function getTemplateByID(id: string) {

    return await axios.get(API_URL+"getTemplate/"+id, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    })
    .then((response) => {
        let item: any
        console.log(response)
        // eslint-disable-next-line prefer-const
        item = response.data;
        return item;
    })
    .catch((error) => {
        dt.add(error.response.data.message);
        console.error(error.response.data.message);
    });

};

export function getAllTemplates() {
    return axios.get(API_URL+"getAllTemplates", {
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then((response) => {
        let items: any
        console.log(response)
        // eslint-disable-next-line prefer-const
        items = response.data;
        return items;
    })
    .catch((error) => {
        dt.add(error.response.data.message);
        console.error(error.response.data.message);
    });

}

export function createElement(title:string, description:string, content:string) {
    const data = {
        title: title,
        description: description,
        content: content
    } 
    
    return axios.post(API_URL+"addTemplate", data, 
    {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }})
    .then((response) => {
        console.log(response.data.template)
        return response.data.template;
    })
    .catch((error) => {
        dt.add(error.response.data.message);
        console.error(error);
    });


    // return axios.post(API_URL + "login", {
    //     identify,
    //     password
    // })
    // .then(response => {
    //     if (response.data.token) {
    //         localStorage.setItem("token", response.data.token)
    //         // go to home page
    //         if (browser) {
    //             window.location.href = "/"
    //         }
    //     }
    //     console.log(response.data)
    //     return response.data
    // })

}