

// import React from 'react'

// // vamos a usar una prop history esto se puede ver en el inspector de elementor en la parte de compoenentes
// export const LoginScreen = ({history}) => {

//     const handleLogin = () =>{
// //le idicamos la ruta a la que queremos navegar
//         history.push('/');
//     }
    
    
//     return (
//         <div className="container mt-5">
//             <h1>Login Screen</h1>
//             <hr />

//             <button
//                 className="btn btn-primary"
//                 onClick={handleLogin}
//             >
//                 Login
//             </button>
//         </div>
//     )
// }

//_______________________________________________________________________________________________

// tema del auth 

import { types } from '../../types/types';
import { AuthContext } from '../../auth/AuthContext';
import React, { useContext } from 'react';



export const LoginScreen = ({history}) => {

    const {dispatch} = useContext(AuthContext);// YA TENEMOS EL DISPATCH

    const handleLogin = () =>{

        const lastPath = localStorage.getItem('lastPasth') || '/';

        dispatch({
            type: types.login,
            payload:{
                name:'dean'
            }
        })
        history.replace('/');// add this to be able no navegate in every page 
    }
    
    
    return (
        <div className="container mt-5">
            <h1>Login Screen</h1>
            <hr />

            <button
                className="btn btn-primary"
                onClick={handleLogin}
            >
                Login
            </button>
        </div>
    )
}
