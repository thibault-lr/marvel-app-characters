import * as axios from 'axios';

const getCharacters = (offset:number, limit: number) => axios.default.get(`${process.env.API_ENDPOINT}/v1/characters?offset=${offset}&limit=${limit}`);


export {
  getCharacters,
};
