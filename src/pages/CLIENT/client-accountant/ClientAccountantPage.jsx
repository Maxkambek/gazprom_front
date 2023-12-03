import { Link } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { API_PATH, CONFIG } from "@/constants/index.js";
import { toast } from "react-toastify";

const ClientAccountantPage = () => {
  const [order, setClient] = useState([]);

  const getClient = useCallback(async () => {
    try {
      const { data } = await axios.get(API_PATH + "/main/client/", CONFIG);
      setClient(data);
    } catch (error) {
      toast().error("Error getting client:", error);
    }
  }, []);

  useEffect(() => {
    getClient();
  }, [getClient]);

  

  return (
    <div className="ClientAccountantPage">
      <div className={`myModal middleModal accountantModal active"}`}>
        <div className="cards">
          <div className="cardsTop border-0">
            <div className="d-flex align-items-center justify-content-between">
              <h1>Бухгалтер </h1>
              <div className="closeImg cursor">
                <button className="btn myBtn">Скачать PDF</button>
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
                {order[0]?.order_products &&
                  order[0].order_products.map((item) => (
                    <>
                      <tr>
                        <th>{item.product.name}</th>
                        <th>{item.count}</th>
                        <th> шт</th>
                        <th>{item.product.price.toLocaleString()}</th>
                        <th>
                          {(item.product.price * item.count).toLocaleString()}
                        </th>
                        <th>12%</th>
                        <th>
                          {(
                            item.product.price * item.count * 1.12 -
                            item.product.price * item.count
                          ).toLocaleString()}
                        </th>
                        <th>
                          {(
                            item.product.price *
                            1.12 *
                            item.count
                          ).toLocaleString()}
                        </th>
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
                  <td>{order[0]?.get_full_amount?.toLocaleString()}</td>
                  <td></td>
                  <td>
                    {(
                      order[0]?.get_full_amount * 1.12 -
                      order[0]?.get_full_amount
                    ).toLocaleString()}
                  </td>
                  <td>{(order[0]?.get_full_amount * 1.12).toLocaleString()}</td>
                </tr>
              </tfoot>
            </table>
          </div>
          <div className="btnWrap">
            <button className="btn cardsBtn silver d-block w-50">
              Hе согласится, отправить к принимающему
            </button>
            <Link to={"/client-payment"} className="btn cardsBtn d-block w-50">
              Согласится и перейти к оплату
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientAccountantPage;
