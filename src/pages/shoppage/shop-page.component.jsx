import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import { fetchCollectionsStartAsync } from "../../redux/shop-data/shop-data.action";

import  CollectionsOverviewContainer from "../../components/collection-overview/collection-overview.container";
import CollectionContainer from "../../components/collection/collection.container";


class ShopPage extends Component {   

    componentDidMount() {
        const { fetchCollectionsStartAsync } = this.props;
        fetchCollectionsStartAsync();
    }

    render() {
        
        const { match } = this.props;         
        
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} component={CollectionsOverviewContainer}></Route>
                <Route path={`${match.path}/:collectionId`} component={CollectionContainer}></Route>
                           
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})


export default connect(null, mapDispatchToProps)(ShopPage);