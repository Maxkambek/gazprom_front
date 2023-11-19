/* eslint-disable react/prop-types */
import AdminPage from "../admin/AdminPage";
import BugalterPage from "../bugalter/BugalterPage";
import OtherPage from "../others/OtherPage";
import UserPage from "../user/UserPage";

const Main = ({ userRole }) => {
  const renderComponent = {
    ADMIN: () => <AdminPage />,
    USER: () => <UserPage />,
    BUGALTER: () => <BugalterPage />,
  };

  const ComponentToRender = renderComponent[userRole] || (() => <OtherPage />);

  return <ComponentToRender />;
};

export default Main;
