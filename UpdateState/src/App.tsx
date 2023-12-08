import { useState } from "react";
import Food from './components/Food'
import Cart from "./components/Cart";
import ExpandableText from './components/ExpandableText'
function App() {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "john"
    }
  })

  const handleClick=()=>{
    setGame({ ...game, player: { ...game.player, name: 'Ashiwn' } })
  }

  return <>
    <div>THe name</div>
    <p>{game.player.name}</p>
    <button onClick={handleClick}>
      Change Name</button>
      <Food></Food>
      <Cart></Cart>
      <ExpandableText maxChar={10}>
        Lorem 
      </ExpandableText>
  </>
}

export default App