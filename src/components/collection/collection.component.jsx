import React from "react";
import { connect } from "react-redux";

import CollectionItem from "../collection-item/collection-item.component";
import { selectCollection } from "../../redux/shop-data/shop-data.selector";
import { createStructuredSelector } from "reselect";

import "./collection.styles.scss"


const CollectionPage = ({ collection }) => {   
    const { title, items } = collection;  
    return (
        <div className="collection-page">
            <h2 className="title">{title}</h2> 
            <div className="items">
                {
                    items.map(
                        item => (
                            <CollectionItem key={item.id} item={item}></CollectionItem>
                        )                        
                    )
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state, { match: { params: { collectionId } } }) => {
    return createStructuredSelector({
        collection: selectCollection(collectionId)
    })
}

export default connect(mapStateToProps)(CollectionPage);