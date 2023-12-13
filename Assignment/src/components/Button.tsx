interface Props{
    children:string,
    update:()=>void
}
function Button({children,update}:Props){

    return (
        <button className="mx-2 border " onClick={update}>{children}</button>
    )
}

export default Button