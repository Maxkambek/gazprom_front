import EmploeesTable from "./components/EmployeesTable";
import MonitoringNavbar from "./components/MonitoringNavbar";
import Statistics from "./components/Statistics";

const MonitoringPage = () => {
  return (
    <>
      <MonitoringNavbar />
      <div className="MonitoringPage">
        <Statistics />
        <EmploeesTable />
      </div>
    </>
  );
};

export default MonitoringPage;
