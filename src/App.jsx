import { HashRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Main from "./pages/main/Main";

const App = () => {
  const userRole = "ADMIN"; 
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Main userRole={userRole} />} />
        </Routes>
        <ToastContainer />
      </HashRouter>
    </>
  );
};

export default App;
