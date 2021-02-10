import React, { useEffect, useReducer } from 'react'
import { AuthContext } from './auth/AuthContext'
import { authReducer } from './auth/authReducer'
import { AppRouter } from './routers/AppRouter'

const init = () =>{
    return JSON.parse(localStorage.getItem('user')) || {
       logged:false

    }; //video 188 min7:05  SI EXISTE LO VA A RETORNAR Y SI NO DEVOLVER UN OBJETO 
}


export const HeroesApp = () => {
    // we use a reducer
    const [user, dispatch] = useReducer(authReducer, {}, init) // the reducer that i will use is mny reducer authReducer

    // lo que vamos hacer aqui es para que no se pierda la informacion del local storage y no tener que volver a logeaese otra vez

    useEffect(() => {
        localStorage.setItem('user',JSON.stringify(user));// con esto se memoriza y si recarga no se pierde la informacion 
       
    }, [user])
    
    return (
                      
        // here i will distribu it my reducer with my authcontext alue={{}
        // so i will be able to make dispasth with my user in the all app because this page is the hight level of my aplication 
        <AuthContext.Provider value={{user, dispatch}}>
            
            <AppRouter />

        </AuthContext.Provider>

    )
}
