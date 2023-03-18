import React from 'react';
import axios from 'axios';
import UserDetail from './UserDetail';


class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        this.setState({ users: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        {this.state.users.map(user => (
          <UserDetail key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

export default Users;
