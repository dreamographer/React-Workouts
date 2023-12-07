import LikeButton from "./components/LikeButton"
function App(){
  return <div className="w-screen flex justify-center h-screen item">
    <LikeButton  onClick={()=>console.log('hello')}></LikeButton>
  </div>
}
export default App
