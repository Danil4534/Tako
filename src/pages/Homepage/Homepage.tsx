import React, { useEffect } from "react";
import Header from "../../shared/ui/Header/Header";
import Banner from "../../shared/ui/Banner/Banner";
import styles from "./homapage.module.scss";
import About from "../../shared/ui/About/About";
import Footer from "../../shared/ui/Footer/Footer";
import Work from "../../shared/ui/Work/Work";
import Numbers from "../../shared/ui/Numbers/Numbers";
import Responses from "../../shared/ui/Responses/Responses";
const Homepage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.section}>
          <Banner />
        </section>
        <section className={styles.section} id="about">
          <About />
        </section>
        <section className={styles.section} id="numbers">
          <Numbers />
        </section>
        <section className={styles.section} id="work">
          <Work />
        </section>
        <section className={styles.section} id="responses">
          <Responses />
        </section>
        <Footer />
      </main>
    </>
  );
};

export default Homepage;
