import React from 'react';
import { connect } from 'react-redux';
import testProfile from '../../../../server/database/utils/seed/data/testProfile.js';

const AccountProfile = props => {
  const { isLoggedIn } = props;
  if (!isLoggedIn) {
    return <h2>Login Foo!</h2>;
  } else {
    return (
      <div
        id="nav-link-account"
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: '40px 100px 0 100px',
          padding: '20px',
        }}
      >
        <div id="profile-image">
          <img src={testProfile.profile_pic_url} width="200px" />
        </div>
        <div id="profile-info" style={{ border: '2px navy dotted' }}>
          Name: {testProfile.first_name} {testProfile.last_name}
          <br />
          Phone Number: {testProfile.phone_number}
          <br />
          Address: <br />
          {testProfile.street_address} <br />
          {testProfile.city}, {testProfile.state} {testProfile.zipcode}
        </div>
      </div>
    );
  }
};
const mapState = state => ({ isLoggedIn: state.isLoggedIn });

export default connect(mapState)(AccountProfile);
