import { HashRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { ReceivingLayout } from "./components";
import { Main, MonitoringPage } from "./pages";

const App = () => {
  return (
    <>
      <HashRouter>
        <Routes>

          <Route path="/" element={<Main />} />

          <Route element={<ReceivingLayout />}>
            <Route path="/monitoring" element={<MonitoringPage />} />
          </Route>
          
        </Routes>
        <ToastContainer />
      </HashRouter>
    </>
  );
};

export default App;
