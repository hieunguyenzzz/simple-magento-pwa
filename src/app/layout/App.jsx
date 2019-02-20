import React, {Component} from 'react';
import {Route} from "react-router";
import NavBar from "../../features/nav/NavBar";
import {Container} from "semantic-ui-react";
import {Switch} from "react-router-dom";
import HomePage from "../../features/home/HomePage";
import 'semantic-ui-css/semantic.min.css';

class App extends Component {
    render() {
        return (
            <>
                <Route path="/(.*)" render={() => (
                    <>
                        <NavBar/>
                        <Container className="main">
                            <Switch>
                                <Route exact path="/" component={HomePage}/>
                                <Route path="/listing/page/:pagination/:itemperpage?" component={HomePage}/>
                            </Switch>
                        </Container>
                    </>
                )}>
                </Route>
            </>
        );
    }
}

export default App;