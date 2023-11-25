import { HashRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { ReceivingLayout } from "./components";
import {
  ClientHistoryPage,
  ClientListPage,
  Main,
  MonitoringPage,
} from "./pages";

const App = () => {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Main />} />

          <Route element={<ReceivingLayout />}>
            <Route path="/monitoring" element={<MonitoringPage />} />
            <Route path="/client-list" element={<ClientListPage />} />
            <Route path="/client-history" element={<ClientHistoryPage />} />
          </Route>
        </Routes>
        <ToastContainer />
      </HashRouter>
    </>
  );
};

export default App;
