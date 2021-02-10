import { types } from "../types/types";




export const authReducer = (state = {}, action) => {

    // we are going to evaluate the action.type
    // so we are going to see log in and log out 
    switch (action.type) {
        case types.login:
            return {
                ...action.payload,// tomamos todo lo que venga en el payload de la accion 
                logged: true
            }

        case types.logout:
            return{
                // it is not import the content of the payload
                logged:false
            }    

        default:
            return state;
    }

}