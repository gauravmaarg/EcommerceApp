import React from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';

import WithSpinner from '../../components/with-spinner/with-spinner.component';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import {updateCollections} from '../../redux/shop/shop.action';

import {firestore, convertCollectonsSnapShotToMap} from '../../firebase/firebase.utils';

const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component{
  state = {
  loading: true
  };

  unsubscribeFromSnapshot =null;

  componentDidMount(){
    const {updateCollections}= this.props;
    const collectionRef = firestore.collection('collections')
    collectionRef.onSnapshot(async snapshot => {
     const collectionsMap= convertCollectonsSnapShotToMap(snapshot);
     updateCollections(collectionsMap);
     this.setState({loading: false});
    });
  }

  render(){
  const {match }= this.props;
  const {loading} = this.state;

  return(
  <div className='shop-page'>
  {/* <CollectionsOverview /> */}
  {/* <Route exact path={`${match.path}`} component={CollectionsOverview} />
  <Route path={`${match.path}/:collectionId`} component={CollectionPage} /> */}
  <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={loading}{...props}/>}/>
  <Route path={`${match.path}/:collectionId`} render={(props)=> <CollectionPageWithSpinner isLoading={loading} {...props} />} />
 </div>
  );
  }
} 

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null,mapDispatchToProps)(ShopPage);