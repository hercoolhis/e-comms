import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectShopDataCollections } from "../../redux/shop-data/shop-data.selector";


import CollectionPreview from "../../components/collection-preview/collection-preview.component";


const CollectionOverview = ({ collections }) => {
    return (
        <div className="collection-overview">
            {
                collections.map(({id, ...otherCollectionProps}) => (
                    <CollectionPreview key={id} {...otherCollectionProps}></CollectionPreview>
                ))
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectShopDataCollections
})



export default connect(mapStateToProps, null)(CollectionOverview);