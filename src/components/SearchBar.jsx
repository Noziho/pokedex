import React from 'react'
import {useNavigate} from "react-router-dom";

const SearchBar = () => {
    let navigate = useNavigate()
    async function handleChange (values, e) {
        e.preventDefault()
        return values && navigate(`/pokemon/${values.toLowerCase()}`)
    }
    return (
        <input type="search" placeholder={'Pokemon name ...'} onBlur={(e) => handleChange(e.target.value, e)}/>
    )
}
export default SearchBar

