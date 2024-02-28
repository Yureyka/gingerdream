import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Container } from "../Container/Container";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import styles from "./Contacts.module.scss";

export const Contacts = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    telegram: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (field, value) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSendForm = () => {
    setIsSending(true);

    emailjs
      .send(
        "service_1a8iqto",
        "template_ppxdsu6",
        { ...form, to_email: "" },
        {
          publicKey: "F51z5XZW3ihXhb8ZF",
        }
      )
      .then(
        () => {
          setIsSending(false);
          alert(
            "Ваше обращаение отправлено! В скором времени мы с вами свяжемся"
          );
        },
        (error) => {
          setIsSending(false);
          alert(`Ошибка ${error.text}`);
        }
      );
  };

  return (
    <section className={styles.contacts} id="contacts">
      <Container>
        <div className={styles.flex}>
          <div className={styles.info}>
            <div className={styles.contact}>
              <p>ТЕЛЕФОН</p>
              <a href="tel:+79785710626">+7 (978) 571-06-26</a>
            </div>
            <div className={styles.contact}>
              <p>EMAIL</p>
              <a href="mailto:ginger.dreammm@gmail.com">
                ginger.dreammm@gmail.com
              </a>
            </div>
            <div className={styles.contact}>
              <p>TELEGRAM</p>
              <a href="https://t.me/gingerdream" target="_blank">
                @gingerdream
              </a>
            </div>
          </div>
          <form className={styles.form}>
            <p>НАПИСАТЬ НАМ</p>
            <p className={styles.tip}>
              Вы можете воспользоваться формой для связи и мы вам ответим так
              быстро, как только сможем
            </p>
            <div className={styles.fields}>
              <Input
                id="name"
                name="name"
                value={form.name}
                onChange={(val) => {
                  handleChange("name", val);
                }}
                label="Имя"
              />
              <Input
                id="phone"
                name="phone"
                value={form.phone}
                onChange={(val) => {
                  handleChange("phone", val);
                }}
                label="Номер телефона"
              />
              <div className={styles.orFields}>
                <Input
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={(val) => {
                    handleChange("email", val);
                  }}
                  label="Email"
                />
                <p>или</p>
                <Input
                  id="telegram"
                  name="telegram"
                  value={form.telegram}
                  onChange={(val) => {
                    handleChange("telegram", val);
                  }}
                  label="Telegram"
                />
              </div>
              <Input
                id="message"
                name="message"
                value={form.message}
                isTextArea
                onChange={(val) => {
                  handleChange("message", val);
                }}
                label="Сообщение"
              />
            </div>
            <Button
              disabled={
                !(
                  !!form.name &&
                  !!form.phone &&
                  (!!form.email || !!form.telegram)
                )
              }
              onClick={(e) => {
                e.preventDefault();
                handleSendForm();
                setForm({
                  name: "",
                  phone: "",
                  telegram: "",
                  email: "",
                  message: "",
                });
              }}
            >
              {isSending ? "Отправка..." : "Связаться"}
            </Button>
          </form>
        </div>
      </Container>
    </section>
  );
};
