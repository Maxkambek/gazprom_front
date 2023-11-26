import plus from "@/assets/plus.svg";
import { DataGrid } from "@material-ui/data-grid";
import AddClientModal from "./components/AddClientModal";
import { useState } from "react";

const ClientListPage = () => {
  const columns = [
    { field: "id", headerName: "№", width: 50 },
    {
      field: "organization",
      headerName: "Наименование организации",
      width: 400,
    },
    {
      field: "data",
      headerName: "Дата",
      width: 150,
    },
    {
      field: "mark",
      headerName: "Марка счетчика газа",
      width: 200,
    },
    {
      field: "number",
      headerName: "Заводские номера",
      width: 200,
    },
    {
      field: "status",
      headerName: "Статус",
      width: 200,
    },
  ];
  const rows = [
    {
      id: "1",
      organization: "Янги хайот тумани 329-мактаб",
      data: "01.11.2023 16:56",
      mark: "Ultramag G-100 № 01912",
      number: "№ 466863",
      status: "Специалист",
    },
    {
      id: "2",
      organization: "Янги хайот тумани 329-мактаб",
      data: "01.11.2023 16:56",
      mark: "Ultramag G-100 № 01912",
      number: "№ 466863",
      status: "Специалист",
    },
    {
      id: "3",
      organization: "Янги хайот тумани 329-мактаб",
      data: "01.11.2023 16:56",
      mark: "Ultramag G-100 № 01912",
      number: "№ 466863",
      status: "Специалист",
    },
    {
      id: "4",
      organization: "Янги хайот тумани 329-мактаб",
      data: "01.11.2023 16:56",
      mark: "Ultramag G-100 № 01912",
      number: "№ 466863",
      status: "Специалист",
    },
    {
      id: "5",
      organization: "Янги хайот тумани 329-мактаб",
      data: "01.11.2023 16:56",
      mark: "Ultramag G-100 № 01912",
      number: "№ 466863",
      status: "Специалист",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="ClientListPage RightStyle">
        <div className="btnWrap">
          <h1>Список клиентов</h1>
          <button onClick={() => setIsOpen(true)} className="btn myBtn">
            <span>
              <img src={plus} alt="" />
            </span>
            Добавить клиент
          </button>
        </div>

        <div className="filterWrap FilterStyle">
          <div className="filterBtn">Все</div>
          <div className="filterBtn active">Сегодня (100)</div>
          <div className="filterBtn">Вчера</div>
        </div>

        <div className="cards CardStyle">
          <div className="cardsTop">
            <h2>Сотрудники</h2>
            <h3>Показатели сотрудников</h3>
          </div>
          <div className="line"></div>
          <div className="myTable" style={{ height: 400, width: "100%" }}>
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
      <div className={`myModal ModalStyle ${isOpen && "active"}`}>
        <AddClientModal />
        <div onClick={() => setIsOpen(false)} className="close"></div>
      </div>
    </>
  );
};

export default ClientListPage;
