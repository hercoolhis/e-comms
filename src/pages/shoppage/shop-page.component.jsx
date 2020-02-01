import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";


import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import Collection from "../../components/collection/collection.component";
import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils";
import { updateCollections } from "../../redux/shop-data/shop-data.action";

import WithSpinner from "../../components/with-spinner/with-spinner.component";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(Collection)


class ShopPage extends Component {

    state = {
        loading: true
    }

    unsubscribeFromSnapShot = null;
    

    componentDidMount() {
        const collectionRef = firestore.collection('collections');
        const { updateCollections } = this.props;

        collectionRef.onSnapshot(snapShot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapShot);
            //console.log(collectionsMap);
            updateCollections(collectionsMap);
            this.setState({ loading: false});
        });

    }

    render() {
        const { match } = this.props;
        const { loading } = this.state;

        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} render={(props) => (
                    <CollectionOverviewWithSpinner isLoading={loading} {...props}></CollectionOverviewWithSpinner>)}></Route>
                <Route path={`${match.path}/:collectionId`} render={(props) => (
                    <CollectionPageWithSpinner isLoading={loading} {...props}></CollectionPageWithSpinner>
                )}></Route>
                           
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    updateCollections: (collectionsMap) => {
        dispatch(updateCollections(collectionsMap));
    }
})


export default connect(null, mapDispatchToProps)(ShopPage);