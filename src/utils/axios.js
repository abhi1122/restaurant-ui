const axios = require('axios');

export let callServise = (url, type, data) => {
    return new Promise((resolve, reject) => {
        let api = "http://loaclhost:3001/" + url;
        console.log("api callllllllllll")
        axios.post('/user', data)
            .then(function (response) {
                console.log(response);
                resolve(response);
            })
            .catch(function (error) {
                console.log(error);
                reject(error);
            });
    });
}
