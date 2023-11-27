import { useState } from "react";

const SpecialistCliestListPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="SpecialistCliestListPage RightStyle">
        <h1>Список клиентов</h1>
        <div className="filterWrap FilterStyle">
          <div className="filterBtn">Все (20 000)</div>
          <div className="filterBtn active">Сегодня (50)</div>
          <div className="filterBtn">Вчера (60)</div>
          <div className="filterBtn">Неделя (300)</div>
          <div className="filterBtn">Месяц (1 000)</div>
          <div className="filterBtn">Год (12 000) </div>
        </div>

        <table className="table TableStyle">
          <thead>
            <tr>
              <td>№</td>
              <td>Наименование организации</td>
              <td>Дата</td>
              <td>Марка счетчика газа</td>
              <td>Заводские номера</td>
              <td>Статус</td>
            </tr>
          </thead>
          <tbody>
            <tr onClick={() => setIsOpen(true)} className="">
              <th>1</th>
              <th>Янги хайот тумани 329-мактаб</th>
              <th>01.11.2023 16:56</th>
              <th>Ultramag G-100 № 01912</th>
              <th>№ 466863</th>
              <th className="status status-green">Оплаченно</th>
            </tr>
            <tr className="">
              <th>2</th>
              <th>Янги хайот тумани 329-мактаб</th>
              <th>01.11.2023 16:56</th>
              <th>Ultramag G-100 № 01912</th>
              <th>№ 466863</th>
              <th className="status status-red">НЕ ОПЛАЧЕННО</th>
            </tr>
            <tr className="">
              <th>2</th>
              <th>Янги хайот тумани 329-мактаб</th>
              <th>01.11.2023 16:56</th>
              <th>Ultramag G-100 № 01912</th>
              <th>№ 466863</th>
              <th className="status status-red">НЕ ОПЛАЧЕННО</th>
            </tr>
            <tr className="">
              <th>2</th>
              <th>Янги хайот тумани 329-мактаб</th>
              <th>01.11.2023 16:56</th>
              <th>Ultramag G-100 № 01912</th>
              <th>№ 466863</th>
              <th className="status status-red">НЕ ОПЛАЧЕННО</th>
            </tr>
            <tr className="">
              <th>2</th>
              <th>Янги хайот тумани 329-мактаб</th>
              <th>01.11.2023 16:56</th>
              <th>Ultramag G-100 № 01912</th>
              <th>№ 466863</th>
              <th className="status status-red">НЕ ОПЛАЧЕННО</th>
            </tr>
            <tr className="">
              <th>2</th>
              <th>Янги хайот тумани 329-мактаб</th>
              <th>01.11.2023 16:56</th>
              <th>Ultramag G-100 № 01912</th>
              <th>№ 466863</th>
              <th className="status status-red">НЕ ОПЛАЧЕННО</th>
            </tr>
            <tr className="">
              <th>2</th>
              <th>Янги хайот тумани 329-мактаб</th>
              <th>01.11.2023 16:56</th>
              <th>Ultramag G-100 № 01912</th>
              <th>№ 466863</th>
              <th className="status status-red">НЕ ОПЛАЧЕННО</th>
            </tr>
            <tr className="">
              <th>2</th>
              <th>Янги хайот тумани 329-мактаб</th>
              <th>01.11.2023 16:56</th>
              <th>Ultramag G-100 № 01912</th>
              <th>№ 466863</th>
              <th className="status status-red">НЕ ОПЛАЧЕННО</th>
            </tr>
            <tr className="">
              <th>2</th>
              <th>Янги хайот тумани 329-мактаб</th>
              <th>01.11.2023 16:56</th>
              <th>Ultramag G-100 № 01912</th>
              <th>№ 466863</th>
              <th className="status status-red">НЕ ОПЛАЧЕННО</th>
            </tr>
            <tr className="">
              <th>2</th>
              <th>Янги хайот тумани 329-мактаб</th>
              <th>01.11.2023 16:56</th>
              <th>Ultramag G-100 № 01912</th>
              <th>№ 466863</th>
              <th className="status status-red">НЕ ОПЛАЧЕННО</th>
            </tr>
            <tr className="">
              <th>2</th>
              <th>Янги хайот тумани 329-мактаб</th>
              <th>01.11.2023 16:56</th>
              <th>Ultramag G-100 № 01912</th>
              <th>№ 466863</th>
              <th className="status status-red">НЕ ОПЛАЧЕННО</th>
            </tr>
            <tr className="">
              <th>2</th>
              <th>Янги хайот тумани 329-мактаб</th>
              <th>01.11.2023 16:56</th>
              <th>Ultramag G-100 № 01912</th>
              <th>№ 466863</th>
              <th className="status status-red">НЕ ОПЛАЧЕННО</th>
            </tr>
            <tr className="">
              <th>2</th>
              <th>Янги хайот тумани 329-мактаб</th>
              <th>01.11.2023 16:56</th>
              <th>Ultramag G-100 № 01912</th>
              <th>№ 466863</th>
              <th className="status status-red">НЕ ОПЛАЧЕННО</th>
            </tr>
          </tbody>
        </table>
      </div>

      <div className={`ModalStyle ${isOpen && "active"}`}>
        <div className="ClientModal zed">
          <div className="modalTop">
            <h1>Данные клиента</h1>
          </div>
          <div className="modalBody">
            <div className="formWrap">
              <label htmlFor="Наименование организации:">
                Наименование организации:
              </label>
              <input  disabled
                type="text"
                id="Наименование организации:"
                className="form-control"
              />
            </div>
            <div className="formWrap">
              <label htmlFor="Дата">Дата</label>
              <input  disabled id="Дата" type="datetime-local" className="form-control" />
            </div>
            <div className="formWrap">
              <label htmlFor="Статус">Статус</label>
              <input  disabled type="text" id="Статус" className="form-control" />
            </div>

            <div className="formWrap">
              <label htmlFor="Марка счетчика газа:">Марка счетчика газа:</label>
              <input  disabled
                type="text"
                id="Марка счетчика газа:"
                className="form-control"
              />
            </div>

            <div className="formWrap">
              <label htmlFor="Заводские номера: датчик давления:">
                Заводские номера: датчик давления:
              </label>
              <input  disabled
                type="text"
                id="Заводские номера: датчик давления:"
                className="form-control"
              />
            </div>

            <div className="formWrap">
              <label htmlFor="датчик температуры:">Датчик температуры:</label>
              <input  disabled
                type="text"
                id="датчик температуры:"
                className="form-control"
              />
            </div>

            <div className="formWrap">
              <label htmlFor="Сертификат последней поверки:">
                Сертификат последней поверки:
              </label>
              <select  disabled
                id="Сертификат последней поверки:"
                className="form-control"
              >
                <option value="есть">есть</option>
                <option value="нет">нет</option>
              </select>
            </div>

            <div className="formWrap">
              <label htmlFor="Паспорта газового счетчика:">
                Паспорта газового счетчика:
              </label>
              <select  disabled id="Паспорта газового счетчика:" className="form-control">
                <option value="есть">есть</option>
                <option value="нет">нет</option>
              </select>
            </div>

            <div className="formWrap">
              <label htmlFor="Паспорт блока коррекции:">
                Паспорт блока коррекции:
              </label>
              <select  disabled id="Паспорт блока коррекции:" className="form-control">
                <option value="есть">есть</option>
                <option value="нет">нет</option>
              </select>
            </div>

            <div className="formWrap">
              <label
                htmlFor="Акт (Рай.газ, гор.газ, обл.газ) о снятии счетчик газа на гос. поверку с показаниями
