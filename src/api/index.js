/*
export async function getUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    return users;
}
*/
import axios from "axios"

export async function getUsers() {
    const { data: users } = await axios.get('https://jsonplaceholder.typicode.com/users')
    return users;
}