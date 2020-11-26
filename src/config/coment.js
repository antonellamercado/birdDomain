import axios from 'axios';

const coment = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
  });

  export default coment;