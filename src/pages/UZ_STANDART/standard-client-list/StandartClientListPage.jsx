import download from "@/assets/download.svg"
import upload from "@/assets/upload.svg"
import pdf from "@/assets/pdf.svg"
import {useEffect, useState} from "react";
import axios from "axios";
import {API_PATH} from "@/constants/index.js";

const StandardClientListPage = () => {
    const [btn, setBtn] = useState(1);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const getOrders = async () => {
            const {data} = await axios(
                API_PATH +
                `/main/orders-specialist${
                    btn === 1
                        ? ""
                        : btn === 2
                            ? "?today=2"
                            : "?yesterday=3"}`
            );
            setOrders(data);
        };
        getOrders();
    }, [btn]);

    return (
        <>
            <div className="StandardClientListPage RightStyle">
                <div className="btnWrap mb-4">
                    <h1>Список клиентов</h1>
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

                <table className="table TableStyle">
                    <thead>
                    <tr>
                        <td>№</td>
                        <td>Наименование организации</td>
                        <td>Дата</td>
                        <td>Марка счетчика газа</td>
                        <td>Протокол</td>
                        <td>Зав.№ кор</td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th>1</th>
                        <th>Янги хайот тумани 329-мактаб</th>
                        <th>01.11.2023 16:56</th>
                        <th>Ultramag G-100 № 01912</th>
                        <th className='file'><p className={'mb-2'}><span className={'me-2'}><img src={pdf}
                                                                                                 alt=""/></span>UzAvto
                            Number.pdf</p>
                            <button className="btn"><span><img src={download} alt=""/></span>Скачать</button>
                        </th>
                        <th>
                            <button className="btn"><span><img src={upload} alt=""/></span>Загрузить</button>

                        </th>
                    </tr>
                    </tbody>
                </table>
            </div>
        </>);
};

export default StandardClientListPage;
