import { Link, Outlet, useLocation } from "react-router-dom";
import logo from "@/assets/logo.svg";
import MonitoringNavbar from "../pages/RECEIVING/monitoring/components/MonitoringNavbar";

const SpecialistLayout = () => {
  const location = useLocation();
  return (
    <div className="ReceivingLayout LayoutStyle">
      <div className="row">
        <div className="col-lg-2 left">
          <Link to="/" className="logo">
            <img src={logo} alt="" />
          </Link>
          <Link
            className={`link ${
              location.pathname === "/specialist-client-list" && "active"
            }`}
            to="/specialist-client-list"
          >
            <span className="icon icon-list"></span>Список клиентов
          </Link>
          <Link
            className={`link ${
              location.pathname === "/specialist-client-history" && "active"
            }`}
            to="/specialist-client-history"
          >
            <span className="icon icon-history"></span>История клиентов
          </Link>
        </div>
        <div className="col-lg-10 right">
          <MonitoringNavbar />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default SpecialistLayout;
