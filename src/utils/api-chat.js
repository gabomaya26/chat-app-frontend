import axios from 'axios';

const API_URL = process.env.API_URL;

export async function getMessages() {
    try {
        const response = await axios.get(API_URL + "messages/");
        return response.data
    } catch (error) {
        console.log("Error obteniendo mensajes", error);
    }
}

export async function createMessage(username, content) {
    try {
        const message = {
            username, 
            content
        }

        const response = await axios.post(API_URL + "messages/create/", message);
        return response.data
    } catch (error) {
        console.log("Error creando mensaje", error)
    } 
}

export async function getAuthorByUsername(username){
    try {
        const response = await axios.get(API_URL + `authors/${username}/`);
        return response.data
    } catch (error) {
        console.log("Error obteniendo autor", error)
    }
}

export async function updateProfilePicture(formData, username){
    try {
        const author = await getAuthorByUsername(username);
        const response = await axios.put(API_URL + "authors/" + author?.id + "/profile_picture/", formData)
        return response
    } catch (error) {
        console.log("Error actualizando autor", error)
    }
}