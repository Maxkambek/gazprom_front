import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const Statistics = () => {
  const data = {
    labels: [
      "Принимающий",
      "Специалист",
      "Бухгалтер",
      "Pабота над счетчиком",
      "B стенд",
      "Документация",
    ],
    datasets: [
      {
        label: "Transaction",
        data: [3, 6, 12, 8, 1, 15],
        backgroundColor: [
          "#FF6E2E",
          "#FFC772",
          "#9461FF",
          "#76CA66",
          "#3174BA",
          "#DA1E28",
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
      <div className="filterWrap">
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
                    <span></span>Принимающий
                  </p>
                  <h6>60</h6>
                </div>
                <div className="wrap">
                  <p>
                    <span></span>Специалист
                  </p>
                  <h6>40</h6>
                </div>
                <div className="wrap">
                  <p>
                    <span></span>Бухгалтер
                  </p>
                  <h6>10</h6>
                </div>
                <div className="wrap">
                  <p>
                    <span></span>Оплата
                  </p>
                  <h6>200</h6>
                </div>
              </div>
              <div className="col-lg-5 ms-auto">
                <div className="wrap">
                  <p>
                    <span></span>Принимающий
                  </p>
                  <h6>25</h6>
                </div>
                <div className="wrap">
                  <p>
                    <span></span>Pабота над счетчиком
                  </p>
                  <h6>30</h6>
                </div>
                <div className="wrap">
                  <p>
                    <span></span>Документация
                  </p>
                  <h6>200</h6>
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
