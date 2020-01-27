import React from "react";
import { connect } from "react-redux";

//import CollectionItem from "../collection-item/collection-item.component";
import { selectCollection } from "../../redux/shop-data/shop-data.selector";
import { createStructuredSelector } from "reselect";


const Collection = ({ match , collection }) => {  
    console.log(collection);  
    return (
        <div className="collection">
            <h2>Collection Page</h2> 
        </div>
    )
}

const mapStateToProps = (state, { match: { params: { collectionId } } }) => {
    return createStructuredSelector({
        collection: selectCollection(collectionId)
    })
}

export default connect(mapStateToProps)(Collection);