import React, { useState } from "react";
import styles from "@shared/ui/Header/header.module.scss";
import {
  ArrowUpRight,
  Backpack,
  CaretDown,
  List,
  X,
} from "@phosphor-icons/react";
import Logo from "../Logo/Logo";
import PictureTag from "../PictureTag/PictureTag";
import ForWeaponImage from "@assets/ForWeapon.svg";
import Medkits from "@assets/Medkit.svg";
import ReadioSet from "@assets/radio_set.svg";
import DroneImg from "@assets/droneSet.svg";
import MobileLogo from "@assets/MobileLogo.svg";
import SocialLinks from "../SocialLinks/SocialLinks";
import YBox from "@assets/YBox.svg";
import WBox from "@assets/WBox.svg";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const navigate = useNavigate();

  const [isOpen, setOpen] = useState<boolean>(false);
  type Link = {
    title: string;
    anchor: string;
  };
  const links: Link[] = [
    { title: "Про нас", anchor: "#about" },
    { title: "Як ми працюємо", anchor: "#work" },
    { title: "Партнери", anchor: "" },
    { title: "Відгуки", anchor: "#responses" },
  ];

  const cards = [
    {
      image: ForWeaponImage,
      title: "Для зброї",
    },
    {
      image: Medkits,
      title: "Медицина",
    },
    {
      image: ReadioSet,
      title: "РЕБ / РЕР ",
    },
    {
      image: DroneImg,
      title: "Для дронів",
    },
    {
      image: DroneImg,
      title: "Для дронів",
    },
  ];
  const navigateLink = () => {
    navigate("/Tako/form");
  };
  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.headerBurgerContainer}>
            {isOpen ? (
              <X
                size={32}
                className={styles.burger}
                onClick={() => setOpen(!isOpen)}
              />
            ) : (
              <List
                size={32}
                className={styles.burger}
                onClick={() => setOpen(!isOpen)}
              />
            )}

            <Logo className={styles.Logo} />
            <PictureTag
              src={MobileLogo}
              alt="mobileLogo"
              className={styles.mobLogo}
            ></PictureTag>
          </div>
          <button
            className={styles.buttonSelect}
            onClick={() => setOpen(!isOpen)}
          >
            Вироби
            {!isOpen ? (
              <>
                <CaretDown size={20} />
              </>
            ) : (
              <>
                <X size={20} />
              </>
            )}
          </button>
          <nav>
            <ul>
              {links.map((link: Link, index: number) => (
                <li key={index}>
                  <a href={link.anchor}>{link.title}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div className={styles.headerBtns}>
            <button className={styles.btnConnect}>Зв'язатися</button>
            <button className={styles.btnSupport}>Підтримати</button>
            <button className={styles.btnCheckout}>
              <Backpack size={20} />
              <span
                className={styles.btnContent}
                onClick={() => navigateLink()}
              >
                Передзамовлення
              </span>
              <div className={styles.counter}>
                <p>
                  9 <span>+</span>
                </p>
              </div>
            </button>
          </div>
        </div>
        <div
          className={
            isOpen
              ? `${styles.headerMenuBackground} ${styles.open}  `
              : `${styles.headerMenuBackground}`
          }
        >
          <div
            className={
              isOpen == true
                ? `${styles.headerMenu} ${styles.open}  `
                : `${styles.headerMenu}`
            }
          >
            <div className={styles.mobNav} style={{ display: "none" }}>
              <div className={styles.box}>
                <h2>Вироби</h2>
                <div className={styles.boxNav}>
                  {cards.map(
                    (card: { image: string; title: string }, index: number) => (
                      <div key={index} className={styles.card}>
                        <h3>{card.title}</h3>
                        <ArrowUpRight size={28} />
                      </div>
                    )
                  )}
                </div>
              </div>
              <div className={styles.box}>
                <ul>
                  <li>
                    <a href="">Головна</a>
                  </li>
                  {links.map((link: Link, index: number) => (
                    <li key={index}>
                      <a href={link.anchor}>{link.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.box}>
                <SocialLinks iconSize={20} className={styles.socialLinksMob} />
                <button className={styles.bannerBtn}>Зв'язатися</button>
              </div>
            </div>

            <div className={styles.cardsContainer}>
              {cards.map(
                (card: { image: string; title: string }, index: number) => (
                  <div key={index} className={styles.card}>
                    <div className={styles.cardUp}>
                      <div className={styles.cardBox}>
                        {index % 2 !== 0 ? (
                          <PictureTag src={WBox} alt=""></PictureTag>
                        ) : (
                          <PictureTag src={YBox} alt=""></PictureTag>
                        )}
                      </div>
                      <div className={styles.cardFilter}></div>
                      <PictureTag
                        src={card.image}
                        alt={card.title}
                        className={styles.title}
                      />
                    </div>
                    <div className={styles.cardDown}>
                      <h3>{card.title}</h3>
                      <ArrowUpRight size={28} />
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
