import axios from "axios";
import { useEffect, useState } from "react";
import { API_PATH } from "@/constants";

const ClientHistoryPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [orders, setOrders] = useState([]);
  const [order, setOrder] = useState({});

  const getOrders = async () => {
    const { data } = await axios(API_PATH + `/main/orders-history/`);
    setOrders(data);
  };

  useEffect(() => {
    getOrders();
  }, []);

  const getOrder = (item) => {
    setOrder(item);
  };

  return (
    <>
      <div className="SpecialistCliestListPage RightStyle">
        <h1>Список клиентов</h1>
        {orders.length === 0 ? (
          <h5 className="text-center py-5">Not enough data</h5>
        ) : (
          <>
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
                  orders.map((item) => (
                    <tr
                      key={item.id}
                      onClick={() => {
                        setIsOpen(true), getOrder(item);
                      }}
                      className=""
                    >
                      <th>{item.id}</th>
                      <th>{item.name_org}</th>
                      <th>{item.created_time}</th>
                      <th>{item.meter_brand}</th>
                      <th>{item.serial_number}</th>
                      <th
                        className={`status ${
                          item.is_paid ? "status-green" : "status-red"
                        }`}
                      >
                        {item.is_paid ? "Оплаченно" : "Не оплачено"}
                      </th>
                    </tr>
                  ))}
              </tbody>
            </table>
          </>
        )}
      </div>

      <div className={`ModalStyle ${isOpen && "active"}`}>
        <div key={order.id} className="ClientModal zed">
          <div className="modalTop">
            <h1>Данные клиента</h1>
          </div>
          <div className="modalBody">
            <div className="formWrap">
              <label htmlFor="Наименование организации:">
                Наименование организации:
              </label>
              <input
                disabled
                type="text"
                value={order.name_org}
                id="Наименование организации:"
                className="form-control"
              />
            </div>
            <div className="formWrap">
              <label htmlFor="Дата">Дата</label>
              <input
                value={order.created_time}
                disabled
                id="Дата"
                type="text"
                className="form-control"
              />
            </div>
            <div className="formWrap">
              <label htmlFor="Статус">Статус</label>
              <input
                value={order.status}
                disabled
                type="text"
                id="Статус"
                className="form-control"
              />
            </div>

            <div className="formWrap">
              <label htmlFor="Марка счетчика газа:">Марка счетчика газа:</label>
              <input
                value={order.meter_brand}
                disabled
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
                value={order.serial_number}
                disabled
                type="text"
                id="Заводские номера: датчик давления:"
                className="form-control"
              />
            </div>

            <div className="formWrap">
              <label htmlFor="датчик температуры:">Датчик температуры:</label>
              <input
                value={order.temp_sensor}
                disabled
                type="text"
                id="датчик температуры:"
                className="form-control"
              />
            </div>

            <div className="formWrap">
              <label htmlFor="Сертификат последней поверки:">
                Сертификат последней поверки:
              </label>
              <input
                value={order.latest_certificate ? "Есть" : "Нет"}
                disabled
                type="text"
                id="Сертификат последней поверки:"
                className="form-control"
              />
            </div>

            <div className="formWrap">
              <label htmlFor="Паспорта газового счетчика:">
                Паспорта газового счетчика:
              </label>
              <input
                value={order.passport_meter ? "Есть" : "Нет"}
                disabled
                type="text"
                id="Паспорта газового счетчика:"
                className="form-control"
              />
            </div>

            <div className="formWrap">
              <label htmlFor="Паспорт блока коррекции:">
                Паспорт блока коррекции:
              </label>
              <input
                value={order.correction_block_passport ? "Есть" : "Нет"}
                disabled
                type="text"
                id="Паспорт блока коррекции:"
                className="form-control"
              />
            </div>

            <div className="formWrap">
              <label
                htmlFor="Акт (Рай.газ, гор.газ, обл.газ) о снятии счетчик газа на гос. поверку с показаниями
счетчика, печатью или штампом:"
              >
                Акт (Рай.газ, гор.газ, обл.газ) о снятии счетчик газа на гос.
                поверку с показаниями счетчика, печатью или штампом:
              </label>
              <input
                value={order.verification_with_stamp ? "Есть" : "Нет"}
                disabled
                type="text"
                id="Акт (Рай.газ, гор.газ, обл.газ) о снятии счетчик газа на гос. поверку с показаниями
счетчика, печатью или штампом:"
                className="form-control"
              />
            </div>

            <div className="formWrap">
              <label
                htmlFor="Техническое состояние счетчика при поступлении в метрологический центр «GAZ TEXNO PRIBOR» МЧЖ.
Наличие пломб: счетный механизм"
              >
                Техническое состояние счетчика при поступлении в метрологический
                центр «GAZ TEXNO PRIBOR» МЧЖ. Наличие пломб: счетный механизм
              </label>
              <input
                value={order.gaz_pribor_stamp ? "Есть" : "Нет"}
                disabled
                type="text"
                id="Техническое состояние счетчика при поступлении в метрологический центр «GAZ TEXNO PRIBOR» МЧЖ.
Наличие пломб: счетный механизм"
                className="form-control"
              />
            </div>

            <div className="formWrap">
              <label htmlFor="блок коррекции ДР">блок коррекции ДР</label>
              <input
                value={order.block_correction_dp ? "Есть" : "Нет"}
                disabled
                type="text"
                id="блок коррекции ДР"
                className="form-control"
              />
            </div>

            <div className="formWrap">
              <label htmlFor="ДТ">ДТ</label>
              <input
                value={order.dt ? "Есть" : "Нет"}
                disabled
                type="text"
                id="ДТ"
                className="form-control"
              />
            </div>

            <div className="formWrap">
              <label htmlFor="dd">ДД</label>
              <input
                value={order.dd ? "Есть" : "Нет"}
                disabled
                type="text"
                id="dd"
                className="form-control"
              />
            </div>

            <div className="formWrap">
              <label
                htmlFor="Er 3000000
Внештатные ситуации:"
              >
                Er 3000000 Внештатные ситуации:
              </label>
              <input
                value={order.er_300000 ? "Есть" : "Нет"}
                disabled
                type="text"
                id="Er 3000000
Внештатные ситуации:"
                className="form-control"
              />
            </div>

            <div className="formWrap">
              <label htmlFor="Визуальные повреждения:">
                Визуальные повреждения
              </label>
              <input
                value={order.visual_damage ? "Есть" : "Нет"}
                disabled
                type="text"
                id="Визуальные повреждения:"
                className="form-control"
              />
            </div>

            <div className="formWrap">
              <label htmlFor="Механические повреждения:">
                Механические повреждения:
              </label>
              <input
                value={order.mechanical_damage ? "Есть" : "Нет"}
                disabled
                type="text"
                id="Механические повреждения:"
                className="form-control"
              />
            </div>

            <div className="formWrap">
              <label htmlFor="Заключения:">Заключения:</label>
              <input
                value={order.conclusion}
                disabled
                type="text"
                id="Заключения:"
                className="form-control"
              />
            </div>

            <div className="formWrap">
              <label htmlFor="Показания:">Показания:</label>
              <input
                value={order.indications}
                disabled
                type="text"
                id="Показания:"
                className="form-control"
              />
            </div>

            <div className="formWrap">
              <label htmlFor="Счетного механизма:">Счетного механизма:</label>
              <input
                value={order.counting_mechanism}
                disabled
                type="text"
                id="Счетного механизма:"
                className="form-control"
              />
            </div>
          </div>
        </div>
        <div onClick={() => setIsOpen(false)} className="close"></div>
      </div>
    </>
  );
};

export default ClientHistoryPage;
