import { compose } from "redux";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";


import Collection from "./collection.component";
import { selectIsCollectionsLoaded } from "../../redux/shop-data/shop-data.selector";
import WithSpinner from "../with-spinner/with-spinner.component";


const mapStateToProps = createStructuredSelector({
    isLoading: (state) => !selectIsCollectionsLoaded(state)
})

const CollectionContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(Collection)


export default CollectionContainer;
