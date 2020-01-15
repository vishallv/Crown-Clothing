import { takeLatest, call , put,all} from 'redux-saga/effects';
import { firestore, convetCollectionsToMap } from '../../firebase/firebase.utils';

import {fetchCollectionSuccess, fetchCollectionFailure } from './shop.action'; 

import ShopActionType from './shop.types';


export function* fetchCollectionsAsync(){

    try{
    const collectionRef = firestore.collection('collections');
    const snapShot = yield collectionRef.get();
    const collectionsMap =  yield call(convetCollectionsToMap,snapShot);
    yield put(fetchCollectionSuccess(collectionsMap));
    }
    catch(error){
        yield put(fetchCollectionFailure(error.message));

    }

        // collectionRef.get().then(
        //     snapShot => {

        //         const collectionsMap=  convetCollectionsToMap(snapShot)
        //         dispatch(fetchCollectionSuccess(collectionsMap))
        //         //  updateCollections(collectionsMap);
        //         //  this.setState({loading : false});
        //      }
            
        // ).catch(error => dispatch(fetchCollectionFailure(error.message)))
}

export function* fetchCollectionsStart(){
    yield takeLatest(ShopActionType.FETCH_COLLECTIONS_START,
        fetchCollectionsAsync)
}

export function* shopSagas(){

    yield all([
        call(fetchCollectionsStart)
    ])
}