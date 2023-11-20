import logo from "@/assets/logo.svg";
import closeEye from "@/assets/closeEye.svg";
import opneEye from "@/assets/opneEye.svg";
import { useState } from "react";

const Main = () => {
  const [isPassword, setIsPassword] = useState(true);
  return (
    <div className="Main">
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-12 ">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
          </div>
          <div className="col-lg-5 mx-auto h-100 myCol">
            <div className="cards">
              <h1>Вход</h1>
              <label htmlFor="Логин">Логин</label>
              <input type="text" id="Логин" className="form-control mb-3" />

              <div className="inputWrap">
                <label htmlFor="Пароль">Пароль</label>
                <input
                  type={isPassword ? "password" : "text"}
                  id="Пароль"
                  className="form-control"
                />
                {isPassword ? (
                  <div
                    onClick={() => setIsPassword(false)}
                    className="openEye eye"
                  >
                    <img src={opneEye} alt="" />
                  </div>
                ) : (
                  <div
                    onClick={() => setIsPassword(true)}
                    className="closeEye eye"
                  >
                    <img src={closeEye} alt="" />
                  </div>
                )}
              </div>

              <button className="btn myBtn" type="submit">
                Войти
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
