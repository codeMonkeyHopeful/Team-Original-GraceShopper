import React from 'react';
import { connect } from 'react-redux';
import { UPDATE_BUTTONS } from './styles';

const DecreaseButton = props => {
  const { cart } = props.cart;
  return <button style={UPDATE_BUTTONS}>-</button>;
};

const mapState = ({ cart }) => ({ cart });

export default connect(mapState)(DecreaseButton);
