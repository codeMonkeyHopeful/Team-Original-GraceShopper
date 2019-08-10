import React from 'react';
import CheckoutCartTable from './CheckoutCartTable';
import {
  CART_CONTAINER,
  CART_TABLE,
  CHECKOUT_BUTTON,
  BUTTON_CLASSES_PRIMARY,
} from './styles';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { gotCart, submitOrder } from '../../redux';

const CheckoutPage = props => {
  const {
    first_name,
    last_name,
    street_address,
    city,
    state,
    zipcode,
    phone_number,
  } = props.currentUser.profile;
  const { email } = props.currentUser;
  const { submitOrder, cart } = props;

  const phoneNumber = `(${phone_number.slice(0, 3)}) ${phone_number.slice(
    3,
    6
  )}-${phone_number.slice(6)}`;

  console.log('cart in checkout', cart);
  return (
    <div style={CART_CONTAINER}>
      * Please confirm your shipping and contact information are correct *
      <div>&nbsp;</div>
      <div>
        <h3>SHIPPING INFORMATION</h3>
        <div>
          <div>
            {first_name}&nbsp;{last_name}
          </div>
          <div>{street_address}</div>
          <div>
            {city},&nbsp;{state} &nbsp;{zipcode}
          </div>
          <h3>CONTACT INFORMATION</h3>
          <div>{phoneNumber}</div>
          <div>{email}</div>
        </div>
      </div>
      <div>
        <h4>
          Please confirm your order is correct before submitting for delivery.
        </h4>
        <div>
          <CheckoutCartTable style={CART_TABLE} />
        </div>
        <div>&nbsp;</div>
        <div id="checkout-submit-button" style={CHECKOUT_BUTTON}>
          <NavLink to="/cart">
            <button className={BUTTON_CLASSES_PRIMARY}>Edit Cart</button>
          </NavLink>
          <div>&nbsp;</div>
          <button
            className={BUTTON_CLASSES_PRIMARY}
            onClick={() => submitOrder(cart)}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

const mapState = ({ currentUser, cart }) => ({ currentUser, cart });

const mapDispatch = dispatch => ({
  submitOrder: cart => {
    dispatch(submitOrder(cart));
  },
});

export default connect(
  mapState,
  mapDispatch
)(CheckoutPage);
