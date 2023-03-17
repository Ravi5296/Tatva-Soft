import React from "react";
import Home from './Pages/Home';
import About from './Pages/About';
import LoginForm from "./Component/LoginForm";
import FocusInput from "./Component/FocusInput";

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
        <FocusInput/>
        {/* <Home/> */}
      </div>
    );
  }
}

export default App