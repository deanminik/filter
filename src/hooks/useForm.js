import { useState } from 'react'

export const useForm = (initialState = {}) => { // mandamos este parametro por si nadie nos manda nada y nos reviene
   
    const [values, setvalues] = useState(initialState);

    const reset =()=>{
        setvalues(initialState)
    }

    const handleInputChange = ({target}) =>{
        setvalues({

            ...values,
           [target.name]:target.value
        });

    }

    return[values, handleInputChange,reset];
}