import { Container } from "../Container/Container";
import styles from "./About.module.scss";

export const About = () => {
  return (
    <section className={styles.about} id="about">
      <Container>
        <article className={styles.content}>
          <h3>Обо мне</h3>
          <p>
            Привет, меня зовут Ольга! Однажды я открыла для себя мир
            удивительных имбирных пряников, а сейчас делаю их на заказ.
          </p>
          <p>
            Когда я готовлю свои изделия, я вкладываю в них всю душу. Каждый
            пряник - это маленькое произведение искусства, и я горжусь тем, что
            могу принести радость и удовольствие своим клиентам.
          </p>
        </article>
      </Container>
    </section>
  );
};
