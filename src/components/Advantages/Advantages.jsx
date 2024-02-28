import { Container } from "../Container/Container";
import styles from "./Advantages.module.scss";
import ingredients from "../../assets/images/ingredients.svg";
import like from "../../assets/images/like.svg";
import shipping from "../../assets/images/shipping.svg";
import heart from "../../assets/images/heart.svg";
import { Animated } from "../Animated/Animated";

const advantages = [
  {
    title: "Качественные ингредиенты",
    desc: "Тщательно выбираю перед готовкой",
    img: ingredients,
  },
  { title: "Доставка по Керчи", desc: "Быстро и недорого", img: shipping },
  {
    title: "Много довольных клиентов",
    desc: "Которые возращаются за новыми заказами",
    img: like,
  },
  {
    title: "С любовью",
    desc: "Неотъемлемый ингредиент",
    img: heart,
  },
];

export const Advantages = () => {
  return (
    <section className={styles.advantages}>
      <Container>
        <div className={styles.content}>
          {advantages.map((elem, index) => (
            <div key={index} className={styles.itemWrapper}>
              <Animated duration={0.4} delay={0.3 + index / 10}>
                <div className={styles.item}>
                  <div className={styles.image}>
                    <img src={elem.img} alt="" />
                  </div>
                  <span className={styles.title}>{elem.title}</span>
                  <span className={styles.desc}>{elem.desc}</span>
                </div>
              </Animated>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
