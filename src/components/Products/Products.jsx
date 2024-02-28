import { Animated } from "../Animated/Animated";
import { Container } from "../Container/Container";
import styles from "./Products.module.scss";
import product_1 from "../../assets/images/product_1.jpg";
import product_2 from "../../assets/images/product_2.jpg";
import product_3 from "../../assets/images/product_3.jpg";

const products = [
  {
    title: "Новогодняя ёлочка",
    img: product_1,
  },
  {
    title: "Звезды на 23 февраля",
    img: product_2,
  },
  {
    title: "Рождественские",
    img: product_3,
  },
];

export const Products = () => {
  return (
    <Container>
      <section className={styles.products} id="products">
        <h3>Мои работы</h3>
        <div className={styles.gallery}>
          {products.map((elem, index) => {
            return (
              <Animated key={index}>
                <div className={styles.product}>
                  <div className={styles.image}>
                    <img src={elem.img} alt="" />
                  </div>
                  <div className={styles.info}>
                    <p>{elem.title}</p>
                  </div>
                </div>
              </Animated>
            );
          })}
        </div>
      </section>
    </Container>
  );
};
