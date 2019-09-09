const axios = require('axios');

export let httpHandler = (type, url, data={}, remainObj = {}) => {

    return new Promise((resolve, reject) => {
        axios.defaults.baseURL = 'http://localhost:3000';
        axios.defaults.headers.common['Authorization'] = "";
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.defaults.timeout = 10000;

        axios.interceptors.request.use(function (config) {
            config.data["trastionId"] = 123456;
            return config;
        }, function (error) {
            return error//Promise.reject(error);
        });


        axios.interceptors.response.use(function (response) {
            return response;
        }, function (error) {
            return error;
        });

        axios({
            method: type,
            url: url,
            data: data
        }).then(function (response) {
            console.log('response', response);
            if (response.status === 200) {
                return resolve(response.data);
            } else if (response.status === 401) {

            } else {

            }
        })
            .catch(function (error) {
                console.log('error', error);
                if (error.response) {
                    return reject(error.response);
                } else if (error.request) {
                    return reject(error.response);
                } else {
                    return reject(error.response);
                }
            });
    });
}

