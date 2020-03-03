import * as axios from 'axios';

const getCharacters = (offset:number, limit: number) => axios.default.get(`http://localhost:3000/v1/characters?offset=${offset}&limit=${limit}`);


export {
  getCharacters,
};
