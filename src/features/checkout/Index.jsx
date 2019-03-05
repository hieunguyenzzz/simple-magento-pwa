import React, {Component} from 'react';
import {Divider, Grid} from "semantic-ui-react";
import SideBar from "./SideBar/Index";
import BillingAddress from "./Step/BillingAddress";
import ShippingAddress from "./Step/ShippingAddress";
import Payment from "./Step/Payment";
import ButtonPlaceOrder from "./ButtonPlaceOrder";

class Index extends Component {

    render() {
        return (
            <>
                <Grid>
                    <Grid.Column width={10}>
                        <BillingAddress />
                        <Divider />
                        <ShippingAddress/>
                        <Divider />
                        <Payment/>
                        <Divider />
                        <ButtonPlaceOrder />
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <SideBar />
                    </Grid.Column>
                </Grid>
            </>
        )
    }
}

export default Index;