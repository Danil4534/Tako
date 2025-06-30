import {
  CaretDown,
  MagnifyingGlass,
  Minus,
  Plus,
  TrashSimple,
  WarningCircle,
} from "@phosphor-icons/react";
import { useState, useEffect } from "react";
import Header from "../../shared/ui/Header/Header";
import styles from "./formpage.module.scss";
import { useNavigate } from "react-router-dom";
import orderItem from "@assets/orderItem.svg";
import PictureTag from "../../shared/ui/PictureTag/PictureTag";
const FormPage: React.FC = () => {
  type Method = {
    id: number;
    title: string;
    active: boolean;
  };
  const navigate = useNavigate();
  const [methodsForContact, setMethodsForContact] = useState<Method[]>([
    { id: 1, title: "Номер телефону", active: true },
    { id: 2, title: "Viber", active: false },
    { id: 3, title: "Telegram", active: false },
    { id: 4, title: "Whatsup", active: false },
    { id: 5, title: "Signal", active: false },
  ]);

  const [sum, setSum] = useState(0);

  const [orderItems, setOrderItems] = useState([
    {
      id: 1,
      name: "Пристрій швидкого спорядження набоїв",
      price: 10,
      count: 0,
      img: orderItem,
    },
    {
      id: 2,
      name: "Пристрій швидкого спорядження набоїв",
      price: 10,
      count: 0,
      img: orderItem,
    },
    {
      id: 3,
      name: "Пристрій швидкого спорядження набоїв",
      price: 10,
      count: 0,
      img: orderItem,
    },
  ]);

  const handleIncrementCount = (itemId: number) => {
    setOrderItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  const handleDecrementCount = (itemId: number) => {
    setOrderItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId && item.count > 0
          ? { ...item, count: item.count - 1 }
          : item
      )
    );
  };
  const [formData, setFormData] = useState({
    lastName: "",
    name: "",
    middleName: "",
    phoneNumber: "",
    city: "",
    department: "",
    contactValue: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [activeMethod, setActiveMethod] = useState<Method>({
    id: 1,
    title: "Номер телефону",
    active: true,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleMethodToConnect = (id: number) => {
    const updatedMethods = methodsForContact.map((item) => ({
      ...item,
      active: item.id === id,
    }));
    setMethodsForContact(updatedMethods);
    const selected = updatedMethods.find((item) => item.id === id);
    if (selected) {
      setActiveMethod(selected);
      setFormData((prev) => ({ ...prev, contactValue: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    if (!formData.lastName.trim()) newErrors.lastName = "Прізвище обов'язкове";
    if (!formData.name.trim()) newErrors.name = "Ім’я обов'язкове";
    if (!formData.phoneNumber.trim())
      newErrors.phoneNumber = "Введіть номер телефону";
    if (!formData.city.trim()) newErrors.city = "Місто обов'язкове";
    if (!formData.department.trim())
      newErrors.department = "Відділення обов'язкове";
    if (!formData.contactValue.trim())
      newErrors.contactValue = `Поле для "${activeMethod.title}" обов'язкове`;
    if (!formData.middleName.trim())
      newErrors.middleName = "По батькові обов'язково";
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      navigate("/success");
      console.log("formData:", formData);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    const total = orderItems.reduce(
      (acc, item) => acc + item.price * item.count,
      0
    );
    setSum(total);
  }, [orderItems]);
  return (
    <>
      <Header />
      <section className={styles.section}>
        <div className={`${styles.title} ${styles.box}`}>
          <h1>Оформити замовлення</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className={styles.formLeftSide}>
            <div className={`${styles.userContacts} ${styles.box}`}>
              <h2>Контакти замовника</h2>
              <div className={styles.userData}>
                <div>
                  <label htmlFor="lastName">Прізвище</label>
                  <input
                    type="text"
                    placeholder="Введіть прізвище"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                  {errors.lastName && (
                    <div className={styles.errorMessage}>
                      <span className={styles.error}>
                        <WarningCircle size={24} />
                        Помилка!
                      </span>
                      <span>{errors.lastName}</span>
                    </div>
                  )}
                </div>
                <div>
                  <label htmlFor="name">Ім'я</label>
                  <input
                    type="text"
                    placeholder="Введіть ім'я"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && (
                    <div className={styles.errorMessage}>
                      <span className={styles.error}>
                        <WarningCircle size={24} />
                        Помилка!
                      </span>
                      <span>{errors.name}</span>
                    </div>
                  )}
                </div>
                <div>
                  <label htmlFor="middleName">По батькові</label>
                  <input
                    type="text"
                    placeholder="Введіть"
                    name="middleName"
                    value={formData.middleName}
                    onChange={handleChange}
                  />
                  {errors.middleName && (
                    <div className={styles.errorMessage}>
                      <span className={styles.error}>
                        {" "}
                        <WarningCircle size={24} />
                        Помилка!
                      </span>
                      <span>{errors.middleName}</span>
                    </div>
                  )}
                </div>
                <div>
                  <label htmlFor="phoneNumber">Номер телефону</label>
                  <input
                    type="text"
                    placeholder="+380"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                  />
                  {errors.phoneNumber && (
                    <div className={styles.errorMessage}>
                      <span className={styles.error}>
                        {" "}
                        <WarningCircle size={24} />
                        Помилка!
                      </span>
                      <span>{errors.phoneNumber}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className={`${styles.deliveryInfo} ${styles.box}`}>
              <h2>Доставка</h2>
              <div className={styles.userData}>
                <div className={styles.userDataSearch}>
                  <label>Місто / Населений пукт</label>
                  <div className={styles.inputSearch}>
                    <input
                      type="text"
                      placeholder="Введіть"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                    />
                    <MagnifyingGlass size={20} className={styles.searchIcon} />
                  </div>
                  {errors.city && (
                    <div className={styles.errorMessage}>
                      <span className={styles.error}>
                        {" "}
                        <WarningCircle size={24} />
                        Помилка!
                      </span>
                      <span>{errors.city}</span>
                    </div>
                  )}
                </div>
                <div>
                  <label>Номер відділення</label>
                  <div className={styles.selectDepartment}>
                    <input
                      type="text"
                      placeholder="Оберіть номер відділення НП"
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                    />
                    <CaretDown size={24} className={styles.selectCaret} />
                  </div>
                  {errors.department && (
                    <div className={styles.errorMessage}>
                      <span className={styles.error}>
                        {" "}
                        <WarningCircle size={24} />
                        Помилка!
                      </span>
                      <span>{errors.department}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className={`${styles.methodsContact} ${styles.box}`}>
              <h2>Зручний метод зв'язку</h2>
              <div className={styles.methods}>
                {methodsForContact.map((item, index) => (
                  <label
                    htmlFor={`contact-${index}`}
                    className={`${styles.radioLabel} ${
                      item.active ? styles.active : ""
                    }`}
                    key={index}
                    onClick={() => handleMethodToConnect(item.id)}
                  >
                    <input
                      type="radio"
                      id={`contact-${index}`}
                      name="contact"
                      value={item.title}
                      checked={item.active}
                      readOnly
                      className={styles.radioInput}
                      defaultChecked={index === 1}
                    />
                    {item.title}
                  </label>
                ))}
              </div>

              <div className={styles.typeOfConnect}>
                <label htmlFor="contactValue">{activeMethod?.title}</label>
                <input
                  type="text"
                  name="contactValue"
                  placeholder={activeMethod?.title}
                  value={formData.contactValue}
                  onChange={handleChange}
                />
                {errors.contactValue && (
                  <div className={styles.errorMessage}>
                    <span className={styles.error}>
                      <WarningCircle size={24} />
                      Помилка!
                    </span>
                    <span>{errors.contactValue}</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className={`${styles.formRightSide} ${styles.box}`}>
            <h2>Передзамовлення</h2>
            <div className={styles.orderItems}>
              {orderItems.map((item, index: number) => (
                <div className={styles.orderItem} key={index}>
                  <div className={styles.item}>
                    <PictureTag src={item.img} alt="item" />
                    <div className={styles.itemContentUp}>
                      <p>{item.name}</p>
                      <TrashSimple size={24} className={styles.trash} />
                    </div>
                  </div>
                  <div className={styles.itemContent}>
                    <div className={styles.itemContentUp}>
                      <p>{item.name}</p>
                      <TrashSimple size={24} className={styles.trash} />
                    </div>

                    <div className={styles.itemContentDown}>
                      <div className={styles.itemCounter}>
                        <Minus
                          size={24}
                          onClick={() => handleDecrementCount(item.id)}
                        />
                        <div>{item.count}</div>
                        <Plus
                          size={24}
                          onClick={() => handleIncrementCount(item.id)}
                        />
                      </div>
                      <div className={styles.itemPrice}>
                        <p>
                          {item.price},00<span>грн</span>
                        </p>
                        <p>собівартість за од.</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <hr />
            <div className={styles.cost}>
              <p>собівартість виробів:</p>
              <h1>
                {sum},00<span>грн</span>
              </h1>
              <div>
                🪖 Для військових —<span> безкоштовно</span>
              </div>
            </div>
            <hr />
            <button
              type="submit"
              className={`${styles.submitBtn} ${styles.btn}`}
            >
              Підтвердити
            </button>{" "}
            <button
              type="submit"
              className={` ${styles.btnSupport} ${styles.btn}`}
            >
              Підтвердити та підтримати
            </button>
            <div className={styles.subtitle}>
              <p>
                Залиште заявку — ми зв’яжемось із вами для уточнення деталей і
                підтвердження замовлення. Жодної передоплати до підтвердження.
                Все просто і чесно.
              </p>
            </div>
          </div>
        </form>

        <footer>
          <p>© 2025 TAKO. All rights reserved</p>
        </footer>
      </section>
    </>
  );
};

export default FormPage;
