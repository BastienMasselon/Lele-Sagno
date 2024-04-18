import { useEffect } from 'react'

/**
 * Formates a date in french 
 * @param {Date} date a timestamp
 * @return {Date} the formated date like like dd-m(text)-yyyy
 */
export const makeDatePrettier = (date) => {
    const dateObj = new Date(date);
    const formatedDate = new Intl.DateTimeFormat('fr-FR', {year: 'numeric', month: 'long',day: '2-digit'}).format(dateObj);
    return formatedDate;
}

/**
 * Make an excerpt from a string 
 * @param {string} string The string to make the excerpt from
 * @param {lengthLimit} int The limit of characters from which an excerpt will be returned
 * @return {string} the excerpt or the initial string if string length does not exceed the character limitation
 */
export const makeExcerpt = (string, lengthLimit = 80) => {
    if (string.length > lengthLimit) {
        const excerpt = string.substring(0, lengthLimit) + "...";
        return excerpt;
    }
    return string;
}

/**
 * Sets the title of the page
 * @param {string} title the title of the page
 */
export function setDocumentTitle(title) {
  useEffect(() => {
    document.title = 'Lele Sagno - ' + title;
  }, [title]);
}

/**
 * Unescapes special characters from a string
 * @param {str} string the string to unescape 
 * @returns {string} unescaped string
 */
export function unescapeString(str) {
  var escape = document.createElement('textarea');
  escape.innerHTML = str;
  return escape.textContent;
}