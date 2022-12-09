import React from "react";
import styles from "../styles/Home.module.css";
import type { FC } from "react";
import { useTranslation } from "next-i18next";
import "animate.css";

const Home: FC = () => {
  const { t } = useTranslation("common");

  return (
    <div className={styles.homeBackground}>
      <h1 className="animate__animated animate__zoomIn">{t("homeTitle")}</h1>
    </div>
  );
};

export default Home;
