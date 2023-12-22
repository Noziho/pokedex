import React from 'react'
import {capitalize} from "../utils/utils.js";

const PokemonCard = ({pokemon}) => {


    return (
        <>
            <a href={`/pokemon/${pokemon.name}`}>
                <div className={'pokemonCard'}>
                    <h2>{capitalize(pokemon.name)}</h2>
                    <img src={pokemon.sprites.front_default} alt="Pokemon img"/>
                </div>
            </a>
        </>


)
}
export default PokemonCard
