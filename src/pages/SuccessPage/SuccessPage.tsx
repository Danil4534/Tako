import { Link } from "react-router-dom";
import Header from "../../shared/ui/Header/Header";
import styles from "./successPage.module.scss";
import { ArrowUpRightIcon } from "@phosphor-icons/react";
const SuccessPage: React.FC = () => {
  return (
    <>
      <Header />
      <section className={styles.section}>
        <div>
          <h1>Успішно!</h1>
          <p>
            Дякуємо! Наш волонтер скоро зв’яжеться з вами для підтвердження
            деталей.
          </p>
        </div>
        <div className={styles.navBlock}>
          <Link to={"/"} className={styles.btn}>
            На головну
            <ArrowUpRightIcon size={28} weight="bold" className={styles.icon} />
          </Link>
          <Link to={""} className={styles.btn}>
            Підтримати ТА-КО{" "}
            <ArrowUpRightIcon size={28} weight="bold" className={styles.icon} />
          </Link>
        </div>
      </section>
    </>
  );
};
export default SuccessPage;
