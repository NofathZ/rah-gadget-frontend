// Dependencies
import axios from "axios";

const APIInstance = axios.create({
  baseURL: 'http://192.168.56.1:9200/data/rah-gadget/',
});

export default APIInstance