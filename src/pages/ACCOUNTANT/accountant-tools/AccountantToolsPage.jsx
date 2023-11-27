import { useState } from "react";
import plus from "@/assets/plus.svg";
import close from "@/assets/close.svg";
import axios from "axios";
import { API_PATH, CONFIG } from "../../../constants";
import {toast} from "react-toastify";

const AccountantToolsPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [name, setName] = useState("");
  const [number_hash, setNumber_hash] = useState("");
  const [count, setCount] = useState("");
  const [come_time, setCome_time] = useState("");
  const [price, setPrice] = useState("");

  const productCreate = async (e) => {
    e.preventDefault();
    await axios
      .post(
        API_PATH + "/main/product-create/",
        {
          name,
          number_hash,
          count,
          come_time,
          price,
        },
        CONFIG
      )
      .then(() => {
        toast.success("Tool created successfully");
        setName("");
        setNumber_hash("");
        setCount("");
        setCome_time("");
        setPrice("");
        setIsOpen(false);
      })
      .catch(() => {
        toast.error("Bad request. Try again later");
      });
  };

  return (
    <>
      <div className="AccountantToolsPage RightStyle">
        <div className="btnWrap">
          <h1>Список клиентов</h1>
          <button onClick={() => setIsOpen(true)} className="btn myBtn">
            <span>
              <img src={plus} alt="" />
            </span>
            Добавить запчасть
          </button>
        </div>
      </div>

      <div
        className={`myModal middleModal accountantModal tools ${
          isOpen && "active"
        }`}
      >
        <form onSubmit={productCreate} className="cards">
          <div className="cardsTop">
            <div className="d-flex align-items-center justify-content-between">
              <h1>Добавить Запчасть</h1>
              <span className="cursor" onClick={() => setIsOpen(false)}>
                <img src={close} alt="" />
              </span>
            </div>
          </div>

          <div className="cardsBody">
            <label htmlFor="name">Имя</label>
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="name"
              type="text"
              className="form-control"
            />

            <label htmlFor="номер шифра">Номер шифра</label>
            <input
              required
              value={number_hash}
              onChange={(e) => setNumber_hash(e.target.value)}
              id="номер шифра"
              type="text"
              className="form-control"
            />

            <label htmlFor="Количество">Количество</label>
            <input
              required
              value={count}
              onChange={(e) => setCount(e.target.value)}
              id="Количество"
              type="number"
              className="form-control"
            />

            <label htmlFor="время прибытия">Bремя прибытия</label>
            <input
              required
              value={come_time}
              onChange={(e) => setCome_time(e.target.value)}
              id="время прибытия"
              type="datetime-local"
              className="form-control"
            />

            <label htmlFor="Цена">Цена</label>
            <input
              required
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              id="Цена"
              type="number"
              className="form-control"
            />
          </div>

          <div className="btnWrap">
            <button type="submit" className="btn cardsBtn">
              <span>
                <img src={plus} alt="" />
              </span>
              Добавить запчасть
            </button>
          </div>
        </form>
        <div onClick={() => setIsOpen(false)} className="close"></div>
      </div>
    </>
  );
};

export default AccountantToolsPage;
