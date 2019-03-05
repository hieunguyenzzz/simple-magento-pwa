import React, {Component} from 'react';
import {} from 'semantic-ui-react';
import Address from "./Address";
import {Checkbox} from "semantic-ui-react";
import {Form} from "semantic-ui-react";

const ShipingAddressCheckBoxes = ({sameAddressOnlick}) => {
    return (
        <>
            <Form>
                <Form.Field>
                    <Checkbox label='shipping address is the same as my billing address' defaultChecked onChange={sameAddressOnlick()}/>
                </Form.Field>
                <Form.Field>
                    <Checkbox label='save this information for next time'/>
                </Form.Field>

            </Form>

        </>
    );
}

class ShippingAddress extends Component {
    state = {
        isShippingSameWithBilling: true
    }

    handleShippingAddressSameWithBilling = () => () => {
        this.setState({isShippingSameWithBilling: !this.state.isShippingSameWithBilling})
    }

    render() {
        return (
            <>
                <ShipingAddressCheckBoxes sameAddressOnlick={this.handleShippingAddressSameWithBilling} />
                {!this.state.isShippingSameWithBilling && <Address title="Shipping Address"/>}

            </>
        )
    }
}

export default ShippingAddress;