import axios, { AxiosRequestConfig } from "axios";

// const initializers: AxiosRequestConfig = {
//     baseURL: (window as any).baseUrlApi,
//     //timeout: 1000,
//     // headers: {
//     //     'Accept': 'application/vnd.GitHub.v3+json',
//     //     //'Authorization': 'token <your-token-here> -- https://docs.GitHub.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token'
//     // }
// }

// const client = Axios.create({
//     baseURL: (window as any).baseUrlApi 
// });

// function returnAxiosInstance() {
//     return Axios.create(initializers);
// }

// export function get(url: any, config?: AxiosRequestConfig) {
//     const axios = returnAxiosInstance();
//     return axios.get(url,config);
// }

// export function post(url: any, requestData: any, config?: AxiosRequestConfig) {
//     const axios = returnAxiosInstance();
//     return axios.post(url, requestData, config);
// }

//---------------------------------------------------------------------------------------

const axiosClient = axios.create();

axiosClient.defaults.baseURL = (window as any).baseUrlApi;

// axiosClient.defaults.headers = {
//   'Content-Type': 'application/json',
//   Accept: 'application/json'
// };

//All request will wait 2 seconds before timeout
//axiosClient.defaults.timeout = 2000;

//axiosClient.defaults.withCredentials = true;

export function getRequest(URL: string, config?: AxiosRequestConfig) {
    return axiosClient.get(`${URL}`, config).then(response => response);
}

export function postRequest(URL: string, payload: any, config?: AxiosRequestConfig) {
    return axiosClient.post(`${URL}`, payload, config).then(response => response);
}

export function patchRequest(URL: string, payload: any, config?: AxiosRequestConfig) {
    return axiosClient.patch(`${URL}`, payload, config).then(response => response);
}

export function deleteRequest(URL: string, config?: AxiosRequestConfig) {
    return axiosClient.delete(`${URL}`, config).then(response => response);
}

//------------------------------- interceptors ----------------------------------

axios.interceptors.request.use(function (request: any) {
    //request.headers['Content-Type'] = 'multipart/form-data';
    return request;
});//, null, { synchronous: true }

axios.interceptors.response.use(function (response: any) {
    //Dispatch any action on success
    return response;
}, function (error) {
    if (error.response.status === 401) {
        //Add Logic to 
        //1. Redirect to login page or 
        //2. Request refresh token
    }
    return Promise.reject(error);
});


// If you need to remove an interceptor later you can.
// const myInterceptor = axios.interceptors.request.use(function () {/*...*/});
// axios.interceptors.request.eject(myInterceptor);

// You can add interceptors to a custom instance of axios.
// const instance = axios.create();
// instance.interceptors.request.use(function () {/*...*/});