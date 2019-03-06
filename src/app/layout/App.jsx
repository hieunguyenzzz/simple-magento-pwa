import React, {Component} from 'react';
import {Route, Switch, withRouter} from "react-router-dom";
import NavBar from "../../features/nav/NavBar";
import {Container, Dimmer, Loader} from "semantic-ui-react";
import HomePage from "../../features/home/HomePage";
import 'semantic-ui-css/semantic.min.css';
import Checkout from '../../features/checkout/Index'
import {connect} from 'react-redux';
import NotFound from "./NotFound";

const mapStateToProp = (state) => ({
    isloading: state.isloading
})

class App extends Component {
    render() {
        const {isloading} = this.props;
        return (
            <Route path="/(.*)" render={() => (
                <>
                    <NavBar/>
                    <Container className="main">
                        <Dimmer inverted active={isloading}>
                            <Loader />
                        </Dimmer>
                        <Switch>
                            <Route exact path="/" component={HomePage}/>
                            <Route exact path="/listing" component={HomePage}/>
                            <Route path="/listing/page/:pagination/:itemperpage?" component={HomePage}/>
                            <Route path="/checkout" component={Checkout}/>
                            <Route path='*'  component={NotFound} />
                        </Switch>
                    </Container>
                </>
            )}>
            </Route>
        );
    }
}

export default withRouter(connect(mapStateToProp)(App));