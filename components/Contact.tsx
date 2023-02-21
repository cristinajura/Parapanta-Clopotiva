import React, { useState } from "react";
import { useTranslation } from "next-i18next";
import styles from "../styles/Home.module.css";
import type { FC } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useSnackbar } from "notistack";

const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const Contact: FC = () => {
  const { t } = useTranslation("contact");
  let isTabletOrPhone = useMediaQuery("(min-width:800px)");
  const { enqueueSnackbar } = useSnackbar();

  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [nickname, setNickname] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const data = { first, last, nickname, email, telephone, message };

    if (
      nickname === "" &&
      first !== "" &&
      last !== "" &&
      email.match(mailformat) &&
      message !== ""
    ) {
      fetch("/api/secureContactForm", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((res) => {
        if (res.status === 200) {
          enqueueSnackbar(t("contactSuccess"), { variant: "success" });
          setFirst("");
          setLast("");
          setNickname("");
          setEmail("");
          setTelephone("");
          setMessage("");
        }
      });
    } else {
      enqueueSnackbar(t("contactError"), {
        variant: "info",
      });
    }
  };

  return (
    <div className={styles.contactPage}>
      <div className={styles.contactBox}>
        <form>
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
                <label htmlFor="first">{t("contactFirstName")}</label>
                <input
                  className={styles.formInput}
                  required
                  type="text"
                  id="first"
                  name="first"
                  onChange={(e) => {
                    setFirst(e.target.value);
                  }}
                  value={first}
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <label htmlFor="last">{t("contactLastName")}</label>
                <input
                  className={styles.formInput}
                  required
                  type="text"
                  id="last"
                  name="last"
                  onChange={(e) => {
                    setLast(e.target.value);
                  }}
                  value={last}
                />
              </div>
            </div>
            <div>
              <label htmlFor="nickname" className={styles.hide}>
                Nickname
              </label>
              <input
                type="text"
                name="nickname"
                id="nickname"
                className={styles.hide}
                onChange={(e) => {
                  setNickname(e.target.value);
                }}
                value={nickname}
              />
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
                  required
                  type="email"
                  id="email"
                  name="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  value={email}
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <label htmlFor="telephone">
                  {t("contactTel")}
                  <small> {t("contactOptional")}</small>
                </label>
                <input
                  className={styles.formInput}
                  type="number"
                  id="telephone"
                  name="telephone"
                  onChange={(e) => {
                    setTelephone(e.target.value);
                  }}
                  value={telephone}
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
              required
              id="comments"
              name="comment"
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              value={message}
            />
            <button className={styles.formButton} onClick={handleSubmit}>
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
