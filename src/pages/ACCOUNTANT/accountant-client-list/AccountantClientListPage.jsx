import { useEffect, useState } from "react";
import close from "@/assets/close.svg";
import axios from "axios";
import { API_PATH } from "../../../constants";
import { toast } from "react-toastify";

const AccountantClientListPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [orders, setOrders] = useState([]);
  const [order, setOrder] = useState();
  const [btn, setBtn] = useState(1);

  useEffect(() => {
    axios(
      API_PATH +
        `/main/accountant${
          btn === 1 ? "" : btn === 2 ? "?tady=1" : "?yesterday=28"
        }`
    ).then((res) => {
      setOrders(res.data);
    });
  }, [btn]);

  const sendAccountant = (item_id) => {
    axios
      .patch(API_PATH + `/main/accountant/${item_id}/`, {
        ready_for_paid: true,
      })
      .then((res) => {
        console.log(res.data);
        setIsOpen(false);
        toast.success("Ma'lumotlar jo'natildi");
      });
  };

  return (
    <>
      <div className="AccountantClientListPage RightStyle">
        <h1>Список клиентов</h1>

        <div className="filterWrap FilterStyle">
          {" "}
          <div
            onClick={() => setBtn(1)}
            className={`filterBtn ${btn === 1 ? "active" : ""}`}
          >
            Все (20 000)
          </div>
          <div
            onClick={() => setBtn(2)}
            className={`filterBtn ${btn === 2 ? "active" : ""}`}
          >
            Сегодня (50)
          </div>
          <div
            onClick={() => setBtn(3)}
            className={`filterBtn ${btn === 3 ? "active" : ""}`}
          >
            Вчера (60)
          </div>
        </div>

        <table className="table TableStyle">
          <thead>
            <tr>
              <td>№</td>
              <td>Наименование организации</td>
              <td>Дата</td>
              <td>Марка счетчика газа</td>
              <td>Зав.№ сч</td>
              <td>Зав.№ кор</td>
              <td>Статус</td>
            </tr>
          </thead>
          <tbody>
            {orders &&
              orders.map((item) => (
                  <tr
                      key={item.id}
                    onClick={() => {
                      setIsOpen(true), setOrder(item);
                    }}
                    className="cursor"
                  >
                    <th>{item.id}</th>
                    <th>{item.name_org}</th>
                    <th>{item.created_at}</th>
                    <th>{item.meter_brand}</th>
                    <th>{item.serial_number}</th>
                    <th>№ {item.temp_sensor}</th>
                    <th className="status status-blue">{item.status}</th>
                  </tr>
              ))}
          </tbody>
        </table>
      </div>

      <div
        className={`myModal middleModal accountantModal ${isOpen && "active"}`}
      >
        <div className="cards">
          <div className="cardsTop">
            <div className="d-flex align-items-center justify-content-between">
              <h1>{order?.name_org} </h1>
              <div onClick={() => setIsOpen(false)} className="closeImg cursor">
                <img src={close} alt="" />
              </div>
            </div>
            <div className="topWrap">
              <div className="d-flex align-items-center">
                <div className="wrap me-5">
                  <h2>Зав.№ сч</h2>
                  <h3>№ {order?.serial_number}</h3>
                </div>
                <div className="wrap">
                  <h2>Зав.№ сч</h2>
                  <h3>№ {order?.temp_sensor}</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="cardsBody">
            <table className="table TableStyle">
              <thead>
                <tr>
                  <td>Наименование работ и услуг</td>
                  <td>Кол.</td>
                  <td>Ед. изм</td>
                  <td>Цена</td>
                  <td>Сумма</td>
                  <td>НДС %</td>
                  <td>Сумма НДС</td>
                  <td>Общая сумма с учетом НДС, сум</td>
                </tr>
              </thead>

              <tbody>
                {order?.order_products &&
                  order.order_products.map((item) => (
                    <>
                      <tr>
                        <th>{item.product.name}</th>
                        <th>{item.count}</th>
                        <th>{item.count} шт</th>
                        <th>{item.product.price}</th>
                        <th>{item.product.price * item.count}</th>
                        <th>12%</th>
                        <th>
                          {item.product.price * 1.12 - item.product.price}
                        </th>
                        <th>{item.product.price * 1.12 * item.count}</th>
                      </tr>
                    </>
                  ))}
              </tbody>

              <tfoot>
                <tr>
                  <td>ИТОГО</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>455 955,00</td>
                  <td>3 475 580,00</td>
                </tr>
              </tfoot>
            </table>
          </div>

          <div className="btnWrap">
            <button className="btn cardsBtn silver">Скачать PDF</button>
            <button
              onClick={() => sendAccountant(order.id)}
              className="btn cardsBtn"
            >
              Отправить
            </button>
          </div>
        </div>
        <div onClick={() => setIsOpen(false)} className="close"></div>
      </div>
    </>
  );
};

export default AccountantClientListPage;
