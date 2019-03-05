import React, {Component} from 'react';
import {} from 'semantic-ui-react';
import {Form} from "semantic-ui-react";
import {Dropdown} from "semantic-ui-react";
import {Header} from "semantic-ui-react";

const countryDropdown = () => {
    const countryoptions = [ { key: 'us', value: 'us', flag: 'us', text: 'United State' }]
    return <Dropdown placeholder='select country' fluid search selection options={countryoptions} />
};

const stateDropdown = () => {
    const stateoptions = [ { key: 'ca', value: 'ca', text: 'California' }]
    return <Dropdown placeholder='select state' fluid search selection options={stateoptions} />
}


const Address = ({title}) => {
    return <>
        <Header as='h4'>{title}</Header>
        <Form width={16}>
            <Form.Group >
                <Form.Input fluid label='First name' placeholder='First name' width={8} />
                <Form.Input fluid label='Last name' placeholder='Last name' width={8} />
            </Form.Group>

            <Form.Group>
                <Form.Input label='Email' placeholder='joe@schmoe.com' />
            </Form.Group>
            <Form.Group>
                <Form.Input label='Address' placeholder='1234 Main st' />
            </Form.Group>
            <Form.Group>
                <Form.Input label='Address 2 (Optional)' placeholder='Apartment or suite' />
            </Form.Group>

            <Form.Group>
                <Form.Field label="Country" control={countryDropdown} width={6} />
                <Form.Field label="State" control={stateDropdown}  width={6} />
                <Form.Input label='Zip' placeholder='Zip' />
            </Form.Group>
        </Form>
    </>;
}


export default Address;