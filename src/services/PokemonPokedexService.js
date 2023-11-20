import {apiPokedexService} from "./apiPokedexService.js";

export async function getAllPokemon()
{
    return await apiPokedexService.get('pokemon?limit=200&offset=0');
}

export async function getPokemonDetails(path)
{
    return await apiPokedexService.get(path);

}