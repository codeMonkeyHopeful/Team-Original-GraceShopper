import React from 'react';
import CheckoutCartTable from './CheckoutCartTable';
import { CART_CONTAINER, CART_TABLE, CHECKOUT_BUTTON } from './styles';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

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
  console.log('current user', props.currentUser.profile);
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
          <div>{phone_number}</div>
          <div>{email}</div>
        </div>
      </div>
      <div>
        <h3>
          Please confirm your order is correct before submitting for delivery.
        </h3>
        <div>
          <CheckoutCartTable style={CART_TABLE} />
        </div>
        <div>&nbsp;</div>
        <div id="checkout-submit-button" style={CHECKOUT_BUTTON}>
          <NavLink to="/cart">
            <button>Edit Cart</button>
          </NavLink>
          <div>&nbsp;</div>
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
};
const mapState = ({ currentUser }) => ({ currentUser });

export default connect(mapState)(CheckoutPage);
