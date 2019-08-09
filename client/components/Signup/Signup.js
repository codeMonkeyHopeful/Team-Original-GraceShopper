import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import useForm from './../../hooks/useForm';
import { SIGNUP_FORM, ERROR_MSG } from './styles';
import { loginThunk } from './../../redux';
import stateAbbrevs from './states_abbrevs';
const Signup = props => {
  const { login } = props;

  const onSubmit = (values, setValues) => {
    // axios
    //   .post('/api/users/signup', values)
    //   .then(() => {
    //     login(values.email, values.password1);
    //   })
    //   .catch(e => {
    //     if (e.response.data) {
    //       const errorsResponse = e.response.data.errorsResponse;
    //       if (e.response.data.errorsResponse) {
    //         setValues(vals => ({ ...vals, errors: errorsResponse }));
    //       }
    //     }
    //   });
    console.log(values);
  };

  const [values, setValues, handleChange, handleSubmit] = useForm(onSubmit, {
    email: '',
    password1: '',
    password2: '',
    first_name: '',
    last_name: '',
    phone_number: '',
    state: '',
    street_address: '',
    zipcode: '',

    errors: { email: '', password: '', first_name: '', last_name: '' },
  });

  const renderError = (type, errors = values.errors) => {
    if (errors[type]) {
      return (
        <div className="signup-error">
          <p style={ERROR_MSG}>{errors[type]}</p>
        </div>
      );
    }
  };

  return (
    <div>
      <form style={SIGNUP_FORM}>
        <label htmlFor="email">Email: </label>
        <input
          type="text"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
        {renderError('email')}
        <label htmlFor="password1">Enter a password: </label>
        <input
          type="password"
          name="password1"
          value={values.password1}
          onChange={handleChange}
        />
        <label htmlFor="password2">Confirm password: </label>
        <input
          type="password"
          name="password2"
          value={values.password2}
          onChange={handleChange}
        />
        {renderError('password')}
        <label htmlFor="first_name">First name: </label>
        <input
          type="text"
          name="first_name"
          value={values.first_name}
          onChange={handleChange}
        />
        <label htmlFor="last_name">Last name: </label>
        <input
          type="text"
          name="last_name"
          value={values.last_name}
          onChange={handleChange}
        />
        <label htmlFor="phone_number">Phone Number: </label>
        <input
          type="text"
          name="phone_number"
          value={values.phone_number}
          onChange={handleChange}
        />
        <label htmlFor="street_address">Address: </label>
        <input
          type="text"
          name="street_address"
          value={values.street_address}
          onChange={handleChange}
        />
        <label htmlFor="zipcode">Zipcode: </label>
        <input
          type="text"
          name="zipcode"
          value={values.zipcode}
          onChange={handleChange}
        />
        <label htmlFor="state">State: </label>
        <select name="state" onChange={handleChange}>
          <option value="">--</option>
          {stateAbbrevs.map(state => {
            return (
              <option key={state} value={state}>
                {state}
              </option>
            );
          })}
        </select>
        <button onClick={handleSubmit}>Sign Up!</button>
      </form>
    </div>
  );
};
const mapDispatch = dispatch => ({
  login: (email, pw) => dispatch(loginThunk(email, pw)),
});
export default connect(
  null,
  mapDispatch
)(Signup);
