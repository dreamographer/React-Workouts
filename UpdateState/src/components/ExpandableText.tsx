import { useState } from "react";

interface Props{
     maxChar?:number
     children:string
}
function ExpandableText({maxChar=50,children}:Props){
     const handleClick=()=>{
          setExpand(!expand)
     }
     const [expand,setExpand]=useState(false)
     if (children.length<=maxChar) {
          return <p>{children}</p>
     }
     return(
          <p>
               {expand ? children : children.substring(0, maxChar) + '...'}
               <button onClick={handleClick}>{expand ? 'Lesss' : 'Expand'}</button> 
          </p>
     )
}
export default ExpandableText