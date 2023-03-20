import { Button, ThemeProvider } from '@mui/material';
import Theme from './assets/Theme';
import Header from './assets/components/Header';
import Footer from './assets/components/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from "react-router-dom";
import PageNavigation from './assets/PageNavigation';
import ProductPage from './pages/Product Page/ProductPage';

function App() {


  return (
    <ThemeProvider theme={Theme}>
      <BrowserRouter>
        <Header />
          {/* <PageNavigation/> */}
          <ProductPage/>
        <Footer />
        <ToastContainer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App