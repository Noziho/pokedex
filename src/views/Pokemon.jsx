import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom";
import {getPokemonDetails} from "../services/PokemonPokedexService.js";
import Loader from "../components/loader/Loader.jsx";

const Pokemon = () => {
    const {name} = useParams()
    const [pokemon, setPokemon] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        async function  getPokemon()
        {
            const pokemon = await getPokemonDetails(`https://pokeapi.co/api/v2/pokemon/${name}/`);
            setPokemon(pokemon.data)
            setIsLoading(false)
        }

        getPokemon()
    }, []);
    return (
        <div>
            {isLoading?<Loader /> :
                <div>
                    <h1>{pokemon.name}</h1>
                    <img src={pokemon.sprites.front_default} alt={'Pokemon image'}/>
                </div>
            }
        </div>
    )
}
export default Pokemon
