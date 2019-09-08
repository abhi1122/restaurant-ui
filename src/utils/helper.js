var responseHandler = (resp) => {
    let validKey = { status: false, data: [], message: "" };
    let respCopy = { ...resp };
    console.log(respCopy);
    for (var key in validKey) {
        if (!respCopy.hasOwnProperty(key)) {
            resp[key] = validKey[key];
        }
    }
    return resp;
};

var createResponse = (data, message, status = true) => {
    let arr = [];
    if (Array.isArray(data)) {
        arr = data;
    } else {
        arr.push(data);
    }

    return responseHandler({ status: status, data: arr, message: message });
}

var errorResponseHandler = (resp, msgKey) => {
    let validKey = { status: false, data: [], message: "" };
    let respCopy = { ...resp };
    for (var key in validKey) {
        if (!respCopy.hasOwnProperty(key)) {
            resp[key] = validKey[key];
        }
    }
    return resp;
};

var createError = (data, message, status = false) => {
    let arr = [];
    if (Array.isArray(data)) {
        arr = data;
    } else {
        arr.push(data);
    }

    return errorResponseHandler({ status: status, errors: arr, message: message });
}

var parseMongoError = (errorObj) => {
    let errorParseObj = {};
    console.log(errorObj.errors,"33333");
    for (errorKey in errorObj.errors) {
        errorParseObj[errorKey] = errorObj.errors[errorKey].message;
    }
    return errorParseObj;
}

module.exports = {
    responseHandler,
    errorResponseHandler,
    parseMongoError,
    createResponse,
    createError
};