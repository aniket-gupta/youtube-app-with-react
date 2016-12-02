import axios from 'axios';

const API_KEY = 'AIzaSyD3WuIdcpWgVsUuftC96SfBDyPhsM-VUR8';
const TRENDING_VIDEO = `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=IN&maxResults=25&key=${API_KEY}`;
const SEARCH_VIDEO_URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${API_KEY}`;

export const ACTION_HOMEPAGE_LOADING = 'ACTION_HOMEPAGE_LOADING';
export const ACTION_SEARCH = 'ACTION_SEARCH';

export function fetchTrendingVideos() {
  const request = axios.get(TRENDING_VIDEO);
  return {
    type: ACTION_HOMEPAGE_LOADING,
    payload: request
  };
}

export function searchVideos(term) {
  const url = `${SEARCH_VIDEO_URL}&q=${term}`;
  const request = axios.get(url);
  return {
    type: ACTION_SEARCH,
    payload: request
  };
}
