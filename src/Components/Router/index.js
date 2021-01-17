import React from "react";
import { BrowserRouter as Router,Switch,Route,} from "react-router-dom";
import Signup from "../../Pages/Signup";
import Login from "../../Pages/Login";
import Dashboard from "../../Pages/Dashboard";
function Find(){
    return(
        <Router>
            <Switch>
                <Route path='/' exact component={Signup}/>
                <Route path='/login' exact component={Login}/>
                <Route path='/dashboard' exact component={Dashboard}/>
            </Switch>
        </Router>
    )
}
export default Find