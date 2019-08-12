import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as actions from '@Actions/userActions';

class User extends React.Component {
  static async getInitialProps({ store, query }) {
    store.dispatch(actions.requestInitialPage(query.id));

    // Since we're getting data from saga, we can just return empty object
    // Return something if we want to pass some custom props to the page
    return {};
  }

  render() {
    const {
      firstName, lastName, avatar, emailAddress,
    } = this.props;

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
  const { user } = state.userPage;
  return {
    firstName: user.first_name,
    lastName: user.last_name,
    avatar: user.avatar,
    emailAddress: user.email,
  };
}

export default connect(mapStateToProps)(User);

User.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  emailAddress: PropTypes.string.isRequired,
};
