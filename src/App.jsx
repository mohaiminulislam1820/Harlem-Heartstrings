import { Outlet, useLocation } from "react-router-dom";
import Header from "./Components/Header/Header";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "./Components/Footer/Footer";


const App = () => {
  const currentLocation=useLocation();
  const path=currentLocation.pathname;
  return (
    <>
      {!path.includes('dashboard') &&<Header></Header>}
      <Outlet></Outlet>
      <Footer></Footer>
      
      <ToastContainer hideProgressBar={true} autoClose={1500}></ToastContainer>
    </>
  );
};

export default App;