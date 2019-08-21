import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

import * as commonActions from '@Actions/commonActions';
import * as actions from '@Actions/userActions';

export const USER_FORM_NAME = 'userForm';

class User extends React.Component {
  static async getInitialProps({ store, query, isServer }) {
    store.dispatch(actions.requestInitialPage(query.id));

    if (!isServer) {
      store.dispatch(commonActions.setLoadingPage(true));
    }

    // Since we're getting data from saga, we can just return empty object
    // Return something if we want to pass some custom props to the page
    return {};
  }

  render() {
    const {
      firstName, lastName, avatar, showLoadingPage,
    } = this.props;

    if (showLoadingPage) {
      return (
        <React.Fragment>
          <h3>Loading...</h3>
        </React.Fragment>
      );
    }

    return (
      <React.Fragment>
        <form>
          <h1>{`${firstName} ${lastName}`}</h1>
          <Field
            component="input"
            type="email"
            name="emailAddress"
          />
          <br />
          <img src={avatar} alt={`${firstName} ${lastName}`} />
        </form>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  const { userPage: { user }, common: { showLoadingPage } } = state;
  return {
    firstName: user.first_name,
    lastName: user.last_name,
    avatar: user.avatar,
    emailAddress: user.email,
    showLoadingPage,
  };
}

const mapForm = {
  form: USER_FORM_NAME,
};

export default connect(mapStateToProps)(reduxForm(mapForm)(User));

User.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  avatar: PropTypes.string,
  showLoadingPage: PropTypes.bool,
};
