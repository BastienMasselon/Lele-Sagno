/**
 *  Check if a input string is empty
 * @param {string} value the value of the input
 * @return {boolean} true if string is empty, false if not empty
 */
export const isFieldEmpty = (value) => {
    if (typeof value === 'string') return value.trim() !== '' ? false : true;
}

/**
 *  Check if a email matches an email type pattern
 * @param {string} email the value of the email
 * @return {boolean} true if email matches the pattern, false if not.
 */
export const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
}

/**
 *  Check if string has more than a given number of characters
 * @param {string} string the tested string
 * @param {nbChar} int the number of characters the string should at least have
 * @return {boolean} true if string is at least as long as nbChar, false if not.
 */
export const isStringLongerThan = (string, nbChar) => {
    if (string.length >= nbChar) return true;
    else return false;
}