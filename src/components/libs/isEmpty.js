/**
 * Return true si la value est null ou undefined
 * @param {(string|Object|Array)} value
 * @returns {boolean}
 */
export const isEmpty = (value) => {
    return value === undefined ||
        value === null ||
        (typeof value === 'object' && Object.keys(value).length === 0) ||
        (typeof value === 'string' && value.trim().length === 0);
};
