import React from 'react'
import { useState, useEffect } from 'react';


export const MySearchInput =() => {
    const [searchValue,setSearchvalue] = useState("")

    const array = ["nithya", "Shivam", "Raju", "Ram"];
    const [searchresult,setSearchResult] = useState([]);
    useEffect(()=>{
        const res = array.filter(name=>name.includes(searchValue))
        setSearchResult(res);
    },[searchValue])

    return(
        <>
            <input type="text" value={searchValue} onChange={(event)=>{
                setSearchvalue(event.target.value);
            }}/>
            <ul>
                {searchresult.map(item=>{return <li>{item}</li>})}
            </ul>
        </>
    )
}