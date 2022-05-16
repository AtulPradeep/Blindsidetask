import axios from "axios";
const KEY = "AIzaSyBhkhD_iDa1rMAP-GVXfB76idynmWUD94c";


// Fetching Youtube API.
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResult: 5,
    key: KEY,
  },
});
