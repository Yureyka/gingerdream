import { useState, useEffect } from "react";
import clsx from "clsx";
import { Container } from "../Container/Container";
import styles from "./Header.module.scss";
import logo from "../../assets/images/logo.svg";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
      setIsOpen(false);
    } else {
      setIsMobile(false);
      setIsOpen(false);
    }
  };

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Container>
      <header className={styles.header}>
        <a className={styles.logo} href="/">
          <img src={logo} alt="" />
        </a>
        {isMobile ? (
          <div>
            <nav className={styles.mobileNavbar}>
              <button
                className={clsx(styles.burgerBtn, {
                  [styles.isOpen]: isOpen,
                })}
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                <div />
                <div />
                <div />
              </button>
              <ul
                className={clsx(styles.mobileMenu, {
                  [styles.isOpen]: isOpen,
                })}
              >
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
        ) : (
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
        )}
      </header>
    </Container>
  );
};
