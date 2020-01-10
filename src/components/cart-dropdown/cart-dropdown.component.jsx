import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { connect } from 'react-redux'
import {  withRouter } from "react-router-dom";

import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggelCartHidden } from '../../redux/cart/cart.action'

import { createStructuredSelector} from 'reselect';

import './cart-dropdown.styles.scss';

const Cart = ({cartItems , history,dispatch }) => (
    <div className="cart-dropdown">

        <div className="cart-items">
            {
                cartItems.length ?
                (cartItems.map(item => (
                    <CartItem key={item.id} item = {item}/>
                )))
                : (<span className="empty-message">Your Cart Is Empty</span>)

            }

        </div>
        <CustomButton  onClick= { () => {
            history.push('/checkout')
            dispatch(toggelCartHidden())
            }}>
            GO TO CHECKOUT
        </CustomButton>

    </div>
);

const mapStateToprops = createStructuredSelector({

    cartItems : selectCartItems
});

export default withRouter(connect(mapStateToprops)(Cart));