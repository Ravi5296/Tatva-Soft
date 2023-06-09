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
import CompA from "./Component/UseReducerWithContext/CompA";
import Counter from "./Component/UseReducer/Counter";
import CompC from "./Component/UseReducerWithContext/CompC";
import CompB from "./Component/UseReducerWithContext/CompB";
import { useReducer } from "react";
import FetchDataWithState from "./Component/UseReducer/FetchDataWithState";
import FetctDataWithReducer from "./Component/UseReducer/FetctDataWithReducer";
import RegisterUser from "./Component/RegisterUser";
import PatentComp from "./Component/PerformanceOptimizationHooks/CallBackHook/PatentComp";
import CounterMemo from "./Component/PerformanceOptimizationHooks/UseMemo/CounterMemo";
import FocusInputHook from "./Component/UseRefHook/FocusInputHook";
import DocTitle from "./Component/CustomHooks/DocTitle";
import DocTitle2 from "./Component/CustomHooks/DocTitle2";
import MyForm from "./Component/MyForm";
import Calculator from "./Component/Day-21Cal";

export const CountContext = React.createContext()


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
        {/* <button onClick={() => this.handlePageChange('home')}>Home</button>
        <button onClick={() => this.handlePageChange('about')}>About</button>
        <button onClick={() => this.handlePageChange('login')}>Login</button> */}

        {/* {currentPage} */}
        {/* <hr></hr> */}
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
        {/* <CompA/> */}
        {/* <Counter/> */}
        {/* <FetchDataWithState/> */}
        {/* <FetctDataWithReducer/> */}
        {/* <RegisterUser/> */}
        {/* <PatentComp/> */}
        {/* <CounterMemo/> */}
        {/* <FocusInputHook/> */}
        {/* <DocTitle/> */}
        {/* <DocTitle2/> */}
        {/* <MyForm/> */}
        <Calculator/>
      </div>
    );
  }
}

export default App

// const initialState = 0;
// const reducer = (state, action) => {
//   switch (action) {
//     case 'increment':
//       return state + 1
//     case 'Decrement':
//       return state - 1
//     case 'reset':
//       return initialState
//     default:
//       return state
//   }
// }

// // /* use reducer with contex */
// function App() {
//   const [count, dispatch] = useReducer(reducer, initialState)
//   return (
//     <CountContext.Provider
//       value={{countState: count, countDispatch: dispatch}} >
//       <div>
//         count - {count}
//         <CompA />
//         <CompB />
//         <CompC />
//       </div>
//     </CountContext.Provider>
//   )
// }

// export default App