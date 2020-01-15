import {connect} from 'react-redux';
import { createStructuredSelector} from 'reselect';
import { compose } from 'redux';

import {selectIsCollectionFetching } from '../../redux/shop/shop.selector';

import WithSpinner from '../with-spinner/with-spinner.component';
import CollectionsOverview from './collections-overview.component';

const mapStateToProp = createStructuredSelector({
    isLoading : selectIsCollectionFetching
})

const CollectionsOverviewContainer = compose(
    connect(mapStateToProp),
    WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;

// connect(mapStateToProp)(WithSpinner(CollectionsOverview))