
const response = (res,code,message,result) => {
    let result_json = {
        code: code,
        message: message,
        result: result
    }

    return res.status(200).json(result_json)
}

const responseSuccess = (res,code,message,result) => {
    let result_json = {
        code: code,
        status_code: "success",
        message: message,
        result: result
    }

    return res.status(200).json(result_json)
}

const responseError = (res,code,message) => {
    let result_json = {
        code: code,
        status_code: "error",
        message: message,
    }

    return res.status(400).json(result_json)
}

module.exports = {response,responseSuccess,responseError}