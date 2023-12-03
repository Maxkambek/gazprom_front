import plus from "@/assets/plus.svg";
import document from "@/assets/document.svg";
// import {DataGrid} from "@material-ui/data-grid";
import axios from "axios";
import { useEffect, useState } from "react";
import { API_PATH } from "@/constants";
import { CONFIG } from "../../../constants";
import { toast } from "react-toastify";
import { Loader } from "@/components/Loader.jsx";

const ClientListPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

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

  const [image, setImage] = useState("");
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [isOrder, setIsOrder] = useState(false);

  const [singleOrder, setSingleOrder] = useState();

  const addClient = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    await axios
      .post(
        API_PATH + "/main/order-create/",
        {
          name_org,
          created_time,
          meter_brand,
          serial_number,
          temp_sensor,

          latest_certificate: latest_certificate === "есть",
          passport_meter: passport_meter === "есть",
          correction_block_passport: correction_block_passport === "есть",
          verification_with_stamp: verification_with_stamp === "есть",
          gaz_pribor_stamp: gaz_pribor_stamp === "есть",
          block_correction_dp: block_correction_dp === "есть",
          dt: dt === "есть",
          dd: dd === "есть",
          er_300000: er_300000 === "есть",
          visual_damage: visual_damage === "есть",
          mechanical_damage: mechanical_damage === "есть",

          conclusion,
          indications,
          counting_mechanism,
          phone,
        },
        CONFIG
      )
      .then((res) => {
        const orderId = res?.data?.id;
        if (
          image.length !== 0 ||
          image1.length !== 0 ||
          image2.length !== 0 ||
          image3.length !== 0
        ) {
          const images = [image, image1, image2, image3];

          for (let i = 0; i < images.length; i++) {
            const formData = new FormData();
            formData.append("file", images[i]);
            formData.append("order", orderId);

            axios
              .post(API_PATH + "/main/order-file-create/", formData)
              .then(() => {
                toast.success("Client created successfully");

                setIsOpen(false);
                setNameOrg("");
                setCreatedTime("");
                setMeterBrand("");
                setSerialNumber("");
                setTemp_sensor("");

                setLatestCertificate("есть");
                setPassportMeter("есть");
                setCorrectionBlockPassport("есть");
                setVerification_with_stamp("есть");
                setGaz_pribor_stamp("есть");
                setBlock_correction_dp("есть");
                setDt("есть");
                setDd("есть");
                setEr_300000("есть");
                setVisual_damage("есть");
                setMechanical_damage("есть");

                setConclusion("");
                setIndications("");
                setCounting_mechanism("");
                setPhone("");

                setImage("");
                setImage1("");
                setImage2("");
                setImage3("");
              })
              .catch(() => {});
          }
          setIsLoading(false);
          getOrders();
        } else {
          toast.success("Client created successfully");

          setIsOpen(false);
          setNameOrg("");
          setCreatedTime("");
          setMeterBrand("");
          setSerialNumber("");
          setTemp_sensor("");

          setLatestCertificate("есть");
          setPassportMeter("есть");
          setCorrectionBlockPassport("есть");
          setVerification_with_stamp("есть");
          setGaz_pribor_stamp("есть");
          setBlock_correction_dp("есть");
          setDt("есть");
          setDd("есть");
          setEr_300000("есть");
          setVisual_damage("есть");
          setMechanical_damage("есть");

          setConclusion("");
          setIndications("");
          setCounting_mechanism("");
          setPhone("");

          setImage("");
          setImage1("");
          setImage2("");
          setImage3("");

          setIsLoading(false);
          getOrders();
        }
      })
      .catch(() => {
        toast.error("Bad request. Please try again");
      });
  };

  const [btn, setBtn] = useState(1);
  const [orders, setOrders] = useState([]);
  const getOrders = async () => {
    setIsOrder(true);
    const { data } = await axios.get(
      API_PATH +
        `/main/orders/${
          btn === 1 ? "" : btn === 2 ? "?today=2" : "?yesterday=3"
        }`
    );
    setOrders(data);
    setIsOrder(false);
  };

  const getSingleOrder = (id) => {
    axios.get(API_PATH + `/main/order/${id}/`).then((res) => {
      setSingleOrder(res.data);
      setIsOpen2(true);
    });
  };

  useEffect(() => {
    getOrders();
  }, [btn]);

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
          <div
            onClick={() => setBtn(1)}
            className={`filterBtn ${btn === 1 ? "active" : ""}`}
          >
            Все
          </div>
          <div
            onClick={() => setBtn(2)}
            className={`filterBtn ${btn === 2 ? "active" : ""}`}
          >
            Сегодня
          </div>
          <div
            onClick={() => setBtn(3)}
            className={`filterBtn ${btn === 3 ? "active" : ""}`}
          >
            Вчера
          </div>
        </div>

        <div className="cards CardStyle">
          <div className="cardsTop">
            <h2>Сотрудники</h2>
            <h3>Показатели сотрудников</h3>
          </div>
          <div className="line"></div>
          <div className="myTable" style={{ height: 400, width: "100%" }}>
            {isOrder ? (
              <Loader />
            ) : (
              <table className="table TableStyle">
                <thead>
                  <tr>
                    <td>№</td>
                    <td>Наименование организации</td>
                    <td>Дата</td>
                    <td>Марка счетчика газа</td>
                    <td>Заводские номера</td>
                    <td>Статус</td>
                  </tr>
                </thead>
                <tbody>
                  {orders &&
                    orders.map((item, index) => (
                      <tr
                        key={item.id}
                        onClick={() => {
                          setIsOpen2(true), getSingleOrder(item.id);
                        }}
                        className=""
                      >
                        <th>{index + 1}</th>
                        <th>{item.name_org}</th>
                        <th>{item.created_time}</th>
                        <th>{item.meter_brand}</th>
                        <th>{item.serial_number}</th>
                        <th
                          className={`status ${
                            item.status === "received"
                              ? "orange"
                              : item.status === "accountant"
                              ? "yellow"
                              : item.status === "end"
                              ? "red"
                              : item.status === "docs"
                              ? "pink"
                              : item.status === "payment"
                              ? "orange"
                              : item.status === "test"
                              ? "test"
                              : "blue"
                          }`}
                        >
                          {item.status === "received"
                            ? "Принимающий"
                            : item.status === "accountant"
                            ? "Бухгалтер"
                            : item.status === "end"
                            ? "B стенд"
                            : item.status === "docs"
                            ? "Documents"
                            : item.status === "payment"
                            ? "Оплата"
                            : item.status === "test"
                            ? "Тест"
                            : "Специалист"}
                        </th>
                      </tr>
                    ))}
                </tbody>
              </table>
            )}

            {/*<DataGrid*/}
            {/*    rows={rows}*/}
            {/*    columns={columns}*/}
            {/*    pageSize={5}*/}
            {/*    rowsPerPageOptions={[5]}*/}
            {/*    disableSelectionOnClick*/}
            {/*/>*/}
          </div>
        </div>
      </div>

      {isOpen && (
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
                <label htmlFor="Марка счетчика газа:">
                  Марка счетчика газа:
                </label>
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
                  Техническое состояние счетчика при поступлении в
                  метрологический центр «GAZ TEXNO PRIBOR» МЧЖ. Наличие пломб:
                  счетный механизм
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

              <div className="row ">
                <div className="col-lg-6">
                  <label className="a text-secondary" htmlFor="Images:">
                    Фото:
                  </label>
                </div>
                <div className="col-lg-6 ">
                  <div className="row">
                    <div className="col-lg-6">
                      <input
                        type="file"
                        id="xisobot"
                        name="xisobot"
                        autoFocus
                        className={`form-control  d-none`}
                        accept="image/png, image/jpg, image/jpeg, image/webp"
                        onChange={(e) => setImage(e.target.files[0])}
                      />
                      <label className="cursor" htmlFor="xisobot">
                        <img src={document} alt="" />
                      </label>

                      {image && (
                        <label className="image ms-2 cursor" htmlFor="xisobot">
                          {image.name}
                        </label>
                      )}
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="file"
                        id="xisobot1"
                        className={`form-control d-none`}
                        accept="image/png, image/jpg, image/jpeg, image/webp"
                        onChange={(e) => setImage1(e.target.files[0])}
                      />
                      <label className="cursor" htmlFor="xisobot1">
                        <img src={document} alt="" />
                      </label>

                      {image1 && (
                        <label className="image ms-2 cursor" htmlFor="xisobot1">
                          {image1.name}
                        </label>
                      )}
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="file"
                        id="xisobot2"
                        className={`form-control  d-none`}
                        accept="image/png, image/jpg, image/jpeg, image/webp"
                        onChange={(e) => setImage2(e.target.files[0])}
                      />
                      <label className="cursor" htmlFor="xisobot2">
                        <img src={document} alt="" />
                      </label>

                      {image2 && (
                        <label className="image ms-2 cursor" htmlFor="xisobot2">
                          {image2.name}
                        </label>
                      )}
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="file"
                        id="xisobot3"
                        className={`form-control  d-none`}
                        accept="image/png, image/jpg, image/jpeg, image/webp"
                        onChange={(e) => setImage3(e.target.files[0])}
                      />
                      <label className="cursor" htmlFor="xisobot3">
                        <img src={document} alt="" />
                      </label>

                      {image3 && (
                        <label className="image ms-2 cursor" htmlFor="xisobot3">
                          {image3.name}
                        </label>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="modalFooter">
              <button
                disabled={isLoading}
                type="submit"
                className="btn myBtn d-block w-100"
              >
                {isLoading && (
                  <i className="spinner-border spinner-border-sm text-white text-dark me-2"></i>
                )}
                <span>
                  <img src={plus} alt="" />
                </span>
                Добавить клиент
              </button>
            </div>
          </form>
          <div onClick={() => setIsOpen(false)} className="close"></div>
        </div>
      )}

      {isOpen2 && (
        <div className={`myModal ModalStyle ${isOpen2 && "active"}`}>
          <form onSubmit={addClient} className="AddClientModal zed">
            <div className="modalTop">
              <h1>Изменить клиент</h1>
            </div>
            <div className="modalBody">
              <div className="formWrap">
                <label htmlFor="Наименование организации:">
                  Наименование организации:
                </label>
                <input
                  required
                  value={singleOrder?.name_org}
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
                  value={singleOrder?.created_time}
                  onChange={(e) => setCreatedTime(e.target.value)}
                  id="Дата"
                  type="text"
                  disabled
                  className="form-control"
                />
              </div>
              <div className="formWrap">
                <label htmlFor="Статус">Статус</label>
                <input
                  value={singleOrder?.status}
                  disabled
                  type="text"
                  id="Статус"
                  className="form-control"
                />
              </div>

              <div className="formWrap">
                <label htmlFor="Марка счетчика газа:">
                  Марка счетчика газа:
                </label>
                <input
                  required
                  value={singleOrder?.meter_brand}
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
                  value={singleOrder?.serial_number}
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
                  value={singleOrder?.temp_sensor}
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
                  Техническое состояние счетчика при поступлении в
                  метрологический центр «GAZ TEXNO PRIBOR» МЧЖ. Наличие пломб:
                  счетный механизм
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
                  value={singleOrder?.conclusion}
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
                  value={singleOrder?.indications}
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
                  value={singleOrder?.counting_mechanism}
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
                  value={singleOrder?.phone}
                  onChange={(e) => setPhone(e.target.value)}
                  type="text"
                  id="Номер телефона"
                  className="form-control"
                />
              </div>

              <div className="row ">
                <div className="col-lg-6">
                  <label className="a text-secondary" htmlFor="Images:">
                    Фото:
                  </label>
                </div>
                <div className="col-lg-6 ">
                  <div className="row">
                    <div className="col-lg-6">
                      <input
                        type="file"
                        id="xisobot"
                        name="xisobot"
                        autoFocus
                        className={`form-control  d-none`}
                        accept="image/png, image/jpg, image/jpeg, image/webp"
                        onChange={(e) => setImage(e.target.files[0])}
                      />
                      <label className="cursor" htmlFor="xisobot">
                        <img src={document} alt="" />
                      </label>

                      {image && (
                        <label className="image ms-2 cursor" htmlFor="xisobot">
                          {image.name}
                        </label>
                      )}
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="file"
                        id="xisobot1"
                        className={`form-control d-none`}
                        accept="image/png, image/jpg, image/jpeg, image/webp"
                        onChange={(e) => setImage1(e.target.files[0])}
                      />
                      <label className="cursor" htmlFor="xisobot1">
                        <img src={document} alt="" />
                      </label>

                      {image1 && (
                        <label className="image ms-2 cursor" htmlFor="xisobot1">
                          {image1.name}
                        </label>
                      )}
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="file"
                        id="xisobot2"
                        className={`form-control  d-none`}
                        accept="image/png, image/jpg, image/jpeg, image/webp"
                        onChange={(e) => setImage2(e.target.files[0])}
                      />
                      <label className="cursor" htmlFor="xisobot2">
                        <img src={document} alt="" />
                      </label>

                      {image2 && (
                        <label className="image ms-2 cursor" htmlFor="xisobot2">
                          {image2.name}
                        </label>
                      )}
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="file"
                        id="xisobot3"
                        className={`form-control  d-none`}
                        accept="image/png, image/jpg, image/jpeg, image/webp"
                        onChange={(e) => setImage3(e.target.files[0])}
                      />
                      <label className="cursor" htmlFor="xisobot3">
                        <img src={document} alt="" />
                      </label>

                      {image3 && (
                        <label className="image ms-2 cursor" htmlFor="xisobot3">
                          {image3.name}
                        </label>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="modalFooter">
              <button
                disabled={isLoading}
                type="submit"
                className="btn myBtn d-block w-100"
              >
                {isLoading && (
                  <i className="spinner-border spinner-border-sm text-white text-dark me-2"></i>
                )}
               
                Изменить клиент
              </button>
            </div>
          </form>
          <div onClick={() => setIsOpen2(false)} className="close"></div>
        </div>
      )}
    </>
  );
};

export default ClientListPage;
