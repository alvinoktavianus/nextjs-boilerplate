import React from 'react';
import PropTypes from 'prop-types';
import getConfig from 'next/config';
import axios from 'axios';

class User extends React.Component {
  render() {
    const { firstName, lastName, avatar } = this.props;

    return (
      <React.Fragment>
        <h1>{`${firstName} ${lastName}`}</h1>
        <img src={avatar} alt={`${firstName} ${lastName}`} />
      </React.Fragment>
    );
  }
}

export default User;

User.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

User.getInitialProps = async function ({ query }) {
  const { publicRuntimeConfig: { BACKEND_ENDPOINT } } = getConfig();
  const { data: { data } } = await axios.get(`${BACKEND_ENDPOINT}/api/users/${query.id}`);

  return {
    firstName: data.first_name,
    lastName: data.last_name,
    avatar: data.avatar,
  };
};
