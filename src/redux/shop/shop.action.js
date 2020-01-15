import ShopActionType from './shop.types';
import { firestore, convetCollectionsToMap } from '../../firebase/firebase.utils';



// export const updateCollections = (collectionMap) =>({
//     type : ShopActionType.UPDATE_COLLECTIONS,
//     payload : collectionMap
// })

export const fetchCollectionStart = () =>({
    type : ShopActionType.FETCH_COLLECTIONS_START,
    
})

export const fetchCollectionSuccess = collectionsMap => ({

    type : ShopActionType.FETCH_COLLECTIONS_SUCCESS,
    payload : collectionsMap
}) 

export const fetchCollectionFailure = errorMessage => ({

    type : ShopActionType.FETCH_COLLECTIONS_FAILURE,
    payload : errorMessage
}) 

export const fetchCollectionStartAsync = () =>{

    return dispatch => {

        const collectionRef = firestore.collection('collections');

        dispatch(fetchCollectionStart())

        collectionRef.get().then(
            snapShot => {

                const collectionsMap=  convetCollectionsToMap(snapShot)
                dispatch(fetchCollectionSuccess(collectionsMap))
                //  updateCollections(collectionsMap);
                //  this.setState({loading : false});
             }
            
        ).catch(error => dispatch(fetchCollectionFailure(error.message)))
    }

}


