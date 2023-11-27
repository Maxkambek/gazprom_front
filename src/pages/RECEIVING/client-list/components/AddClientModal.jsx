import plus from "@/assets/plus.svg";

const AddClientModal = () => {
  return (
    <div className="AddClientModal zed">
      <div className="modalTop">
        <h1>Добавить клиент</h1>
      </div>
      <div className="modalBody">
        <div className="formWrap">
          <label htmlFor="Наименование организации:">
            Наименование организации:
          </label>
          <input
            type="text"
            id="Наименование организации:"
            className="form-control"
          />
        </div>
        <div className="formWrap">
          <label htmlFor="Дата">Дата</label>
          <input id="Дата" type="datetime-local" className="form-control" />
        </div>
        <div className="formWrap">
          <label htmlFor="Статус">Статус</label>
          <input type="text" id="Статус" className="form-control" />
        </div>

        <div className="formWrap">
          <label htmlFor="Марка счетчика газа:">Марка счетчика газа:</label>
          <input
            type="text"
            id="Марка счетчика газа:"
            className="form-control"
          />
        </div>

        <div className="formWrap">
          <label htmlFor="Заводские номера: датчик давления:">
            Заводские номера: датчик давления:
          </label>
          <input
            type="text"
            id="Заводские номера: датчик давления:"
            className="form-control"
          />
        </div>

        <div className="formWrap">
          <label htmlFor="датчик температуры:">Датчик температуры:</label>
          <input
            type="text"
            id="датчик температуры:"
            className="form-control"
          />
        </div>

        <div className="formWrap">
          <label htmlFor="Сертификат последней поверки:">
            Сертификат последней поверки:
          </label>
          <select id="Сертификат последней поверки:" className="form-control">
            <option value="есть">есть</option>
            <option value="нет">нет</option>
          </select>
        </div>

        <div className="formWrap">
          <label htmlFor="Паспорта газового счетчика:">
            Паспорта газового счетчика:
          </label>
          <select id="Паспорта газового счетчика:" className="form-control">
            <option value="есть">есть</option>
            <option value="нет">нет</option>
          </select>
        </div>

        <div className="formWrap">
          <label htmlFor="Паспорт блока коррекции:">
            Паспорт блока коррекции:
          </label>
          <select id="Паспорт блока коррекции:" className="form-control">
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
          <select
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
          <select
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
          <select id="блок коррекции ДР" className="form-control">
            <option value="есть">есть</option>
            <option value="нет">нет</option>
          </select>
        </div>

        <div className="formWrap">
          <label htmlFor="ДТ">ДТ</label>
          <select id="ДТ" className="form-control">
            <option value="есть">есть</option>
            <option value="нет">нет</option>
          </select>
        </div>

        <div className="formWrap">
          <label htmlFor="ДД">ДД</label>
          <select id="ДД" className="form-control">
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
          <select
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
          <select id="Визуальные повреждения:" className="form-control">
            <option value="есть">есть</option>
            <option value="нет">нет</option>
          </select>
        </div>

        <div className="formWrap">
          <label htmlFor="Механические повреждения:">
            Механические повреждения:
          </label>
          <select id="Механические повреждения:" className="form-control">
            <option value="есть">есть</option>
            <option value="нет">нет</option>
          </select>
        </div>

        <div className="formWrap">
          <label htmlFor="Заключения:">Заключения:</label>
          <input type="text" id="Заключения:" className="form-control" />
        </div>

        <div className="formWrap">
          <label htmlFor="Показания:">Показания:</label>
          <input type="text" id="Показания:" className="form-control" />
        </div>

        <div className="formWrap">
          <label htmlFor="Счетного механизма:">Счетного механизма:</label>
          <input
            type="text"
            id="Счетного механизма:"
            className="form-control"
          />
        </div>
      </div>

      <div className="modalFooter">
        <button className="btn myBtn d-block w-100">
          <span>
            <img src={plus} alt="" />
          </span>
          Добавить клиент
        </button>
      </div>
    </div>
  );
};

export default AddClientModal;
