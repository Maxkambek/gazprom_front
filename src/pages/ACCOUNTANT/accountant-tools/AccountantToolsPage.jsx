import {useCallback, useEffect, useState} from "react";
import plus from "@/assets/plus.svg";
import close from "@/assets/close.svg";
import axios from "axios";
import {API_PATH, CONFIG} from "../../../constants";
import {toast} from "react-toastify";
import {Loader} from "@/components/Loader.jsx";

const AccountantToolsPage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const [name, setName] = useState("");
    const [number_hash, setNumber_hash] = useState("");
    const [count, setCount] = useState("");
    const [come_time, setCome_time] = useState("");
    const [price, setPrice] = useState("");

    const [products, setProducts] = useState([]);

    const [isLoading, setIsLoading] = useState(false)
    const [isTool, setIsTool] = useState(false)

    const productCreate = async (e) => {
        setIsTool(true)
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
                getProductList();
                toast.success("Tool created successfully");
                setName("");
                setNumber_hash("");
                setCount("");
                setCome_time("");
                setPrice("");
                setIsOpen(false);
                setIsTool(false)
            })
            .catch(() => {
                toast.error("Bad request. Try again later");
                setIsTool(false)
            })
    };

    const getProductList = useCallback(async () => {
        setIsLoading(true);
        try {
            const {data} = await axios.get(API_PATH + "/main/product-list/");
            setProducts(data);
        } catch (error) {
            console.error("Error getting product list:", error);
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        getProductList();
    }, [getProductList]);

    return (
        <>
            <div className="AccountantToolsPage RightStyle">
                <div className="btnWrap mb-4">
                    <h1>Список клиентов</h1>
                    <button onClick={() => setIsOpen(true)} className="btn myBtn">
            <span>
              <img src={plus} alt=""/>
            </span>
                        Добавить запчасть
                    </button>
                </div>

                {isLoading ? <Loader/> :
                    <table className="table TableStyle">
                        <thead>
                        <tr>
                            <td>№</td>
                            <td>Имя</td>
                            <td>Номер шифра</td>
                            <td>Количество</td>
                            <td>Время прибытия</td>
                            <td>Цена</td>
                        </tr>
                        </thead>
                        <tbody>

                        {products &&
                            products.map((item) => (
                                <tr key={item.id}>
                                    <th>{item.id}</th>
                                    <th>{item.name}</th>
                                    <th>{item.number_hash}</th>
                                    <th>{item.count}</th>
                                    <th>{item.come_time}</th>
                                    <th>{item.price}</th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                }

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
                <img src={close} alt=""/>
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
                            type="text"
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
                        <button disabled={isTool} type="submit" className="btn cardsBtn">
                            {isTool && (
                                <i className="spinner-border spinner-border-sm text-white text-dark me-2"></i>
                            )}
                            <span>
                                <img src={plus} alt=""/>
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
