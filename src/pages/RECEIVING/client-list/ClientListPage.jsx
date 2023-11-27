import plus from "@/assets/plus.svg";
import { DataGrid } from "@material-ui/data-grid";
import axios from "axios";
import { useState } from "react";
import { API_PATH } from "@/constants";
import { CONFIG } from "../../../constants";

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

  const [name_org, setNameOrg] = useState("");
  const [created_time, setCreatedTime] = useState("");
  const [meter_brand, setMeterBrand] = useState("");
  const [serial_number, setSerialNumber] = useState("");
  const [temp_sensor, setTemp_sensor] = useState("");

  const [latest_certificate, setLatestCertificate] = useState("есть");
  const [passport_meter, setPassportMeter] = useState("есть");
  const [correction_block_passport, setCorrectionBlockPassport] =
    useState("есть");
  const [verification_with_stamp, setVerification_with_stamp] =
    useState("есть");
  const [gaz_pribor_stamp, setGaz_pribor_stamp] = useState("есть");
  const [block_correction_dp, setBlock_correction_dp] = useState("есть");
  const [dt, setDt] = useState("есть");
  const [dd, setDd] = useState("есть");
  const [er_300000, setEr_300000] = useState("есть");
  const [visual_damage, setVisual_damage] = useState("есть");
  const [mechanical_damage, setMechanical_damage] = useState("есть");

  const [conclusion, setConclusion] = useState("");
  const [indications, setIndications] = useState("");
  const [counting_mechanism, setCounting_mechanism] = useState("");
  const [phone, setPhone] = useState("");

  const addClient = async (e) => {
    e.preventDefault();

    await axios
      .post(
        API_PATH + "/main/order-create/",
        {
          name_org,
          created_time,
          meter_brand,
          serial_number,
          temp_sensor,
          latest_certificate,
          passport_meter,
          correction_block_passport,
          verification_with_stamp,
          gaz_pribor_stamp,
          block_correction_dp,
          dt,
          dd,
          er_300000,
          visual_damage,
          mechanical_damage,
          conclusion,
          indications,
          counting_mechanism,
          phone,
        },
        CONFIG
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
        <form onSubmit={addClient} className="AddClientModal zed">
          <div className="modalTop">
            <h1>Добавить клиент</h1>
          </div>
          <div className="modalBody">
            <div className="formWrap">
              <label htmlFor="Наименование организации:">
                Наименование организации:
              </label>
              <input
                required
                value={name_org}
                onChange={(e) => setNameOrg(e.target.value)}
                type="text"
                id="Наименование организации:"
                className="form-control"
              />
            </div>
            <div className="formWrap">
              <label htmlFor="Дата">Дата</label>
              <input
                required
                value={created_time}
                onChange={(e) => setCreatedTime(e.target.value)}
                id="Дата"
                type="datetime-local"
                className="form-control"
              />
            </div>
            <div className="formWrap">
              <label htmlFor="Статус">Статус</label>
              <input
                value={"Бухгалтер"}
                disabled
                type="text"
                id="Статус"
                className="form-control"
              />
            </div>

            <div className="formWrap">
              <label htmlFor="Марка счетчика газа:">Марка счетчика газа:</label>
              <input
                required
                value={meter_brand}
                onChange={(e) => setMeterBrand(e.target.value)}
                type="text"
                id="Марка счетчика газа:"
                className="form-control"
              />
            </div>

            <div className="formWrap">
              <label htmlFor="Заводские номера: датчик давления:">
                Заводские номера: датчик давления:
              </label>
              <input
                required
                value={serial_number}
                onChange={(e) => setSerialNumber(e.target.value)}
                type="text"
                id="Заводские номера: датчик давления:"
                className="form-control"
              />
            </div>

            <div className="formWrap">
              <label htmlFor="датчик температуры:">Датчик температуры:</label>
              <input
                required
                value={temp_sensor}
                onChange={(e) => setTemp_sensor(e.target.value)}
                type="text"
                id="датчик температуры:"
                className="form-control"
              />
            </div>

            <div className="formWrap">
              <label htmlFor="Сертификат последней поверки:">
                Сертификат последней поверки:
              </label>
              <select
                onChange={(e) => setLatestCertificate(e.target.value)}
                id="Сертификат последней поверки:"
                className="form-control"
              >
                <option value="есть">есть</option>
                <option value="нет">нет</option>
              </select>
            </div>

            <div className="formWrap">
              <label htmlFor="Паспорта газового счетчика:">
                Паспорта газового счетчика:
              </label>
              <select
                onChange={(e) => setPassportMeter(e.target.value)}
                id="Паспорта газового счетчика:"
                className="form-control"
              >
                <option value="есть">есть</option>
                <option value="нет">нет</option>
              </select>
            </div>

            <div className="formWrap">
              <label htmlFor="Паспорт блока коррекции:">
                Паспорт блока коррекции:
              </label>
              <select
                onChange={(e) => setCorrectionBlockPassport(e.target.value)}
                id="Паспорт блока коррекции:"
                className="form-control"
              >
                <option value="есть">есть</option>
                <option value="нет">нет</option>
              </select>
            </div>

            <div className="formWrap">
              <label
                htmlFor="Акт (Рай.газ, гор.газ, обл.газ) о снятии счетчик газа на гос. поверку с показаниями
счетчика, печатью или штампом:"
              >
                Акт (Рай.газ, гор.газ, обл.газ) о снятии счетчик газа на гос.
                поверку с показаниями счетчика, печатью или штампом:
              </label>
              <select
                onChange={(e) => setVerification_with_stamp(e.target.value)}
                id="Акт (Рай.газ, гор.газ, обл.газ) о снятии счетчик газа на гос. поверку с показаниями
счетчика, печатью или штампом:"
                className="form-control"
              >
                <option value="есть">есть</option>
                <option value="нет">нет</option>
              </select>
            </div>

            <div className="formWrap">
              <label
                htmlFor="Техническое состояние счетчика при поступлении в метрологический центр «GAZ TEXNO PRIBOR» МЧЖ.
Наличие пломб: счетный механизм"
              >
                Техническое состояние счетчика при поступлении в метрологический
                центр «GAZ TEXNO PRIBOR» МЧЖ. Наличие пломб: счетный механизм
              </label>
              <select
                id="Техническое состояние счетчика при поступлении в метрологический центр «GAZ TEXNO PRIBOR» МЧЖ.
Наличие пломб: счетный механизм"
                className="form-control"
                onChange={(e) => setGaz_pribor_stamp(e.target.value)}
              >
                <option value="есть">есть</option>
                <option value="нет">нет</option>
              </select>
            </div>

            <div className="formWrap">
              <label htmlFor="блок коррекции ДР">блок коррекции ДР</label>
              <select
                onChange={(e) => setBlock_correction_dp(e.target.value)}
                id="блок коррекции ДР"
                className="form-control"
              >
                <option value="есть">есть</option>
                <option value="нет">нет</option>
              </select>
            </div>

            <div className="formWrap">
              <label htmlFor="ДТ">ДТ</label>
              <select
                onChange={(e) => setDt(e.target.value)}
                id="ДТ"
                className="form-control"
              >
                <option value="есть">есть</option>
                <option value="нет">нет</option>
              </select>
            </div>

            <div className="formWrap">
              <label htmlFor="ДД">ДД</label>
              <select
                onChange={(e) => setDd(e.target.value)}
                id="ДД"
                className="form-control"
              >
                <option value="есть">есть</option>
                <option value="нет">нет</option>
              </select>
            </div>

            <div className="formWrap">
              <label
                htmlFor="Er 3000000
Внештатные ситуации:"
              >
                Er 3000000 Внештатные ситуации:
              </label>
              <select
                id="Er 3000000
Внештатные ситуации:"
                className="form-control"
                onChange={(e) => setEr_300000(e.target.value)}
              >
                <option value="есть">есть</option>
                <option value="нет">нет</option>
              </select>
            </div>

            <div className="formWrap">
              <label htmlFor="Визуальные повреждения:">
                Визуальные повреждения:
              </label>
              <select
                onChange={(e) => setVisual_damage(e.target.value)}
                id="Визуальные повреждения:"
                className="form-control"
              >
                <option value="есть">есть</option>
                <option value="нет">нет</option>
              </select>
            </div>

            <div className="formWrap">
              <label htmlFor="Механические повреждения:">
                Механические повреждения:
              </label>
              <select
                onChange={(e) => setMechanical_damage(e.target.value)}
                id="Механические повреждения:"
                className="form-control"
              >
                <option value="есть">есть</option>
                <option value="нет">нет</option>
              </select>
            </div>

            <div className="formWrap">
              <label htmlFor="Заключения:">Заключения:</label>
              <input
                required
                value={conclusion}
                onChange={(e) => setConclusion(e.target.value)}
                type="text"
                id="Заключения:"
                className="form-control"
              />
            </div>

            <div className="formWrap">
              <label htmlFor="Показания:">Показания:</label>
              <input
                required
                value={indications}
                onChange={(e) => setIndications(e.target.value)}
                type="text"
                id="Показания:"
                className="form-control"
              />
            </div>

            <div className="formWrap">
              <label htmlFor="Счетного механизма:">Счетного механизма:</label>
              <input
                required
                value={counting_mechanism}
                onChange={(e) => setCounting_mechanism(e.target.value)}
                type="text"
                id="Счетного механизма:"
                className="form-control"
              />
            </div>

            <div className="formWrap">
              <label htmlFor="Номер телефона">Номер телефона</label>
              <input
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="text"
                id="Номер телефона"
                className="form-control"
              />
            </div>
          </div>

          <div className="modalFooter">
            <button type="submit" className="btn myBtn d-block w-100">
              <span>
                <img src={plus} alt="" />
              </span>
              Добавить клиент
            </button>
          </div>
        </form>
        <div onClick={() => setIsOpen(false)} className="close"></div>
      </div>
    </>
  );
};

export default ClientListPage;
