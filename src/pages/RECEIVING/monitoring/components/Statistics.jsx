import axios from "axios";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { API_PATH } from "../../../../constants";

ChartJS.register(ArcElement, Tooltip, Legend);

const Statistics = () => {
  const [statistics, setStatistic] = useState([]);

  useEffect(() => {
    const getStatistics = async () => {
      const { data } = await axios.get(API_PATH + "/main/statictics/");
      setStatistic(data);
    };
    getStatistics();
  }, []);

  const data = {
    labels: [
      "Принимающий",
      "Специалист",
      "Бухгалтер",
      "Оплата",
      "Pабота над счетчиком",
      "B стенд",
      "Документация",
    ],
    datasets: [
      {
        label: "Transaction",
        data: [
          statistics.received,
          statistics.specialist,
          statistics.accountant,
          statistics.payment,
          statistics.test,
          statistics.end,
          statistics.docs,
        ],
        backgroundColor: [
          "#76ca66",
          "#3174BA",
          "#FFC772",
          "#FF6E2E",
          "#DA1E28",
          "#CF54BC",
          "#9461FF",
        ],
        borderColor: ["#fff"],
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      labels: {
        display: false,
      },
      title: {
        display: false,
        text: "Chart.js Doughnut Chart",
      },
    },
  };
  return (
    <div className="Statistics">
      <h1>Мониторинг</h1>
      <div className="filterWrap FilterStyle">
        <div className="filterBtn">Все</div>
        <div className="filterBtn active">Сегодня</div>
        <div className="filterBtn">Вчера</div>
        <div className="filterBtn">Неделя</div>
        <div className="filterBtn">Месяц</div>
        <div className="filterBtn">Год </div>
      </div>
      <div className="cards CardStyle">
        <div className="cardsTop">
          <h2>Статистика </h2>
          <h3>Поступающих счетчиков по статусам</h3>
        </div>
        <div className="line"></div>

        <div className="cardsBottom">
          <div className="chart">
            <Doughnut data={data} options={options} />
          </div>

          <div className="userList">
            <div className="row">
              <div className="col-lg-5">
                <div className="wrap">
                  <p>
                    <span className="green"></span>Принимающий
                  </p>
                  <h6>{statistics.received}</h6>
                </div>
                <div className="wrap">
                  <p>
                    <span className="blue"></span>Специалист
                  </p>
                  <h6>{statistics.specialist}</h6>
                </div>
                <div className="wrap">
                  <p>
                    <span className="orange"></span>Бухгалтер
                  </p>
                  <h6>{statistics.accountant}</h6>
                </div>
                <div className="wrap">
                  <p>
                    <span className="dark-orange"></span>Оплата
                  </p>
                  <h6>{statistics.payment}</h6>
                </div>
              </div>
              <div className="col-lg-5 ms-auto">
                <div className="wrap">
                  <p>
                    <span className="pink"></span>B стенд
                  </p>
                  <h6>{statistics.test}</h6>
                </div>
                <div className="wrap">
                  <p>
                    <span className="red"></span>Pабота над счетчиком
                  </p>
                  <h6>{statistics.end}</h6>
                </div>
                <div className="wrap">
                  <p>
                    <span className="dark-blue"></span>Документация
                  </p>
                  <h6>{statistics.docs}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
