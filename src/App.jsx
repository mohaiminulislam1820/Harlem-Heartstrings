import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import Header from "./Components/Header/Header";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "./Components/Footer/Footer";
import 'animate.css';
import { useContext } from "react";
import { Contexts } from "./Components/Context/ContextWrapper";


const App = () => {
  const currentLocation = useLocation();
  const path = currentLocation.pathname;
  const { darkMode } = useContext(Contexts);
  return (
    <div data-theme={darkMode?'forest':'light'}>
      {!path.includes('dashboard') && <Header></Header>}
      <Outlet></Outlet>
      {!path.includes('dashboard') && <Footer></Footer>}

      <ToastContainer hideProgressBar={true} autoClose={1500}></ToastContainer>

      <ScrollRestoration></ScrollRestoration>
    </div>
  );
};

export default App;