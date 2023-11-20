import React from 'react'
import {useNavigate} from "react-router-dom";

const PokemonCard = ({pokemon}) => {

    let navigate = useNavigate();
    const submit = () => {
        navigate('/')
    }

    return (
        <div className={'pokemonCard'}>
            <h2>{pokemon.name}</h2>
            <img src={pokemon.sprites.front_default} alt="Pokemon img"/>
        </div>
    )
}
export default PokemonCard
