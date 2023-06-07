import { Outlet } from "react-router-dom";
import Header from "./Components/Header/Header";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <ToastContainer hideProgressBar={true} autoClose={1500}></ToastContainer>
    </>
  );
};

export default App;