счетчика, печатью или штампом:"
              >
                Акт (Рай.газ, гор.газ, обл.газ) о снятии счетчик газа на гос.
                поверку с показаниями счетчика, печатью или штампом:
              </label>
              <select  disabled
                id="Акт (Рай.газ, гор.газ, обл.газ) о снятии счетчик газа на гос. поверку с показаниями
счетчика, печатью или штампом:"
                className="form-control"
              >
                <option value="есть">есть</option>
                <option value="нет">нет</option>
              </select>
            </div>

            <div className="formWrap">
              <label
                htmlFor="Техническое состояние счетчика при поступлении в метрологический центр «GAZ TEXNO PRIBOR» МЧЖ.
Наличие пломб: счетный механизм"
              >
                Техническое состояние счетчика при поступлении в метрологический
                центр «GAZ TEXNO PRIBOR» МЧЖ. Наличие пломб: счетный механизм
              </label>
              <select  disabled
                id="Техническое состояние счетчика при поступлении в метрологический центр «GAZ TEXNO PRIBOR» МЧЖ.
Наличие пломб: счетный механизм"
                className="form-control"
              >
                <option value="есть">есть</option>
                <option value="нет">нет</option>
              </select>
            </div>

            <div className="formWrap">
              <label htmlFor="блок коррекции ДР">блок коррекции ДР</label>
              <select  disabled id="блок коррекции ДР" className="form-control">
                <option value="есть">есть</option>
                <option value="нет">нет</option>
              </select>
            </div>

            <div className="formWrap">
              <label htmlFor="ДТ">ДТ</label>
              <select  disabled id="ДТ" className="form-control">
                <option value="есть">есть</option>
                <option value="нет">нет</option>
              </select>
            </div>

            <div className="formWrap">
              <label htmlFor="ДД">ДД</label>
              <select  disabled id="ДД" className="form-control">
                <option value="есть">есть</option>
                <option value="нет">нет</option>
              </select>
            </div>

            <div className="formWrap">
              <label
                htmlFor="Er 3000000
Внештатные ситуации:"
              >
                Er 3000000 Внештатные ситуации:
              </label>
              <select  disabled
                id="Er 3000000
Внештатные ситуации:"
                className="form-control"
              >
                <option value="есть">есть</option>
                <option value="нет">нет</option>
              </select>
            </div>

            <div className="formWrap">
              <label htmlFor="Визуальные повреждения:">
                Визуальные повреждения:
              </label>
              <select  disabled id="Визуальные повреждения:" className="form-control">
                <option value="есть">есть</option>
                <option value="нет">нет</option>
              </select>
            </div>

            <div className="formWrap">
              <label htmlFor="Механические повреждения:">
                Механические повреждения:
              </label>
              <select  disabled id="Механические повреждения:" className="form-control">
                <option value="есть">есть</option>
                <option value="нет">нет</option>
              </select>
            </div>

            <div className="formWrap">
              <label htmlFor="Заключения:">Заключения:</label>
              <input  disabled type="text" id="Заключения:" className="form-control" />
            </div>

            <div className="formWrap">
              <label htmlFor="Показания:">Показания:</label>
              <input  disabled type="text" id="Показания:" className="form-control" />
            </div>

            <div className="formWrap">
              <label htmlFor="Счетного механизма:">Счетного механизма:</label>
              <input  disabled
                type="text"
                id="Счетного механизма:"
                className="form-control"
              />
            </div>
          </div>

          <div className="modalFooter">
            <button className="btn myBtn d-block w-100">Отправить</button>
          </div>
        </div>
        <div onClick={() => setIsOpen(false)} className="close"></div>
      </div>
    </>
  );
};

export default SpecialistCliestListPage;
