import axios from 'axios';

const instance = axios.create({
  // The API (cloud function) url
  baseURL: 'https://us-central1-clone-bec8f.cloudfunctions.net/api'
          //  'http://localhost:5001/clone-bec8f/us-central1/api'
})

export default instance;


