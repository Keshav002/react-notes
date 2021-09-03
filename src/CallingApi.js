import React, { useEffect, useState } from 'react'
import axios from "axios";
function CallingApi() {
    const[num, setNum] = useState();
    const[name, setName] = useState();
    const[move, setMove] = useState();
    useEffect(() => {
          async function getData(){
              const res = await axios.get(` https://pokeapi.co/api/v2/pokemon/${num}`)
              setName(res.data.name);
              setMove(res.data.moves.length);
          };
          getData();
    },)
    return (
        <div className="callingApi">
        <h1>You choosed the value no. {num}</h1>
        <h2>Name of Pokimon is {name}</h2>
        <h3>No. of moves is {move}</h3>
            <select value={num} onChange={(event)=>{
                 setNum(event.target.value)
            }}>
                <option value="1">1</option>
                <option value="25">25</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
        </div>
    )
}

export default CallingApi
