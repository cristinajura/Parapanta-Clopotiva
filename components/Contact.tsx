import React from "react";
import { useTranslation } from "next-i18next";
import styles from "../styles/Home.module.css";
import type { FC } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

const Contact: FC = () => {
  const { t } = useTranslation("contact");

  let isTabletOrPhone = useMediaQuery("(min-width:800px)");

  return (
    <div className={styles.contactPage}>
      <div className={styles.contactBox}>
        <form
          action="mailto:parapanta.transilvania@gmail.com"
          method="post"
          encType="text/plain"
        >
          <div>
            <div
              style={
                isTabletOrPhone
                  ? {
                      display: "flex",
                      justifyContent: "space-evenly",
                    }
                  : {
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }
              }
            >
              <div style={{ display: "flex", flexDirection: "column" }}>
                <label htmlFor="first-name">{t("contactFirstName")}</label>
                <input
                  className={styles.formInput}
                  type="text"
                  id="first-name"
                  name="first-name"
                  required
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <label htmlFor="last-name">{t("contactLastName")}</label>
                <input
                  className={styles.formInput}
                  type="text"
                  id="last-name"
                  name="last-name"
                  required
                />
              </div>
            </div>
            <div
              style={
                isTabletOrPhone
                  ? {
                      display: "flex",
                      justifyContent: "space-evenly",
                    }
                  : {
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }
              }
            >
              <div style={{ display: "flex", flexDirection: "column" }}>
                <label htmlFor="email">{t("contactEmail")}</label>
                <input
                  className={styles.formInput}
                  type="email"
                  id="email"
                  name="email"
                  required
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <label htmlFor="last-name">
                  {t("contactTel")}
                  <small> {t("contactOptional")}</small>
                </label>
                <input
                  className={styles.formInput}
                  type="number"
                  id="telephone"
                  name="telephone"
                />
              </div>
            </div>
          </div>
          <div className={styles.textareaText}>
            <label htmlFor="comments">{t("contactText")}</label>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <textarea
              className={styles.formTextarea}
              id="comments"
              name="comment"
              required
            />
            <button className={styles.formButton} type="submit" value="Send">
              {t("contactBtn")}
            </button>
          </div>
        </form>
      </div>
      <div className={styles.mapBox}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2797.061808344588!2d22.8286137154311!3d45.48870007910121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474e6d7f039fbddf%3A0x28af06712eecc2d7!2sParapanta%20Clopotiva!5e0!3m2!1sen!2sro!4v1670917329481!5m2!1sen!2sro"
          width="100%"
          height="600"
          allowFullScreen={true}
          loading="lazy"
          style={{ border: "none" }}
        />
      </div>
    </div>
  );
};

export default Contact;
