import React from 'react';
import { connect } from 'react-redux';

const ConfirmationPage = props => {
  return <div>confirmed</div>;
};

const mapState = ({ currentUser }) => ({ currentUser });

export default connect(mapState)(ConfirmationPage);
