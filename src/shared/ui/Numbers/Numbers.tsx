import { ArrowUpRight, House } from "@phosphor-icons/react";
import styles from "./numbers.module.scss";
import PictureTag from "../PictureTag/PictureTag";
import ItemForFirstBox from "@assets/item.png";
import Printer from "@assets/printersvg.svg";
import GlassCan from "@assets/GlassCan.svg";
const Numbers: React.FC = () => {
  return (
    <div className={styles.numbersContainer}>
      <div className={styles.numbersTitle}>
        <h1>Ми у цифрах</h1>
        <p>
          За кожною цифрою – історія. За кожним виробом – врятоване життя,
          збережене обладнання або виконане бойове завдання.
        </p>
      </div>
      <hr />
      <div className={styles.statisticBoxUp}>
        <div className={styles.boxUp}>
          <div className={styles.boxContent}>
            <h1>
              10 043<span>од</span>
            </h1>
            <p>Виробів відправлено</p>
          </div>
          <PictureTag
            src={ItemForFirstBox}
            alt="item"
            className={styles.item}
          />
        </div>
        <div className={styles.boxUp}>
          <div className={styles.yellowBox}>
            <div className={styles.blueBox}></div>
          </div>
        </div>
        <div className={styles.boxUp}>
          <div className={styles.boxContent}>
            <h1>
              432 100<span>грн</span>
            </h1>
            <p>Витрачено на виготовлення</p>
          </div>
          <PictureTag src={Printer} alt="item" className={styles.item} />
        </div>
        <div className={styles.boxUp}>
          <div className={styles.boxContent}>
            <h1>
              173 213<span>грн</span>
            </h1>
            <p>Отримано донатами</p>
          </div>
          <PictureTag src={GlassCan} alt="item" className={styles.item} />
        </div>
      </div>
      <div className={styles.statisticBoxDown}>
        <div className={styles.boxDown}>
          <div className={styles.boxContent}>
            <h1>
              730<span>км</span>
            </h1>
            <p>Пластикової нитки перетворено на допомогу</p>
          </div>
        </div>
        <div className={styles.boxDown}>
          {" "}
          <div className={styles.boxContent}>
            <h1>
              90 000<span>од</span>
            </h1>
            <p>Посилок відправлено</p>
          </div>
        </div>
        <div className={styles.boxDown}>
          <div className={styles.boxContent}>
            <h1>
              8 760<span>год</span>
            </h1>
            <p>Людської праці вкладено (і це лише початок!)</p>
          </div>
        </div>
      </div>
      <button className={styles.bannerBtn}>
        <span>Збільшити цифри</span>
        <House size={28} weight="fill" className={styles.bannerBtnHouseIcon} />
        <ArrowUpRight size={28} className={styles.bannerBtnArrowIcon} />
      </button>
    </div>
  );
};
export default Numbers;
