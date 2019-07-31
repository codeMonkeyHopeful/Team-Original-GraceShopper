import React, { Fragment } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { changeLoginStatus, logoutUser } from './../../../redux';

import { NAV_LINK } from './../styles';

const handleLogout = changeStatus => {
  // clear redux state of user info and delete cookie
  changeStatus(false);
  logoutUser();
  window.localStorage.clear();
};

const handleLoginClick = (isLoggedIn, changeStatus) => {
  if (isLoggedIn) {
    console.log('run logout routine');
    handleLogout(changeStatus, logoutUser);
  }
  // only for testing. delete when login page is up

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
  let { isLoggedIn, changeStatus, user } = props;
  // let localStorageLoginStatus = window.localStorage.getItem('isLoggedIn');
  // if (localStorageLoginStatus === 'true') {
  //   isLoggedIn = true;
  // }
  // let localStorageUserInfo = window.localStorage.getItem('userInfo');
  // if (localStorageUserInfo) {
  //   localStorageUserInfo = JSON.parse(localStorageUserInfo);
  //   user = localStorageUserInfo;
  // }

  return (
    <Fragment>
      {isLoggedIn ? (
        <p style={{ margin: 0, ...NAV_LINK }}>
          {`Welcome, ${user.profile.first_name} `}
        </p>
      ) : (
        ''
      )}
      {renderLogin(isLoggedIn, changeStatus)}
    </Fragment>
  );
};

const mapState = state => ({
  isLoggedIn: state.isLoggedIn,
  user: state.currentUser,
});
const mapDispatch = dispatch => ({
  changeStatus: status => {
    dispatch(changeLoginStatus(status));
  },
  logoutUser: () => {
    [dispatch(logoutUser())];
  },
});

export default connect(
  mapState,
  mapDispatch
)(LoginLink);
