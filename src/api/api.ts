import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL:`https://social-network.samuraijs.com/api/1.0/`,
    headers:{
        "API-KEY":"966a2451-c7ff-4ddb-947e-3895b1f68af0"
    }
});

export const getUsers = (currentPage = 1, pageSize = 10) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data);
}

export const getFollow = (userId:string) => {
    return instance.get(`profile/` + userId)
        .then(data => data.data);
}

export const getAuth = () => {
    return instance.get(`auth/me`)
        .then(data => data.data);
}