import Alert from "./components/Alert"
import {useState} from 'react'
import Button from "./components/button"
export default function App() {
  const [count,setCount]=useState(0)
  const [visibility,setVisibility]=useState(true)
  return(<div className=" w-screen justify-center flex-col">
      
      <div className="w-screen flex justify-center ">

      <Button OnClick={() =>{count>0&&setCount(count-1)}}>
        -
      </Button>
      <p className="mt-7">{count}</p>
      <Button OnClick={() => setCount(count + 1)}>
        +
      </Button>
      </div>
      {count >= 5 && visibility && <Alert onClose={() => { setVisibility(false) }}>Counter get out of limit</Alert>}
    </div>
  )
} 