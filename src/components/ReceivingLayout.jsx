import { Outlet } from "react-router-dom";

const ReceivingLayout = () => {
  return (
    <div className="ReceivingLayout layout">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <a href="">lorem</a>
          </div>
          <div className="col-lg-9">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReceivingLayout;
