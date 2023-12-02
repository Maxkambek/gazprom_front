import {Link, Outlet, useNavigate} from "react-router-dom";
import logo from "@/assets/logo.svg";
import MonitoringNavbar from "@/pages/RECEIVING/monitoring/components/MonitoringNavbar.jsx";
import {API_PATH, CONFIG, TOKEN, USER_ROLE} from "@/constants/index.js";
import {useCallback, useEffect, useState} from "react";
import axios from "axios";
import {toast} from "react-toastify";

const ClientLayout = () => {
    const [client, setClient] = useState([])

    const getClient = useCallback(async () => {
        try {
            const {data} = await axios.get(API_PATH + "/main/client/", CONFIG);
            setClient(data);
        } catch (error) {
            toast().error("Error getting client:", error);
        }
    }, []);

    useEffect(() => {
        getClient();
    }, [getClient]);
    return (
        <div className="ClientLayout LayoutStyle">
            <div className="row">

                <div className="col-lg-2 left">
                    <Link to="/" className="logo">
                        <img src={logo} alt=""/>
                    </Link>

                    <div className={`wrap`}>
                        <div className="iconWrap">
                            <span className="icon icon-dot"></span>
                        </div>
                        <div className="line"></div>
                        <div><h3>Принимающий</h3>
                            <h4>Происходит внешний осмотр счетчика и отправляется к специалисту</h4>
                        </div>
                    </div>

                    <div className={`wrap `}>
                        <div className="iconWrap">
                            <span className="icon icon-dot"></span>
                        </div>
                        <div className="line h-105"></div>
                        <div><h3>Специалист</h3>
                            <h4>Специалист производит внутренний осмотр счётчик и заполняет нужные данные (нужные
                                запчасти и другие данные) по форме.</h4>
                        </div>
                    </div>

                    <div className="wrap">
                        <div className="iconWrap">
                            <span className="icon icon-dot"></span>
                        </div>
                        <div className="line"></div>
                        <div><h3>Бухгалтер</h3>
                            <h4>Бухгалтер заполняет ценами запчастей и других услуг</h4>
                        </div>
                    </div>

                    <div className="wrap">
                        <div className="iconWrap">
                            <span className="icon icon-dot"></span>
                        </div>
                        <div className="line"></div>
                        <div><h3>Оплата</h3>
                            <h4>Оплачитите за услуги в виде онлайн оплаты (Click , Payme) или в виде наличные.</h4>
                        </div>
                    </div>

                    <div className="wrap">
                        <div className="iconWrap">
                            <span className="icon icon-dot"></span>
                        </div>
                        <div className="line"></div>
                        <div><h3>Pабота над счетчиком</h3>
                            <h4>Pачинается внутренний осмотр и работа над счетчиком</h4>
                        </div>
                    </div>

                    <div className="wrap">
                        <div className="iconWrap">
                            <span className="icon icon-dot"></span>
                        </div>
                        <div className="line"></div>
                        <div><h3>B стенд</h3>
                            <h4>Начинается внутренний осмотр и работа над счетчиком</h4>
                        </div>
                    </div>

                    <div className="wrap">
                        <div className="iconWrap">
                            <span className="icon icon-dot"></span>
                        </div>
                        <div><h3>Документация</h3>
                            <h4>Начинается внутренний осмотр и работа над счетчиком</h4>
                        </div>
                    </div>

                </div>

                <div className="col-lg-10 right">
                    <MonitoringNavbar/>
                    <Outlet/>
                </div>
            </div>
        </div>
    );
};

export default ClientLayout;
