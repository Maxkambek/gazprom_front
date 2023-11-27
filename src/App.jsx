import { HashRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { ReceivingLayout, SpecialistLayout } from "./components";
import {
  ClientHistoryPage,
  ClientListPage,
  Main,
  MonitoringPage,
  SpecialistClientHistory,
  SpecialistCliestListPage,
} from "./pages";

const App = () => {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          
          {/* RECEIVING */}
          <Route element={<ReceivingLayout />}>
            <Route path="/monitoring" element={<MonitoringPage />} />
            <Route path="/client-list" element={<ClientListPage />} />
            <Route path="/client-history" element={<ClientHistoryPage />} />
          </Route>
          {/* RECEIVING */}


          {/* SPECIALIST */}
          <Route element={<SpecialistLayout />}>
            <Route path="/specialist-client-list" element={<SpecialistCliestListPage />} />
            <Route path="/specialist-client-history" element={<SpecialistClientHistory />} />
          </Route>
          {/* SPECIALIST */}
          
        </Routes>
        <ToastContainer />
      </HashRouter>
    </>
  );
};

export default App;
