import React, { Component } from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

import SHOO_DATA from './shop.data';

class ShopPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOO_DATA
        };
    }

    render() {
        const {collections} = this.state;
        
        return (
            <div className='shop-page'>
                {
                    collections.map(({ id, ...otherCollectionProps }) => {
                        return <CollectionPreview key={id} {...otherCollectionProps} />
                    })
                }
            </div>
            
        )
    }
}

export default ShopPage;