import { Button, ThemeProvider } from '@mui/material';
import Register from './pages/register/Register';
import Theme from './assets/Theme';
import Header from './assets/components/Header';
import SearchBar from './assets/components/SearchBar';
import Footer from './assets/components/Footer';
import Login from './pages/login/Login';
import { useEffect, useState } from 'react';
import ProductCrud from './ProductCrud';

function App() {

  const [currentPage, setCuttentPage] = useState(<Register/>)

  return (
    <ThemeProvider theme={Theme}>
      <Header/>
      <SearchBar/>
      <Register/>
      <Login/>
      {/* {currentPage} */}
      {/* <ProductCrud /> */}
      <Footer/>
      <Button variant="contained" color='secondary'>click me</Button>
    </ThemeProvider>
  );
}

export default App