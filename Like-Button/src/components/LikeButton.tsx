import { TiHeartFullOutline } from "react-icons/ti";
import { useState } from 'react' 

interface Props{
    onClick:()=>void
}

function LikeButton({onClick}:Props){
    const [like, setLike] = useState(true)
    function toggle() {
        setLike(!like);
        onClick();
    }
    return <TiHeartFullOutline color={like ? "Green" : 'black'} onClick={() => toggle()} size="60"></TiHeartFullOutline>
}
export default LikeButton   