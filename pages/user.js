import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as commonActions from '@Actions/commonActions';
import * as actions from '@Actions/userActions';

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
      firstName, lastName, avatar, emailAddress, showLoadingPage,
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
        <h1>{`${firstName} ${lastName}`}</h1>
        <h4>{emailAddress}</h4>
        <img src={avatar} alt={`${firstName} ${lastName}`} />
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

export default connect(mapStateToProps)(User);

User.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  avatar: PropTypes.string,
  emailAddress: PropTypes.string,
  showLoadingPage: PropTypes.bool,
};
