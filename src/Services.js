import axios from "axios";
const productionHost = 'https://gener-ai-six.vercel.app'
const developementHost = 'http://localhost:8000'

var serverHost = process.env.NODE_ENV === 'production' ? productionHost : developementHost

export async function login(payload, callback) {
    const resp = await axios.post(serverHost + '/login', payload, {
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

export async function register(payload, callback) {
    const resp = await axios.post(serverHost + '/register', payload, {
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