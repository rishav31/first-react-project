import React from 'react'
import { useState, useEffect } from 'react';

export const MyComp = ()=>{
    
	let myVal = ["nithya", "Shivam", "Raju", "Ram"]
	const [inputValue,setInputValue] = useState("");
	const [emp,setEmp]= useState({});
	const addList = ()=>{
		let array = [];
		for(let i=0;i<myVal.length;i++){
			array.push(<li key={i}>{myVal[i]}</li>)
		}
		return array;
	}
    const addValue = (inputArr)=>{
		inputArr.push(inputValue)
		
	}
	const getEmp = ()=>{

		fetch('http://dummy.restapiexample.com/api/v1/employees')
		.then(({result})=>setEmp(result));
	}
	useEffect(()=>{
		//addList();
		addValue(myVal)
		setInputValue("")
	},[myVal.length])

	return <>
		
        <input value={inputValue} onChange={(event)=>{
			setInputValue(event.target.value);
		}}/>
        <button onClick={addValue(myVal)}>
            Add
        </button>
        <div><ol>{addList()}</ol></div>
		
		</>
}