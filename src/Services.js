import axios from "axios";

export async function login(payload, callback) {
    const resp = await axios.post('https://gener-ai-six.vercel.app/login', payload, {
        headers: { 
            'Content-Type': 'application/x-www-form-urlencoded',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Content-Type,Authorization',
            'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,OPTIONS'
         }
    });
    if(callback) {
        callback(resp.data);
    }
    return resp;
}