import axios from 'axios';

const clienteHeroku = axios.create({
  baseURL: 'https://api-birdomain.herokuapp.com/api'
});


export default clienteHeroku;

