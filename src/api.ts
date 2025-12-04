// Axios singleton/sharable object that will be called from the service
// We pre-configure the Header and timeout right away

import axios from "axios";

export const api = axios.create({
    baseURL:"https://fakestoreapi.com",
    headers:{'Content-Type':'application/json'},
    timeout:12000
});