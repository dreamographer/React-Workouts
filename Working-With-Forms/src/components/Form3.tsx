import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, FieldValues } from 'react-hook-form'
import {z} from 'zod'


const schema=z.object({
    name:z.string().min(3,{message:"3 min"}),
    pass:z.number({invalid_type_error:'pass is requred'}).min(2)
});

type FormData=z.infer<typeof schema>

function Form3() {

    const { register, handleSubmit, formState: { errors,isValid } } = useForm<FormData>({resolver:zodResolver(schema)})
    const onSubmit = (data: FieldValues) => {
        console.log(data);

    }
    return (

        <form className="max-w-sm mx-auto" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-5">
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                <input {...register('name')} type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" />
                {errors.name&&
                <p className='text-red-400'>{errors.name.message}</p>
                }
            </div>
            <div className="mb-5">
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                <input {...register('pass',{valueAsNumber:true})} name="pass" type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                {errors.pass &&
                    <p className='text-red-400'>{errors.pass.message}</p>
                }
            </div>
            <button disabled={!isValid} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>

    )
}


export default Form3