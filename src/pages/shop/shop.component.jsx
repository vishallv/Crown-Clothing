import React ,{useEffect}from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionsPageContainer from '../collection/collection.container';

// import { firestore , convetCollectionsToMap } from '../../firebase/firebase.utils';
import {connect} from 'react-redux';

// import { createStructuredSelector } from 'reselect';



import { fetchCollectionStart } from '../../redux/shop/shop.action';

// import WithSpinner from '../../components/with-spinner/with-spinner.component';

import './shop.styles.scss';

// const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
// const CollectionPageWithSpinner = WithSpinner(CollectionPage); 

// class 
const ShopPage = ({fetchCollectionStart,match}) =>{

    useEffect(() => {
        fetchCollectionStart();
    },[fetchCollectionStart])
//  extends React.Component{

//    state = {
//        loading : true
//    }
//     unSubscrribeFromSnapshot = null;

    // componentDidMount(){

    //     const { fetchCollectionStart } = this.props;
    //     fetchCollectionStart()
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

    // }
    

    // render(){
        
        // const { match  } = this.props;
        // const { loading } = this.state;

        return (
            <div className="shop-page">

                {/* <Route exact path={`${match.path}`} component={CollectionsOverview} /> */}

                <Route exact path={`${match.path}`} component = {CollectionsOverviewContainer}/>
                {/* )} 
                /> */}
                {/* <Route path={`${match.path}/:collectionId`} component={CollectionPage} /> */}

                <Route path={`${match.path}/:collectionId`} component={CollectionsPageContainer}/>
                {/* )}
                 /> */}
            </div>

        );
    }


// }


// const mapStateToProps = createStructuredSelector({
//     // isCollectionFetching : selectIsCollectionFetching,
//     isCollectionLoaded : selectIsCollectionsLoaded
// })
const mapDispatchToProps = (dispatch) =>({
    // updateCollections :(collectionsMap) =>dispatch(updateCollections(collectionsMap))
    fetchCollectionStart : () => dispatch(fetchCollectionStart())
 })



export default connect(null,mapDispatchToProps)(ShopPage);