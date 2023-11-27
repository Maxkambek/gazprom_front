import { HashRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import {
  AccountantLayout,
  NotFound,
  ReceivingLayout,
  SpecialistLayout,
} from "./components";
import {
  AccountantClientListPage,
  AccountantToolsPage,
  ClientHistoryPage,
  ClientListPage,
  Main,
  MonitoringPage,
  SpecialistClientHistory,
  SpecialistCliestListPage,
} from "./pages";

const App = () => {
  const userRole = "ADMIN";
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Main />} />

          {userRole === "RECEIVING" && (
            <>
              {/* RECEIVING */}
              <Route element={<ReceivingLayout />}>
                <Route path="/monitoring" element={<MonitoringPage />} />
                <Route path="/client-list" element={<ClientListPage />} />
                <Route path="/client-history" element={<ClientHistoryPage />} />
              </Route>
              {/* RECEIVING */}
            </>
          )}

          {userRole === "SPECIALIST" && (
            <>
              {/* SPECIALIST */}
              <Route element={<SpecialistLayout />}>
                <Route
                  path="/specialist-client-list"
                  element={<SpecialistCliestListPage />}
                />
                <Route
                  path="/specialist-client-history"
                  element={<SpecialistClientHistory />}
                />
              </Route>
              {/* SPECIALIST */}
            </>
          )}

          {userRole === "ACCOUNTANT" && (
            <>
              {/* ACCOUNTANT */}
              <Route element={<AccountantLayout />}>
                <Route
                  path="/accountant-client-list"
                  element={<AccountantClientListPage />}
                />
                <Route
                  path="/accountant-tools"
                  element={<AccountantToolsPage />}
                />
              </Route>
              {/* ACCOUNTANT */}
            </>
          )}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ToastContainer />
      </HashRouter>
    </>
  );
};

export default App;
