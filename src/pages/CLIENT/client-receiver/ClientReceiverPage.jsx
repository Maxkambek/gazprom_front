import {useEffect, useState} from "react";
import axios from "axios";
import {API_PATH, CONFIG} from "@/constants/index.js";

const ClientReceiverPage = () => {
    const [clients, setClients] = useState([])
    useEffect(() => {
        const getClients = async () => {
            const {data} = await axios.get(API_PATH + "/main/client/", CONFIG)
            setClients(data);
        }
        getClients();
    }, [])
    return (
        <div className='ClientReceiverPage RightStyle'>
            <h1>Принимающий</h1>
            <div className="cards">
                <div className="wrap">
                    <h5>Наименование организации:</h5>
                    <h6>Янги хайот тумани 329-мактаб</h6>
                </div>

                <div className="wrap">
                    <h5>Марка счетчика газа:</h5>
                    <h6>Янги хайот тумани 329-мактаб</h6>
                </div>

                <div className="wrap">
                    <h5>Марка счетчика газа:</h5>
                    <h6>Янги хайот тумани 329-мактаб</h6>
                </div>
            </div>
        </div>
    )
}

export default ClientReceiverPage;
