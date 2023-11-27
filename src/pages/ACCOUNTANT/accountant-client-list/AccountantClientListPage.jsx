import { useState } from "react";
import close from "@/assets/close.svg";

const AccountantClientListPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="AccountantClientListPage RightStyle">
        <h1>Список клиентов</h1>

        <div className="filterWrap FilterStyle">
          <div className="filterBtn">Все</div>
          <div className="filterBtn active">Сегодня</div>
          <div className="filterBtn">Вчера</div>
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
            <tr onClick={() => setIsOpen(true)} className="cursor">
              <th>1</th>
              <th>Янги хайот тумани 329-мактаб</th>
              <th>01.11.2023 16:56</th>
              <th>Ultramag G-100 № 01912</th>
              <th>№ 466863</th>
              <th>№ 466863</th>
              <th className="status status-blue">Специалист</th>
            </tr>
            <tr onClick={() => setIsOpen(true)} className="">
              <th>2</th>
              <th>Янги хайот тумани 329-мактаб</th>
              <th>01.11.2023 16:56</th>
              <th>Ultramag G-100 № 01912</th>
              <th>№ 466863</th>
              <th>№ 466863</th>
              <th className="status status-pink">в стенд</th>
            </tr>
            <tr onClick={() => setIsOpen(true)} className="">
              <th>3</th>
              <th>Янги хайот тумани 329-мактаб</th>
              <th>01.11.2023 16:56</th>
              <th>Ultramag G-100 № 01912</th>
              <th>№ 466863</th>
              <th>№ 466863</th>
              <th className="status status-yellow">Бухгалтер</th>
            </tr>
          </tbody>
        </table>
      </div>

      <div
        className={`myModal middleModal accountantModal ${isOpen && "active"}`}
      >
        <div className="cards">
          <div className="cardsTop">
            <div className="d-flex align-items-center justify-content-between">
              <h1>Янги хайот тумани 329-мактаб </h1>
              <div onClick={() => setIsOpen(false)} className="closeImg cursor">
                <img src={close} alt="" />
              </div>
            </div>
            <div className="topWrap">
              <div className="d-flex align-items-center">
                <div className="wrap me-5">
                  <h2>Зав.№ сч</h2>
                  <h3>№ 466863</h3>
                </div>
                <div className="wrap">
                  <h2>Зав.№ сч</h2>
                  <h3>№ 466863</h3>
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
                <tr>
                  <th>Сервисное обслуживание и предповерочные работы</th>
                  <th>1</th>
                  <th>шт</th>
                  <th>548 065,00</th>
                  <th>548 065,00</th>
                  <th>12</th>
                  <th>65 767,80</th>
                  <th>613 832,80</th>
                </tr>
              </tbody>

              <tfoot>
                <tr>
                  <td>ИТОГО</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>3 019 625,00</td>
                  <td>455 955,00</td>
                  <td>3 475 580,00</td>
                </tr>
              </tfoot>
            </table>
          </div>

          <div className="btnWrap">
            <button className="btn cardsBtn silver">Скачать PDF</button>
            <button onClick={() => setIsOpen(false)} className="btn cardsBtn">Отправить</button>
          </div>
        </div>
        <div onClick={() => setIsOpen(false)} className="close"></div>
      </div>
    </>
  );
};

export default AccountantClientListPage;
