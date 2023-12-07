import { useState } from "react";
interface Props{
    items:string[],
    heading:string,
    onSelectItem:(item:string)=>void
}
function ListGroup({ items, heading, onSelectItem }:Props) {
    
    // hook
    let [selectedIndex,setSelectedIndex]=useState(-1)

    return (
        <>
            <h1>{heading}</h1>
            <ul className="text-sm font-medium">
                {items.map((item, i) => <li className={selectedIndex == i ? "bg-blue-400" : ''} 
                    key={item}
                    onClick={() => {setSelectedIndex(i);onSelectItem(item)}}>{item}</li>)}
            </ul>
        </>
    );
}
export default ListGroup