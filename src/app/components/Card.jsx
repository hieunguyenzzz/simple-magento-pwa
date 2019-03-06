import React, {Component} from 'react';
import {Card, Divider, Icon} from 'semantic-ui-react';
import {Image} from "semantic-ui-react";
import {Button} from "semantic-ui-react";
import {MAGENTO_PRODUCT_MEDIA_PATH} from "../instant";


class ProductCard extends Component {
    render() {
        const {name, images, price} = this.props;
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2
        })

        return (
            <Card>
                <Card.Content>
                    <Image src={MAGENTO_PRODUCT_MEDIA_PATH + images} />
                </Card.Content>
                <Card.Content extra>

                    <p className="product-name">{name}</p>
                    <p>Tan Side Crossbody Sling Bag</p>
                    <Divider />
                    <p className="product-price"><Icon name='tag' /><strong>{formatter.format(price)}</strong>
                        <Button floated='right'><Icon name='shop'  />Add To Cart</Button>
                    </p>

                </Card.Content>
            </Card>
        )
    }

}

export default ProductCard;