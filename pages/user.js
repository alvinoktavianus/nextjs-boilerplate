import axios from 'axios'

class User extends React.Component {
  render() {
    const {user} = this.props;

    return <React.Fragment>
      <h1>{`${user.first_name} ${user.last_name}`}</h1>
      <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`}/>
    </React.Fragment>
  }
}

export default User

User.getInitialProps = async function ({query}) {
  const response = await axios.get(`${process.env.BACKEND_ENDPOINT}/api/users/${query.id}`);

  return {
    user: response.data.data,
  };
};