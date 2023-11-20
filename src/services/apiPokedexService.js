import Axios from "axios";

export const apiPokedexService = Axios.create({
    baseURL: 'https://pokeapi.co/api/v2/',
})