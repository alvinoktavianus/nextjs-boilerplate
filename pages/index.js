import axios from 'axios'
import Link from 'next/link'

class Index extends React.Component {
  renderUser(idx, user) {
    return <li key={idx}>
      <Link href={`/user?id=${user.id}`} as={`/user/${user.id}`}>
        <a>{`${user.first_name} ${user.last_name}`}</a>
      </Link>
    </li>
  }

  render() {
    const {users} = this.props;

    return <React.Fragment>
      <h1>{`List of users`}</h1>
      <ol>
        {users.map((usr, idx) => this.renderUser(idx, usr))}
      </ol>
    </React.Fragment>
  }
}

export default Index

Index.getInitialProps = async function () {
  const response = await axios.get(`${process.env.BACKEND_ENDPOINT}/api/users?per_page=10`);

  return {
    users: response.data.data
  };
};