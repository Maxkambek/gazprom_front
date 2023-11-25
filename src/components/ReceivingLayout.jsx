import { Link, Outlet, useLocation } from "react-router-dom";
import logo from "@/assets/logo.svg";

const ReceivingLayout = () => {
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
              location.pathname === "/monitoring" && "active"
            }`}
            to="/monitoring"
          >
            <span className="icon icon-monitoring"></span>Мониторинг
          </Link>
          <Link
            className={`link ${
              location.pathname === "/client-list" && "active"
            }`}
            to="/client-list"
          >
            <span className="icon icon-list"></span>Список клиентов
          </Link>
          <Link
            className={`link ${
              location.pathname === "/client-history" && "active"
            }`}
            to="/client-history"
          >
            <span className="icon icon-history"></span>История клиентов
          </Link>
        </div>
        <div className="col-lg-10 right">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ReceivingLayout;
