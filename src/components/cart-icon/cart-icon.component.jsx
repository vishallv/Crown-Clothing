import React from 'react';

import { connect } from 'react-redux';

import { toggelCartHidden } from '../../redux/cart/cart.action'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'
import { createStructuredSelector} from 'reselect';

import './cart-icon.styles.scss';
import { ReactComponent as ShoppinIcon} from '../../assets/11.3 shopping-bag.svg'


const CartIcon = ({toggelCartHidden , itemCount }) => (

    <div className="cart-icon" onClick={toggelCartHidden}>
        <ShoppinIcon className="shopping-icon"/>
        <span className="item-count">{itemCount}</span>
    </div>
)

const mapStateToprops = createStructuredSelector({

    itemCount : selectCartItemsCount
})

const mapDispatchToProps = dispatch => ({

    toggelCartHidden : () => dispatch(toggelCartHidden())
});

export default connect(mapStateToprops,mapDispatchToProps)(CartIcon);
