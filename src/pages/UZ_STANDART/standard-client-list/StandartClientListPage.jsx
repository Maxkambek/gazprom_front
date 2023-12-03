import download from "@/assets/download.svg"
import upload from "@/assets/upload.svg"
import pdf from "@/assets/pdf.svg"
import {useCallback, useEffect, useState} from "react";
import axios from "axios";
import {API_PATH} from "@/constants/index.js";
import {toast} from "react-toastify";
import {Loader} from "@/components/Loader.jsx";

const StandardClientListPage = () => {
    const [btn, setBtn] = useState(1);
    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

    const formatDate = (dateTimeString) => {
        const date = new Date(dateTimeString);
        const formattedDate = date.toLocaleString('en-GB', {
            hour: 'numeric',
            minute: 'numeric',
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        });

        return formattedDate;
    };

    const getOrders = useCallback(async () => {
        setIsLoading(true);
        try {
            const {data} = await axios(
                API_PATH +
                `/main/list-for-uzstandard/${
                    btn === 1 ? "" : btn === 2 ? "?today=2" : "?yesterday=3"
                }`
            );
            setOrders(data);
            setIsLoading(false)
        } catch (error) {
            toast().error("Error getting orders:", error);
            setIsLoading(false)
        }
    }, [btn]);

    useEffect(() => {
        getOrders();
    }, [getOrders]);

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

                {isLoading ? <Loader/> :

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
                        {orders && orders.map((item) => (
                            <tr key={item.id}>
                                <th key={item.id}>{item.id}</th>
                                <th>{item.name_org}</th>
                                <th>{formatDate(item.created_time)}</th>
                                <th>{item.meter_brand}</th>
                                <th className='file'>
                                    
                                    <p className={'mb-2 mt-2'}><span className={'me-2'}>
                                    <img src={pdf} alt=""/></span>
                                        UzAvto Number.pdf</p>
                                    <button className="btn"><span><img src={download} alt=""/></span>Скачать</button>
                                    
                                </th>
                                <th>
                                    <button className="btn"><span><img src={upload} alt=""/></span>Загрузить</button>

                                </th>
                            </tr>
                        ))}
                        </tbody>
                    </table>

                }
            </div>
        </>);
};

export default StandardClientListPage;
