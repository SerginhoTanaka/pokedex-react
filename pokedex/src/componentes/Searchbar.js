import React, { useState } from "react"

const Searchbar = () => {

    const {search, setSearch} = useState("dito")

    const onChangeMadler = (e) => {
        console.log("Pokemon ", e.target.value)
        setSearch(e.target.value)
    }   
    const onButtonClickHadler = () =>{
        console.log("pokemon", search)
    }
    return(
        <div className="searchbar-conteiner">
            <div className="searchbar">
                <input placeholder="Buscar pokemom" onChange={onChangeMadler}/>
                <div className="searchbar-btn">
                    <button onClick={onButtonClickHadler}> Buscar</button>
                    
                </div>

            </div>
                
        </div>
    )
}
export default Searchbar;