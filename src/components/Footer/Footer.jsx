import { Container } from "../Container/Container";
import styles from "./Footer.module.scss";
import logo from "../../assets/images/logo.svg";
import vk from "../../assets/images/vk.svg";
import telegram from "../../assets/images/telegram.svg";

export const Footer = () => {
  return (
    <section className={styles.footer}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <a className={styles.logo} href="/">
              <img src={logo} alt="" />
            </a>
            <nav className={styles.navbar}>
              <ul>
                <li>
                  <a href="#about">Обо мне</a>
                </li>
                <li>
                  <a href="#products">Товары</a>
                </li>
                <li>
                  <a href="#contacts">Контакты</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className={styles.links}>
            <a
              href="https://vk.com/club224843150"
              target="_blank"
              className={styles.linkItem}
            >
              <img src={vk} alt="" />
            </a>
            <a
              href="https://t.me/ginger_dreamm"
              target="_blank"
              className={styles.linkItem}
            >
              <img src={telegram} alt="" />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};
