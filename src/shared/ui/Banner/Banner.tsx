import PictureTag from "../PictureTag/PictureTag";
import DroneImg from "@assets/drone.svg";
import styles from "./banner.module.scss";
import { ArrowUpRight, House } from "@phosphor-icons/react";
const Banner: React.FC = () => {
  return (
    <>
      <div className={styles.banner}>
        <PictureTag
          src={DroneImg}
          alt="BannerWithDrone"
          className={styles.droneBg}
        />
        <div className={styles.bannerContainer}>
          <div className={styles.bannerContent}>
            <h1>Технології у тилу – сила на передовій</h1>
            <button className={styles.bannerBtn}>
              <span>Підтримати TAKO</span>
              <House
                size={28}
                weight="fill"
                className={styles.bannerBtnHouseIcon}
              />
              <ArrowUpRight size={28} className={styles.bannerBtnArrowIcon} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Banner;
