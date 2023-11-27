import logo from "@/assets/logo.svg";
import closeEye from "@/assets/closeEye.svg";
import opneEye from "@/assets/opneEye.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { API_PATH } from "@/constants";
import { TOKEN } from "../../constants";
import { useDispatch } from "react-redux";
import { setToken } from "../../redux/authSlice";

const Main = () => {
  const [isPassword, setIsPassword] = useState(true);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch()

  const logIn = (e) => {
    e.preventDefault();
    axios
      .post(API_PATH + "/user/login/", {
        username: login,
        password,
      })
      .then((res) => {
        const inputString = res.data.token;
        const startIndex = inputString.indexOf(": ") + 2;
        const endIndex = inputString.indexOf(">");
        const extractedValue = inputString.substring(startIndex, endIndex);
        localStorage.setItem(TOKEN, extractedValue);
        dispatch(setToken({ extractedValue }));


        // if (res.data.role === "receiver") {
        //   navigate("/monitoring");
        // }
        // if (res.data.role === "specialist") {
        //   navigate("/specialist-client-list");
        // }
        // if (res.data.role === "accountant") {
        //   navigate("/accountant-client-list");
        // }
        // if (res.data.role === "client") {
        //   navigate("/client");
        // }
        // if (res.data.role === "uz_standard") {
        //   navigate("/uz_standard");
        // }
        // if (res.data.role === "inspector_1") {
        //   navigate("/inspector_1");
        // }
        // if (res.data.role === "inspector_2") {
        //   navigate("/inspector_2");
        // }
      })
      .catch((err) => {
        if (err.response.status === 302) {
          toast.info("User is already logged in");
        } else {
          toast.error("Couldn't login");
        }
      });
  };

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
            <form onSubmit={logIn} className="cards">
              <h1>Вход</h1>
              <label htmlFor="Логин">Логин</label>
              <input
                value={login}
                onChange={(e) => setLogin(e.target.value)}
                required
                type="text"
                id="Логин"
                className="form-control mb-3"
              />

              <div className="inputWrap">
                <label htmlFor="Пароль">Пароль</label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
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
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
