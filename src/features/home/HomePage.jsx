import React from 'react';
import {Card, Checkbox, Dimmer, Input, Loader, Pagination, Segment} from "semantic-ui-react";
import {getFilteredProduct} from '../../app/reducers/index';
import {connect} from 'react-redux';
import Product from "./Product";
import {fetchData} from "../../app/action";
import {ENTITY_PRODUCT} from "../../app/instant";
import {isloading} from "../../app/reducers/isloading";

const mapStateToProps = (state, ownProps) => ({
    products: getFilteredProduct(state),
    activePage: ownProps.match.params.pagination || 1,
    isloading: state.isloading
})

const mapActionToProps = (dispatch, ownProps) => {
    return {
        fetchData: (entity) => dispatch(fetchData(entity, ownProps.match.params.pagination)),
    }
}

class HomePage extends React.Component {
    state = {
        activePage: this.props.activePage
    }


    componentDidMount() {
        const {fetchData} = this.props;
        fetchData(ENTITY_PRODUCT);
    }

    handlePaginationChange = (e, {activePage}) => {
        this.setState({activePage})
        this.props.history.push('/listing/page/' + activePage);
        console.log('HandlePaginationChange')
        //this.forceUpdate();
    }

    render() {
        const {products} = this.props;
        return <>
            <Segment>
                <Input fluid size='huge' icon='search' placeholder='Search...'/>

                <Checkbox label='Make my profile visible'/>
            </Segment>
            <Segment>
                <Dimmer inverted active={this.props.isloading}>
                    <Loader />
                </Dimmer>

                <Card.Group>
                    {products.map(product => {
                        return <Product key={product.id} {...product} />
                    })}
                </Card.Group>

                <Pagination
                    activePage={this.state.activePage}
                    totalPages={5}
                    onPageChange={this.handlePaginationChange}
                />
            </Segment>


        </>
    }
}

export default connect(mapStateToProps, mapActionToProps)(HomePage);