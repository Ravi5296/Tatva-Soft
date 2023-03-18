import React from 'react';
import axios from 'axios';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      userId: ''
    };
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = event => {
    event.preventDefault();
    const { title, body, userId } = this.state;
    axios.post('https://jsonplaceholder.typicode.com/posts', {
      title,
      body,
      userId
    })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { title, body, userId } = this.state;
    return (
      <div>
        <h2>Create Post</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Title:</label>
            <input type="text" name="title" value={title} onChange={this.handleInputChange} />
          </div>
          <div>
            <label>Body:</label>
            <textarea name="body" value={body} onChange={this.handleInputChange}></textarea>
          </div>
          <div>
            <label>User ID:</label>
            <input type="number" name="userId" value={userId} onChange={this.handleInputChange} />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Post;
