const isValidUser = (obj) => {
    const keys = Object.values(obj);
    return keys.every(value => value !== '' && typeof value === 'string');
}

export { isValidUser };