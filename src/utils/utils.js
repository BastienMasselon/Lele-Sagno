import { useEffect } from 'react'
import { $CombinedState } from 'redux';

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

/**
 * Get latest youtube video infos from Lele Sagno's channel
 * @param {int} limit // number of videos (max : 10)
 * @return {array} an array of video ids sorted by date (desc)
 */
export async function getLatestVideosInfos(limit) {
  const cid = 'UCDXo3PHjEJrIa_2aZ6vxToQ';
  // Get latest videos with rss api in xml
  const channelURL = encodeURIComponent(`https://www.youtube.com/feeds/videos.xml?channel_id=${cid}&part=id`)
  // Preparing rss2json API request to convert xml to json object
  const reqURL = `https://api.rss2json.com/v1/api.json?rss_url=${channelURL}`;

  let videos = [];

  // const promise = await fetch(reqURL);
  // const result = await promise.json();
  // for (let i = 0 ; i < limit ; i++) {
  //   // Extracting info from Json response
  //   let videoLink = result.items[i].link;
  //   let currentVideo = {
  //     link: videoLink,
  //     id: videoLink.substr(videoLink.indexOf("=") + 1),
  //     title: result.items[i].title
  //   };
  //   videos.push(currentVideo);
  // } 
  // return videos

  await fetch(reqURL)
    .then(response => {
      if (response.ok === false) throw new Error('Network issue')
      return response.json();
    })
    .then(result => {
      for (let i = 0 ; i < limit ; i++) {
        // Extracting info from Json response
        let videoLink = result.items[i].link;
        let currentVideo = {
          link: videoLink,
          id: videoLink.substr(videoLink.indexOf("=") + 1),
          title: result.items[i].title
        };
        videos.push(currentVideo);
      }
    });

  return videos;
}
