import React, {useEffect, useState} from 'react'
import {getAllPokemon, getPokemonDetails} from "../services/PokemonPokedexService.js";
import Loader from "./loader/Loader.jsx";
import PokemonCard from "./PokemonCard.jsx";

const PokemonList = () => {
    const [details, setDetails] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let tempPokemonDetails = []
        async function getPokemonData()
        {
            let pokemons = await getAllPokemon();
            await Promise.all(
                pokemons.data.results.map(async (pokemon) => {
                    const pokemonDetails = await getPokemonDetails(pokemon.url);
                    tempPokemonDetails.push(pokemonDetails.data)

                })
            )
            setDetails(tempPokemonDetails)
            setIsLoading(false)
        }
        getPokemonData();
    }, [])


    return(
        <div>
            {isLoading?<Loader />:
                details.map((pokemon) => {
                    return <PokemonCard key={pokemon.name} pokemon={pokemon} />
                })}
        </div>
    )





}
export default PokemonList
