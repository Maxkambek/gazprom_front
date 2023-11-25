import { DataGrid } from "@material-ui/data-grid";

const EmployeesTable = () => {
  const columns = [
    { field: "id", headerName: "Ф.И.О", width: 400 },
    {
      field: "all",
      headerName: "Всего",
      width: 400,
      editable: true,
    },
    {
      field: "done",
      headerName: "Cделано",
      width: 200,
      editable: true,
    },
    {
      field: "waiting",
      headerName: "B ожидании ",
      width: 200,
      editable: true,
    },
  ];
  const rows = [
    {
      id: "Махкамов Хумойун Давронович",
      all: "100",
      done: "80",
      waiting: "20",
    },
    {
      id: " Махкамов Хумойун Давронович2",
      all: "100",
      done: "80",
      waiting: "20",
    },
    {
      id: " Махкамов Хумойун Давронович3",
      all: "100",
      done: "80",
      waiting: "20",
    },
    {
      id: " Махкамов Хумойун Давронович4",
      all: "100",
      done: "80",
      waiting: "20",
    },
    {
      id: " Махкамов Хумойун Давронович5",
      all: "100",
      done: "80",
      waiting: "20",
    },
    {
      id: " Махкамов Хумойун Давронович6",
      all: "100",
      done: "80",
      waiting: "20",
    },
    {
      id: " Махкамов Хумойун Давронович7",
      all: "100",
      done: "80",
      waiting: "20",
    },
    {
      id: " Махкамов Хумойун Давронович8",
      all: "100",
      done: "80",
      waiting: "20",
    },
    {
      id: " Махкамов Хумойун Давронович9",
      all: "100",
      done: "80",
      waiting: "20",
    },
    {
      id: " Махкамов Хумойун Давронович0",
      all: "100",
      done: "80",
      waiting: "20",
    },
    {
      id: " Махкамов Хумойун Давронович1",
      all: "100",
      done: "80",
      waiting: "20",
    },
  ];

  return (
    <div className="EmployeesTable TableStyle">
      <div className="cards CardStyle">
        <div className="cardsTop">
          <h2>Сотрудники</h2>
          <h3>Показатели сотрудников</h3>
        </div>
        <div className="line"></div>
        <div style={{ height: 380, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            disableSelectionOnClick
          />
        </div>
      </div>
    </div>
  );
};

export default EmployeesTable;
