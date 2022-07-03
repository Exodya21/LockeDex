import axios from "axios";
import { apiLockeDex } from './config';
import { endpoint } from "./config";
import { headers } from "./config";

export const signIn = async ( data ) => {
    return await axios.post(
        apiLockeDex + endpoint.register,
        data,
        headers.register
    )
    .catch( error => { console.log(error) });
}

export const signUp = async ( data ) => {
    return await axios.post(
        apiLockeDex + endpoint.login,
        data,
        headers.login
    )
    .catch( error => { console.log(error) });
}