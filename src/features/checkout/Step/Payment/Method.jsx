import React, {Component} from 'react';
import {} from 'semantic-ui-react';
import {Checkbox} from "semantic-ui-react";

const Method = ({type, label, callback}) => {
    return (
        <>
            <Checkbox label={label} />
            <div id={type + "-wrapper"} />
        </>
    )
}

export default Method;