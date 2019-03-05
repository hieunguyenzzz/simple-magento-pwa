import React, {Component} from 'react';
import {} from 'semantic-ui-react';
import {Checkbox} from "semantic-ui-react";
import Script from 'react-load-script'
import {loadingBeginning, loadingFinish} from "../../../../app/action";
import {connect} from 'react-redux';

const mapActionToProps = (dispatch) => ({
    loadingBeginning,
    loadingFinish
})

class StripePay extends Component {
    state = {
        enable: false
    }

    handleScriptLoaded = () => {
        const {loadingFinish, loadingBeginning} = this.props;

// eslint-disable-next-line no-undef
        const stripe = Stripe('pk_test_9PI6CEbDOXvLg8VWiBMdn8qg');

        // Create an instance of Elements.
        const elements = stripe.elements();

        // Create an instance of the card Element.
        const card = elements.create('card');
        loadingBeginning();
        card.on('ready', () => loadingFinish());
        // Add an instance of the card Element into the `card-element` <div>.
        card.mount('#stripe-wrapper');

    }

    enableMethod = () => () => {
        this.setState({enable: !this.state.enable});
    }

    render() {
        return (
            <>
                <Script
                    url="https://js.stripe.com/v3/"
                    onLoad={this.handleScriptLoaded}
                />
                <Checkbox label="Stripe" onClick={this.enableMethod()}/>
                <div id={"stripe-wrapper"} style={{display: !this.state.enable ? "none" : ''}} />

            </>
        )
    }
}

export default connect(mapActionToProps)(StripePay);