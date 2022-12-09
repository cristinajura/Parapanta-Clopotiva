import React from "react";
import { useTranslation } from "next-i18next";
import styles from "../styles/Home.module.css";
import type { FC } from "react";

const Contact: FC = () => {
  const { t } = useTranslation("contact");

  return (
    <div
      className={styles.cardContainer}
      style={{ background: "var(--contact-color)", color: "white" }}
    >
      <form
        className={styles.formDisplay}
        action="mailto:parapanta.transilvania@gmail.com"
        method="post"
        encType="text/plain"
      >
        <label htmlFor="first-name">{t("contactFirstName")}</label>
        <input
          className={styles.formInput}
          type="text"
          id="first-name"
          name="first-name"
          required
        />
        <label htmlFor="last-name">{t("contactLastName")}</label>
        <input
          className={styles.formInput}
          type="text"
          id="last-name"
          name="last-name"
          required
        />
        <label htmlFor="email">{t("contactEmail")}</label>
        <input
          className={styles.formInput}
          type="email"
          id="email"
          name="email"
          required
        />
        <label htmlFor="last-name">
          {t("contactTel")}
          <small> {t("contactOptional")}</small>
        </label>
        <input
          className={styles.formInput}
          type="text"
          id="telephone"
          name="telephone"
        />
        <label htmlFor="comments">{t("contactText")}</label>
        <textarea
          className={styles.formTextarea}
          id="comments"
          name="comment"
          required
        />
        <button className={styles.formButton} type="submit" value="Send">
          {t("contactBtn")}
        </button>
      </form>
    </div>
  );
};

export default Contact;
