import axios from "axios";
import { apiLockeDex } from './config';
import { endpoint } from "./config";
import { headers } from "./config";

export const sigIn = async ( data ) => {
    return await axios.post(
        apiLockeDex + endpoint.register,
        data,
        headers.register
    )
    .catch( error => { console.log(error) });
}
