import { useState } from "react";
import SocialLinks from "../SocialLinks/SocialLinks";
import styles from "./responses.module.scss";
import Image from "@assets/image 9.svg";
import PictureTag from "../PictureTag/PictureTag";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
const Responses: React.FC = () => {
  const [responses, _] = useState([
    {
      id: 1,
      img: Image,
    },
    {
      id: 2,
      img: Image,
    },
    {
      id: 3,
      img: Image,
    },
    {
      id: 4,
      img: Image,
    },
  ]);

  return (
    <div className={styles.responsesContainer}>
      <div className={styles.responsesHeader}>
        <h1>Відгуки про все</h1>
        <hr />
        <div className={styles.subtitle}>
          <p>
            Слідкуйте за нами у Facebook та Instagram, щоб бути в курсі всіх
            оновлень, бачити нашу діяльність у дії та разом наближати перемогу!
            💙💛
          </p>
          <SocialLinks className={styles.socialLinksSize} iconSize={28} />
        </div>
      </div>
      <div className={styles.responseVideo}>
        {responses.map((item) => (
          <PictureTag src={item.img} alt="pictures" />
        ))}
      </div>
      <div className={styles.nav}>
        <button>
          <CaretLeft size={32} />
          Назад
        </button>
        <button>
          Вперед
          <CaretRight size={32} />
        </button>
      </div>
    </div>
  );
};
export default Responses;
