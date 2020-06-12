const getFieldName = (fieldName) => {
    switch (fieldName) {
        case "mark":
            return "number"
        case "password":
            return "password"
        case "email":
            return "email"
        default:
            return "text"
    }
}

module.exports = {
    getFieldName
}