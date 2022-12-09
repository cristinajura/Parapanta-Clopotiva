import React from "react";
import styles from "../styles/Home.module.css";
import Contact from "../components/Contact";
import TopNav from "../components/Navbar";
import Footer from "../components/Footer";
import Whatsapp from "../components/Whatsapp";
import { useTranslation } from "next-i18next";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import "animate.css";

const PContact = () => {
  const { t } = useTranslation(["contact", "common", "nav", "footer"]);

  return (
    <div className="animate__animated animate__fadeIn">
      <div className={styles.container}>
        <TopNav />
        <Whatsapp />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", [
      "contact",
      "common",
      "nav",
      "footer",
    ])),
  },
});

export default PContact;
