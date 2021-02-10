import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { Navbar } from '../components/ui/Navbar';
import {HeroScreen} from '../components/heroes/HeroScreen';
import {DcScreen} from '../components/dc/DcScreen';
import { SearchScreen } from '../components/search/SearchScreen';




export const DashboardRoutes = () => {
    // aqui es donde esto aparece si está atenticado 
    return (
        <>
            <Navbar/>
            <div className="container">
                {/* switch viene de react router dom  */}
                <Switch>
                    <Route exact path="/marvel" component={MarvelScreen}/>
                    {/* en la url recibe un id  */}
                    <Route exact path="/hero/:heroeId" component={HeroScreen}/>
                    <Route exact path="/dc" component={DcScreen}/>
                    <Route exact path="/search" component={SearchScreen}/>

                    <Redirect to="/marvel"/>
                </Switch>
            </div>
        </>
    )
}
