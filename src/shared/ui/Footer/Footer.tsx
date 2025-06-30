import React from "react";
import styles from "./footer.module.scss";
import Logo from "../Logo/Logo";
import { Envelope } from "@phosphor-icons/react";
import SocialLinks from "../SocialLinks/SocialLinks";
const Footer: React.FC = () => {
  const links = [
    {
      anchor: "",
      text: "Головна",
    },
    {
      anchor: "",
      text: "Для зброї",
    },
    {
      anchor: "",
      text: "Про нас",
    },
    {
      anchor: "",
      text: "Медицина",
    },
    {
      anchor: "",
      text: "Як ми працюємо",
    },
    {
      anchor: "",
      text: "Для рацій",
    },
    {
      anchor: "",
      text: "Партнери",
    },
    {
      anchor: "",
      text: "РЕБ / РЕР",
    },
    {
      anchor: "",
      text: "Відгуки",
    },
    {
      anchor: "",
      text: "Для дронів",
    },
    {
      anchor: "",
      text: "ЗМІ про нас",
    },
  ];

  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSlogan}>
          <Logo theme="light" />
          <h2>
            Розвивайте технології разом із нами — обирайте якісні рішення,
            підтримуйте виробництво та рухайте індустрію вперед!{" "}
          </h2>
        </div>

        <ul className={styles.links}>
          {links.map((item, index) => (
            <li key={index}>
              <a href={item.anchor}>{item.text}</a>
            </li>
          ))}
        </ul>
        <div className={styles.socialLinks}>
          <SocialLinks iconSize={20} />
          <button>
            <Envelope size={24} />
            example@mail.com
          </button>
        </div>
      </div>
      <ul className={styles.links}>
        {links.map((item, index) => (
          <li key={index}>
            <a href={item.anchor}>{item.text}</a>
          </li>
        ))}
      </ul>
      <hr />
      <p>© 2025 TAKO. All rights reserved</p>
    </footer>
  );
};

export default Footer;
