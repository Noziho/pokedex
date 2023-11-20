import React, {useEffect, useState} from 'react'
import {getAllPokemon, getPokemonDetails} from "../services/PokemonPokedexService.js";
import Loader from "./loader/Loader.jsx";
import PokemonCard from "./PokemonCard.jsx";

const PokemonList = () => {
    const [pokemon, setPokemon] = useState([]);
    const [details, setDetails] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
         getAllPokemon()
            .then((res) => {
                setPokemon(res.data.results)

                let data = [];
                res.data.results.forEach((pokemon) => {
                    getPokemonDetails(pokemon.url)
                        .then((response) => {
                            data.push(response.data)
                            setIsLoading(false)
                        })
                })
                setDetails(data);
            })
    }, []);


    return(
        <div>
            {isLoading? <Loader /> : console.log("DETAILS =>", details)}
        </div>
    )


}
export default PokemonList
