import React, {Component} from 'react';
import {Menu, Label, Icon, Container} from "semantic-ui-react";
import {Link, withRouter} from "react-router-dom";

class  NavBar extends Component {
    render() {
        return (
            <>
                <Menu fixed="top">
                    <Container>
                        <Menu.Item header as={Link} to="/">
                            Magento PWA
                        </Menu.Item>

                        <Menu.Item position="right"
                                   name='video camera'
                                   as={Link} to="/checkout"
                        >
                            <Icon name='cart' />

                            <Label color='teal'>1</Label>
                        </Menu.Item>
                    </Container>
                </Menu>
            </>
        );
    }

}

export default withRouter(NavBar);