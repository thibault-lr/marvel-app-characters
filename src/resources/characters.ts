import * as axios from 'axios';

const getCharacters = (offset:number) => axios.default.get(`http://localhost:3000/v1/characters?offset=${offset}`);


export {
  getCharacters,
};
