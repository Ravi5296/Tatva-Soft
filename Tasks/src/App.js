import React from "react";
import Home from './Pages/Home';
import About from './Pages/About';
import LoginForm from "./Component/LoginForm";
import FocusInput from "./Component/FocusInput";
import RenderPropsComponent from "./Component/RenderPropsComponent";
import Users from "./Component/Users";
import Post from "./Component/Post";
import CounterHook from "./Component/CounterHook";
import PostDetails from "./Component/PostDetails";
import CompA from "./Component/Contex/CompA";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'home'
    };
  }

  handlePageChange(page) {
    this.setState({ currentPage: page });
  }

  render() {
    const pages = {
      'home': <Home />,
      'about': <About />,
      'login': <LoginForm />,
    };

    const currentPage = pages[this.state.currentPage];

    return (
      <div>
        <button onClick={() => this.handlePageChange('home')}>Home</button>
        <button onClick={() => this.handlePageChange('about')}>About</button>
        <button onClick={() => this.handlePageChange('login')}>Login</button>

        {currentPage}
        <hr></hr>
        {/* <FocusInput /> */}
        {/* <RenderPropsComponent render={() => <h3> I am coming from render props </h3>} /> */}
        {/* <h1>Users List</h1> */}
        {/* <Users /> */}
        {/* <div> */}
          {/* <h1>Create Post</h1> */}
          {/* <Post /> */}
        {/* </div> */}
        {/* <CounterHook /> */}
        {/* <PostDetails/> */}
        <CompA/>
      </div>
    );
  }
}

export default App