import {Link} from "react-router-dom";

const ClientAccountantPage = () => {
    return (
        <div className="ClientAccountantPage">

            <div
                className={`myModal middleModal accountantModal active"}`}
            >
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
                            <tr>
                                <th>Сервисное обслуживание и предповерочные работы</th>
                                <th>1</th>
                                <th> шт</th>
                                <th>548 065,00</th>
                                <th>548 065,00</th>
                                <th>12%</th>
                                <th>
                                    65 767,80
                                </th>
                                <th>65 767,80</th>
                            </tr>
                            </tbody>

                            <tfoot>
                            <tr>
                                <td>ИТОГО</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>455 955,00</td>
                                <td>3 475 580,00</td>
                            </tr>
                            </tfoot>
                        </table>
                    </div>

                    <div className="btnWrap">
                        <button className="btn cardsBtn silver d-block w-50">Hе согласится, отправить к принимающему</button>
                        <Link to={'/client-payment'}
                            className="btn cardsBtn d-block w-50"
                        >
                            Согласится и перейти к оплату
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClientAccountantPage;