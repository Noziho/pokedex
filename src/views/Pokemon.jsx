import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom";
import {getPokemonDetails} from "../services/PokemonPokedexService.js";
import Loader from "../components/loader/Loader.jsx";
import {capitalize} from "../utils/utils.js";
import Header from "../components/Header.jsx";

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
        <>
            <Header />
            <div className={'pokemonDetailContainer'}>
                {isLoading?<Loader />
                    :
                    <div className={'pokemonDetail'}>
                        <h1>{capitalize(pokemon.name)}</h1>
                        <img src={pokemon.sprites.front_default} alt={'Pokemon image'}/>
                        <div>
                            <h2>Types:</h2>
                            {pokemon.types.map((type) => {
                                return <p key={pokemon.name + Math.random()}>{capitalize(type.type.name)}</p>;
                            })}
                        </div>
                        <div>
                            <h2>Abbilities:</h2>
                            {pokemon.abilities.map((ability) => {
                                return <p key={pokemon.name + Math.random()}>{capitalize(ability.ability.name)}</p>;
                            })}
                        </div>

                    </div>
                }
            </div>
        </>
    )
}
export default Pokemon
