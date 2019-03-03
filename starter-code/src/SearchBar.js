import React from "react"

import 'bulma/css/bulma.css';


const SearchBar = (props) =>{
    return (

    <input class="input is-info" placeholder="Search Food" type="text" onChange={(e)=> props.onSearch(e.target.value)}>{props.searchTerm}</input>
    )
}
export default SearchBar