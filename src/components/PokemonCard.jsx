import React from 'react'

const PokemonCard = ({pokemon}) => {

    return (
        <a href={`/pokemon/${pokemon.name}`}>
            <div className={'pokemonCard'}>
                <h2>{pokemon.name}</h2>
                <img src={pokemon.sprites.front_default} alt="Pokemon img"/>
            </div>
        </a>
    )
}
export default PokemonCard
