export const getCapitalization = str => {
    return str !== "id"
        ? `${str.substr(0, 1).toUpperCase()}${str.substr(1).toLowerCase()}`
        : "ID";
};

