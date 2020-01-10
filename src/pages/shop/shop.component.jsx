import React from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

// import { firestore , convetCollectionsToMap } from '../../firebase/firebase.utils';
import {connect} from 'react-redux';

import { createStructuredSelector } from 'reselect';

import { selectIsCollectionFetching ,selectIsCollectionsLoaded} from '../../redux/shop/shop.selector';

import { fetchCollectionStartAsync } from '../../redux/shop/shop.action';

import WithSpinner from '../../components/with-spinner/with-spinner.component';

import './shop.styles.scss';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage); 

class ShopPage extends React.Component{

//    state = {
//        loading : true
//    }
//     unSubscrribeFromSnapshot = null;

    componentDidMount(){

        const { fetchCollectionStartAsync } = this.props;
        fetchCollectionStartAsync()
        // const {updateCollections} = this.props;

        // const collectionRef = firestore.collection('collections');
    

        //With firebase onSnapHot Type API request

        // this.unSubscrribeFromSnapshot= collectionRef.onSnapshot(async snapShot => {

        //    const collectionsMap=  convetCollectionsToMap(snapShot)
        //     updateCollections(collectionsMap);
        //     this.setState({loading : false});
        // })

        // USing Inbuilt promise method (.get())
        
        // collectionRef.get().then(
        //     snapShot => {

        //         const collectionsMap=  convetCollectionsToMap(snapShot)
        //          updateCollections(collectionsMap);
        //          this.setState({loading : false});
        //      }
            
        // )

        // collectionRef.onSnapshot(async snapShot => {

        //     const collectionsMap=  convetCollectionsToMap(snapShot)
        //      updateCollections(collectionsMap);
        //      this.setState({loading : false});
        //  })

    }
    

    render(){
        
        const { match , isCollectionFetching,isCollectionLoaded } = this.props;
        // const { loading } = this.state;

        return (
            <div className="shop-page">

                {/* <Route exact path={`${match.path}`} component={CollectionsOverview} /> */}

                <Route exact path={`${match.path}`} render = {(props) => (<CollectionsOverviewWithSpinner isLoading={isCollectionFetching} {...props}/>
                )} 
                />
                {/* <Route path={`${match.path}/:collectionId`} component={CollectionPage} /> */}

                <Route path={`${match.path}/:collectionId`} render = {(props) => (<CollectionPageWithSpinner isLoading={!isCollectionLoaded} {...props}/>
                )}
                 />
            </div>

        );
    }


}


const mapStateToProps = createStructuredSelector({
    isCollectionFetching : selectIsCollectionFetching,
    isCollectionLoaded : selectIsCollectionsLoaded
})
const mapDispatchToProps = (dispatch) =>({
    // updateCollections :(collectionsMap) =>dispatch(updateCollections(collectionsMap))
    fetchCollectionStartAsync : () => dispatch(fetchCollectionStartAsync())
 })



export default connect(mapStateToProps,mapDispatchToProps)(ShopPage);