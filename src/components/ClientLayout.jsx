import { Link, Outlet } from "react-router-dom";
import logo from "@/assets/logo.svg";

const ClientLayout = () => {
  return (
    <div className="ClientLayout">
      <div className="row">
        <div className="col-lg-2 left">
          <Link to="/" className="logo">
            <img src={logo} alt="" />
          </Link>
          <div className="for_margin"></div>
          <div className="client_nav_box">
            <div className="nav_box_line">
              <div className="nav_box_img_1 active"></div>
              <div className="nav_box_img_2 active"></div>
            </div>
            <div className="nav_box_text">
              <div className="nav_text_h active">Принимающий</div>
              <div className="nav_text_p active">
                Происходит внешний осмотр счетчика и отправляется к специалисту
              </div>
            </div>
          </div>
          <div className="client_nav_box">
            <div className="nav_box_line">
              <div className="nav_box_img_1 active"></div>
              <div className="nav_box_img_2 active"></div>
            </div>
            <div className="nav_box_text">
              <div className="nav_text_h active">Специалист</div>
              <div className="nav_text_p active">
                Специалист производит внутренний осмотр счётчик и заполняет
                нужные данные (нужные запчасти и другие данные) по форме.
              </div>
            </div>
          </div>
          <div className="client_nav_box">
            <div className="nav_box_line">
              <div className="nav_box_img_1 "></div>
              <div className="nav_box_img_2 "></div>
            </div>
            <div className="nav_box_text">
              <div className="nav_text_h ">Бухгалтер</div>
              <div className="nav_text_p ">
                Бухгалтер заполняет ценами запчастей и других услуг
              </div>
            </div>
          </div>
          <div className="client_nav_box">
            <div className="nav_box_line">
              <div className="nav_box_img_1 "></div>
              <div className="nav_box_img_2 "></div>
            </div>
            <div className="nav_box_text">
              <div className="nav_text_h ">Оплата</div>
              <div className="nav_text_p ">
                Oплачитите за услуги в виде онлайн оплаты (Click , Payme) или в
                виде наличные.
              </div>
            </div>
          </div>
          <div className="client_nav_box">
            <div className="nav_box_line">
              <div className="nav_box_img_1 "></div>
              <div className="nav_box_img_2 "></div>
            </div>
            <div className="nav_box_text">
              <div className="nav_text_h ">Pабота над счетчиком</div>
              <div className="nav_text_p ">
                Oплачитите за услуги в виде онлайн оплаты (Click , Payme) или в
                виде наличные.
              </div>
            </div>
          </div>
          <div className="client_nav_box">
            <div className="nav_box_line">
              <div className="nav_box_img_1 "></div>
              <div className="nav_box_img_2 "></div>
            </div>
            <div className="nav_box_text">
              <div className="nav_text_h ">B стенд</div>
              <div className="nav_text_p ">
                Hачинается внутренний осмотр и работа над счетчиком
              </div>
            </div>
          </div>
          <div className="client_nav_box">
            <div className="nav_box_line">
              <div className="nav_box_img_1 "></div>
              <div className="nav_box_img_2 "></div>
            </div>
            <div className="nav_box_text">
              <div className="nav_text_h ">Документация</div>
              <div className="nav_text_p ">
                Hачинается внутренний осмотр и работа над счетчиком
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-10 right">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ClientLayout;
