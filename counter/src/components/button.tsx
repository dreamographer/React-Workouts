import { ReactNode } from "react"
interface Props{
    children:ReactNode
    OnClick:()=>void
}
const Button = ({ children, OnClick }:Props)=>{
    return <button onClick={OnClick} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 h-11 m-5 hover:border-transparent rounded">
        {children}
    </button>
}

export default Button