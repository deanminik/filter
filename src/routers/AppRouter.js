import React, { useContext } from "react";
import { LoginScreen } from "../components/login/LoginScreen";
import { DashboardRoutes } from "./DashboardRoutes";



import {
    BrowserRouter as Router,
    Switch
    
} from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import { AuthContext } from "../auth/AuthContext";
import { PublicRoute } from "./PublicRoute";


export const AppRouter = () => {

const {user} = useContext(AuthContext);

console.log(user)

    return (
        <Router>
            <div>

                <Switch>
                    {/* path es para la url y el compoenet es el compoenente que voy a mostrar  */}
                    <PublicRoute exact path="/login" component={LoginScreen}
                    isAuthenticated={user.logged}
                    
                    />

                    {/* queremos proteger esta rutas que contiene las demas */}
                    {/* <Route path="/" component={DashboardRoutes} /> */}

                    <PrivateRoute 
                    path="/" 
                    component={DashboardRoutes}
                    isAuthenticated={user.logged}
                    
                    /> 
                </Switch>
            </div>
        </Router>
    )
}
