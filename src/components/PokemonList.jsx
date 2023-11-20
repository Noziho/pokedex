import React, {useEffect, useState} from 'react'
import {getAllPokemon, getPokemonDetails} from "../services/PokemonPokedexService.js";
import Loader from "./loader/Loader.jsx";
import PokemonCard from "./PokemonCard.jsx";
import Pagination from "./Pagination.jsx";

const PokemonList = () => {
    const [details, setDetails] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemPerPage, setItemPerPage] = useState(20);
    const lastItemIndex = currentPage * itemPerPage;
    const firstItemIndex = lastItemIndex - itemPerPage;
    const currentItems = details.slice(firstItemIndex, lastItemIndex);

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
        <>

            <div className={'pokemonListContainer'}>
                {isLoading?<Loader />:
                    currentItems.map((pokemon) => {
                        return <PokemonCard key={pokemon.name} pokemon={pokemon} />
                    })}
            </div>
            <Pagination totalItem={details.length} itemPerPage={itemPerPage} setCurrentPage={setCurrentPage}/>
        </>
    )
}
export default PokemonList
