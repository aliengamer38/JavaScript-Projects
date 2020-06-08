export const extractData = (resData) => {
    return (
        Object.keys(resData).map(key => (
            {...resData[key], key}
        ))
    )
}

export const capitalizeWord = (word) => {
    return word.substr(0, 1).toUpperCase() + word.substr(1).toLowerCase()
}