import {connect} from 'react-redux';
import { createStructuredSelector} from 'reselect';
import { compose } from 'redux';

import { selectIsCollectionsLoaded} from '../../redux/shop/shop.selector';

import WithSpinner from '../../components/with-spinner/with-spinner.component';
import CollectionPage from './collection.component';

const mapStateToProp = createStructuredSelector({
    isLoading : state =>  !selectIsCollectionsLoaded(state)
});

const CollectionsPageContainer = compose(
    connect(mapStateToProp),
    WithSpinner
)(CollectionPage);

export default CollectionsPageContainer;