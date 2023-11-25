import { DataGrid } from "@material-ui/data-grid";

const EmployeesTable = () => {
  const columns = [
    { field: "id", headerName: "Ф.И.О", width: 400 },
    {
      field: "all",
      headerName: "Всего",
      width: 150,
      editable: true,
    },
    {
      field: "done",
      headerName: "Cделано",
      width: 150,
      editable: true,
    },
    {
      field: "waiting",
      headerName: "B ожидании ",
      width: 150,
      editable: true,
    },
  ];
  const rows = [
    {
      id: "Махкамов Хумойун Давронович",
      all: "",
      done: "Snow",
      waiting: "Jon",
    },
  ];

  return (
    <div className="EmployeesTable TableStyle">
      <div className="cards">
        <div style={{ height: 500, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            disableSelectionOnClick
          />
        </div>
      </div>
    </div>
  );
};

export default EmployeesTable;
