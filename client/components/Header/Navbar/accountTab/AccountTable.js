import React from 'react';
import { connect } from 'react-redux';

const AccountTable = props => {
  const { currentUser } = props;
  const {
    first_name,
    last_name,
    street_address,
    city,
    state,
    zipcode,
    phone_number,
  } = props.currentUser.profile;
  const width = '30%';
  const profileName = `${first_name} ${last_name}`;
  const streetAddress = `${street_address}`;
  const cityStateZip = `${city}, ${state} ${zipcode}`;
  const phoneNumber = `(${phone_number.slice(0, 3)}) ${phone_number.slice(
    3,
    6
  )}-${phone_number.slice(6)}`;

  return (
    <table className="table table-borderless">
      <tbody>
        <tr>
          <th scope="row" width={width}>
            Shipping Address
          </th>
          <td>
            <div>{streetAddress}</div>
            <div>{cityStateZip}</div>
          </td>
        </tr>
        <tr>
          <th scope="row" width={width}>
            Contact Info
          </th>
          <td>
            <div>Phone : {phoneNumber}</div>
            <div>Email : {currentUser.email}</div>
          </td>
        </tr>
        <tr>
          <th scope="row" width={width}>
            About Me
          </th>
          <td colSpan="2">
            Hi. My name is {profileName}. My favorite site to shop on is Bester
            Buy because they have everything to compliment my hipster needs! ❤️
          </td>
        </tr>
      </tbody>
    </table>
  );
};

const mapState = ({ isLoggedIn, currentUser }) => ({ isLoggedIn, currentUser });

export default connect(mapState)(AccountTable);
