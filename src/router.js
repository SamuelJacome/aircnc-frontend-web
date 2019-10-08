import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from "./pages/Login";
import New from "./pages/New";
import Dashboard from "./pages/Dashboard"; 


export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component ={Login} /> 
                {/* exact só chama essa rota se o caminho for exatamente igual */}
                <Route path="/dashboard" component ={Dashboard} />
                <Route path="/new" component ={New} />
            </Switch>
        
        </BrowserRouter>
    )
}