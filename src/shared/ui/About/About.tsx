import React from "react";
import styles from "./about.module.scss";

const aboutItems = [
  {
    text: "Ми – волонтерська ініціатива Tako,",
    span: "яка займається виробництвом комплектуючих для дронів, зброї та інших важливих рішень для фронту. Використовуючи 3D-друк, ми можемо швидко, точно та дешево виготовляти те, чого бракує нашим захисникам.",
  },
  {
    text: "Наша місія – максимальна ефективність кожної гривні допомоги.",
    span: "Ми націлені не на прибуток, а на результат – безперебійну підтримку підрозділів, які боронять Україну.",
  },
  {
    text: "",
    span: "Усе, що ми робимо, – це результат об’єднання знань, рук та сердець людей, які не можуть стояти осторонь.",
  },
];

const About: React.FC = () => {
  return (
    <div className={styles.aboutContainer} id="about">
      <h1>Про нас</h1>
      <ul>
        {aboutItems.map((item, index) => (
          <li key={index}>
            {item.text && item.text} <span>{item.span}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default About;
