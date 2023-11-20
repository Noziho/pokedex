import React from 'react'
import {useNavigate} from "react-router-dom";

const SearchBar = () => {
    let navigate = useNavigate()
    async function handleChange (values, e) {
        e.preventDefault()
        return values && navigate(`/pokemon/${values.toLowerCase()}`)
    }
    return (
        <div className={'searchBarContainer'}>
            <input className={'search'} type="search" placeholder={'Pokemon name ...'} onBlur={(e) => handleChange(e.target.value, e)}/>
        </div>
    )
}
export default SearchBar

