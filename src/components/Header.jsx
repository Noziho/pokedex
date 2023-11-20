import React from 'react'
import image from '../assets/img/pokeapi_256.png'

const Header = () => {
    return (
        <header>
            <a href="/"><img src={image} alt="PokeAPI LOGO"/></a>
        </header>
    )
}
export default Header
