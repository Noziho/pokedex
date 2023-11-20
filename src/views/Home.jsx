import React, {useState} from 'react'
import Header from "../components/Header.jsx";
import PokemonList from "../components/PokemonList.jsx";
import SearchBar from "../components/SearchBar.jsx";

const Home = () => {
    return (
        <>
            <Header />
            <SearchBar />
            <PokemonList />
        </>
    )
}
export default Home
