import React, { Fragment } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { changeLoginStatus } from './../../../redux';

import { NAV_LINK } from './../styles';

const handleLogout = changeStatus => {
  // clear redux state of user info and delete cookie
  changeStatus(false);
};

const handleLoginClick = (isLoggedIn, changeStatus) => {
  if (isLoggedIn) {
    console.log('run logout routine');
    handleLogout(changeStatus);
  }
  // only for testing. delete when login page is up
  else {
    changeStatus(true);
  }

  // dont need a /login handler because navlink will reroute to login page
};

const renderLogin = (isLoggedIn, changeStatus) => {
  const path = isLoggedIn ? '/' : '/login';
  const loginStatus = isLoggedIn ? 'Logout' : 'Login';
  return (
    // display welcome message and name if logged in

    <NavLink
      to={path}
      style={NAV_LINK}
      onClick={() => handleLoginClick(isLoggedIn, changeStatus)}
    >
      <button>{loginStatus}</button>
    </NavLink>
  );
};

const LoginLink = props => {
  const { isLoggedIn, changeStatus, history } = props;

  return (
    <Fragment>
      {isLoggedIn ? (
        <p style={{ margin: 0, ...NAV_LINK }}>{`welcome username here  `} </p>
      ) : (
        ''
      )}
      {renderLogin(isLoggedIn, changeStatus)}
    </Fragment>
  );
};

const mapState = state => ({ isLoggedIn: state.isLoggedIn });
const mapDispatch = dispatch => ({
  changeStatus: status => {
    dispatch(changeLoginStatus(status));
  },
});

export default connect(
  mapState,
  mapDispatch
)(LoginLink);
