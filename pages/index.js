import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import getConfig from 'next/config';
import Link from 'next/link';

import CustomHeader from 'components/CustomHeader';

class Index extends React.Component {
  static renderUser(idx, user) {
    return (
      <li key={idx}>
        <Link href={`/user?id=${user.id}`} as={`/user/${user.id}`}>
          <a>{`${user.first_name} ${user.last_name}`}</a>
        </Link>
      </li>
    );
  }

  render() {
    const { users } = this.props;

    return (
      <React.Fragment>
        <CustomHeader
          title="List of users"
          subtitle="Showing list of users based from sample API"
        />
        <ol>
          {users.map((usr, idx) => Index.renderUser(idx, usr))}
        </ol>
      </React.Fragment>
    );
  }
}

export default Index;

Index.propTypes = {
  users: PropTypes.array.isRequired,
};

Index.getInitialProps = async function () {
  const { publicRuntimeConfig: { BACKEND_ENDPOINT } } = getConfig();
  const response = await axios.get(`${BACKEND_ENDPOINT}/api/users?per_page=10`);

  return {
    users: response.data.data,
  };
};
