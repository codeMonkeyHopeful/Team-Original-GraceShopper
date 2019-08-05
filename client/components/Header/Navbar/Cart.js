import React from 'react';
import cartImage from './cartImage';
import { connect } from 'react-redux';

const Cart = props => {
  console.log(props);
  return <div>{cartImage}Hello</div>;
};

const mapState = ({ currentUser }) => ({ currentUser });

export default connect(mapState)(Cart);
