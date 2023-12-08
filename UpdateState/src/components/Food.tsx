import { useState } from "react"

function Food(){
    const [pizza,setPizza]=useState({
        name:'Spicy pizza',
        topping:['mush','chicken']
    })
    const handleClick=()=>{
        setPizza({
            ...pizza,
            topping:[...pizza.topping,'Cheese']
        })
    }
    return<>
    <p>{pizza.topping}</p>
    <button onClick={handleClick}>Add topings</button>
    </>
}

export default Food