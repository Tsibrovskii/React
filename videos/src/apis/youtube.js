import axios from 'axios';

const KEY = 'AIzaSyCABEb71KHdtg5YUrtsYaXfh35L2umte8c';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: `${KEY}`,
  }
});

