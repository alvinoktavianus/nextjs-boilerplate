import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { connect } from 'react-redux';

import CustomHeader from '@Components/CustomHeader';

import * as actions from '@Actions/homeActions';

class Home extends React.Component {
  static async getInitialProps({ store }) {
    store.dispatch(actions.initPageRequest());

    // Since we're getting data from saga, we can just return empty object
    // Return something if we want to pass some custom props to the page
    return {};
  }

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
          {users.map((usr, idx) => Home.renderUser(idx, usr))}
        </ol>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  const { users } = state.homePage;
  return { users };
}

export default connect(mapStateToProps)(Home);

Home.propTypes = {
  users: PropTypes.array.isRequired,
};
