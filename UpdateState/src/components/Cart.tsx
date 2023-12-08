import { useState } from "react"

 function Cart(){
    const [cart,setCart]=useState({
        discount:.1,
        items:[
            {id:1,title:'Product1',quantity:1},
            {id:2,title:'Product2',quantity:1}
        ]
    })

    const handleClick=()=>{
        setCart({
            ...cart,items:[...cart.items.map((ele)=>ele.id==1?{...ele,quantity:ele.quantity+1}:ele)]
        })
    }
    return(
    <>
    <p>{cart.items[0].quantity}</p>
            <button onClick={handleClick}>Add quantity</button>
    </>)
 }

 export default Cart