import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div className="app-container">
      <Outlet />
      <ToastContainer />
    </div>
  );
};

export default App;
