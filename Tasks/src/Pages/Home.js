// import React from 'react';
// import Title from '../Component/Title';
// import Counter from '../Component/Counter';
// import UserList from '../Component/UserList';
// import Hoc from '../Component/HOC';

// class Home extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       title: this.title,
//       description: this.description
//     };
//   }

//   render() {
//     const { title, description } = this.state;
//     const userData = [
//       { id: 1, name: "Alice" },
//       { id: 2, name: "Bob" },
//       { id: 3, name: "Charlie" },
//     ];


//     return (
//       <div>
//         <Title title = 'this is title component 1' description='this is desc 1' />
//         {/* <Title title = 'this is title component 2' description='this is desc 2' /> */}
//         {/* <Title title = 'this is title component 3' description='this is desc 3' /> */}
//         <Counter/>
        
//       </div>
//     );
//   }
// }

// export default Home;


import React, { Component } from "react";
import UserList from '../Component/UserList';
import HOC from "../Component/HOC";

const userData = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 3, name: 'Bob' },
];

const Users = HOC(UserList, { users: userData });

class Home extends Component {
  render() {
    return <Users />;
  }
}

export default Home;


