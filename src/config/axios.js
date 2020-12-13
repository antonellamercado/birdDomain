import axios from 'axios';

const clienteAxios = axios.create({
  baseURL: 'https://api-birdomain.herokuapp.com'
});


export default clienteAxios;