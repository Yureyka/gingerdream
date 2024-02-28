import { Container } from "../Container/Container";
import styles from "./Banner.module.scss";
import { Animated } from "../Animated/Animated";
import mainImg from "../../assets/images/main.webp";

export const Banner = () => {
  return (
    <section className={styles.banner} id="home">
      <Container>
        <div className={styles.content}>
          <div className={styles.image}>
            <Animated
              variants={{
                hidden: { opacity: 0, x: -75 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <img src={mainImg} alt="" />
            </Animated>
          </div>
          <div className={styles.infoWrapper}>
            <Animated
              variants={{
                hidden: { opacity: 0, x: 75 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <div className={styles.info}>
                <h1>GingerDream</h1>
                <p>Пряники, сделанные с любовью</p>
                <a href="#contacts">Заказать сейчас</a>
              </div>
            </Animated>
          </div>
        </div>
      </Container>
    </section>
  );
};
