import React from 'react';
import {Card, Checkbox, Dimmer, Input, Loader, Pagination, Segment} from "semantic-ui-react";
import {getFilteredProduct} from '../../app/reducers/index';
import {connect} from 'react-redux';
import Product from "./Product";
import {fetchProduct} from "../../app/action";
import {ENTITY_PRODUCT} from "../../app/instant";

const mapStateToProps = (state, ownProps) => ({
    products: getFilteredProduct(state),
    activePage: ownProps.match.params.pagination || 1,

})

const mapActionToProps = (dispatch) => {
    return {
        fetchProduct: (entity, activePage) => dispatch(fetchProduct(entity, activePage)),
    }
}

class HomePage extends React.Component {
    state = {
        activePage: this.props.activePage
    }

    componentDidMount() {
        const {fetchProduct, activePage} = this.props;
        fetchProduct(ENTITY_PRODUCT, activePage);
    }

    handlePaginationChange = (e, {activePage}) => {
        this.setState({activePage})
        this.props.history.push('/listing/page/' + activePage);
        const {fetchData} = this.props;
        fetchData(ENTITY_PRODUCT, activePage);
    }

    render() {
        const {products} = this.props;
        return <>
            <Segment>
                <Input fluid size='huge' icon='search' placeholder='Search...'/>

                <Checkbox label='Make my profile visible'/>
            </Segment>
            <Segment>
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