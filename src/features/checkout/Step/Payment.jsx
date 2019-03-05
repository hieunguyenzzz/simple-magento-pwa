import React, {Component} from 'react';
import {} from 'semantic-ui-react';
import {Header} from "semantic-ui-react";
import Stripe from "./Payment/Stripe";

const Payment = () => {
    return (
        <>
            <Header as='h4'>Payment Method</Header>
            <Stripe />
        </>
    )


}

export default Payment;