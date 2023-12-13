// import { useRef} from "react";
import { useForm, FieldValues } from 'react-hook-form'

function Form() {
    const { register, handleSubmit ,setFocus}=useForm()
    
    const print =(data:FieldValues)=>{console.log(data);
    }
  
    return (
        <form onSubmit={handleSubmit(print)}>
            <div className="mb-2 flex flex-col">
                <label htmlFor="name">Type something</label>
                <input 
                {...register('name')}
                
                className="border" id="name" name="name" type="text" />
            </div>
            <div className="mb-2 flex justify-center border">
                <button onClick={()=>setFocus('name')} type="submit">Submit</button>
            </div>
        </form>
    )
}
export default Form