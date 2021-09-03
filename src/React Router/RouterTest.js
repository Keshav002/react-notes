import React from 'react'
import { Route, Switch } from "react-router-dom";
import About from './About';
import Contact from './Contact';
import Error from './Error';
import User from './User';
import NavBar from './NavBar';
function RouterTest() {
    const Name = (props) => {
        return(
            <h1>This is {props.name} Name page inside contact</h1>
        )
    }
    return (
        <div className="routerTest">
        <NavBar />
        <Switch>
        <Route exact path='/' component={About} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/user/:fname/:lname' component={User} />
        <Route path='/contact/name' component={() => <Name name="props" />} />
        <Route component={Error} /> // Instead of component we ca write render for rendering the pages
        </Switch>
        </div>
    )
}

export default RouterTest
