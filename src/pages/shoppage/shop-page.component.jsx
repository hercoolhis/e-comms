import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import { fetchCollectionsStart } from "../../redux/shop-data/shop-data.action";

import  CollectionsOverviewContainer from "../../components/collection-overview/collection-overview.container";
import CollectionContainer from "../../components/collection/collection.container";


const ShopPage = ({ fetchCollectionsStart, match }) =>  {  
    
    useEffect(() => {
        fetchCollectionsStart()
    }, [fetchCollectionsStart]);
     
    
    return (
        <div className="shop-page">
            <Route exact path={`${match.path}`} component={CollectionsOverviewContainer}></Route>
            <Route path={`${match.path}/:collectionId`} component={CollectionContainer}></Route>
                        
        </div>
    )
}


const mapDispatchToProps = (dispatch) => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})


export default connect(null, mapDispatchToProps)(ShopPage);