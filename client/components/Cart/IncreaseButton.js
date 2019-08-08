import React from 'react';
import { connect } from 'react-redux';
import { UPDATE_BUTTONS } from './styles';
import { increaseQty } from './../../redux';

const IncreaseButton = props => {
  const { product, increaseQty } = props;
  return (
    <button
      data-pid={product.id}
      style={UPDATE_BUTTONS}
      onClick={() => {
        console.log('qty increased');
        increaseQty(product);
      }}
    >
      +
    </button>
  );
};

const mapDispatch = dispatch => ({
  increaseQty: product => {
    dispatch(increaseQty(product));
  },
});

export default connect(
  null,
  mapDispatch
)(IncreaseButton);
