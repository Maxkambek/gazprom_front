import { Link, Outlet, useLocation } from "react-router-dom";
import logo from "@/assets/logo.svg";
import MonitoringNavbar from "../pages/RECEIVING/monitoring/components/MonitoringNavbar";

const IncpectorsLayout = () => {
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
              location.pathname === "/inspector_1" && "active"
            }`}
            to="/inspector_1"
          >
            <span className="icon icon-list"></span>Список клиентов
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

export default IncpectorsLayout;
