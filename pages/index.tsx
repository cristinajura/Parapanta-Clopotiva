import React from "react";
import styles from "../styles/Home.module.css";
import TopNav from "../components/Navbar";
import Home from "../components/Home";
import AboutUs from "../components/Aboutus";
import Tandems from "../components/Tandems";
import School from "../components/School";
import Voucher from "../components/Voucher";
import Footer from "../components/Footer";
import Whatsapp from "../components/Whatsapp";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import type { GetStaticProps } from "next";
import "animate.css";

const App = () => {
  const { t } = useTranslation(["common", "voucher", "nav", "footer"]);

  return (
    <div className="animate__animated animate__fadeIn">
      <div className={styles.container}>
        <TopNav />
        <Whatsapp />
        <Home />
        <Tandems
          tandemTitle={t("tandem:tandemTitle")}
          tandemText1={t("tandem:tandemText1")}
          tandemBtn1={t("tandem:tandemBtn1")}
        />
        <Voucher
          voucherTitle={t("voucher:voucherTitle")}
          voucherText1={t("voucher:voucherText1")}
          voucherBtn={t("voucher:voucherBtn")}
        />
        <School
          schoolTitle={t("school:schoolTitle")}
          schoolText1={t("school:schoolText1")}
          schoolBtn1={t("school:schoolBtn1")}
        />
        <AboutUs
          aboutusTitle={t("aboutus:aboutusTitle")}
          aboutusText1={t("aboutus:aboutusText1")}
          aboutusBtn={t("aboutus:aboutusBtn")}
        />
      </div>
      <Footer />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", [
      "aboutus",
      "school",
      "tandem",
      "common",
      "voucher",
      "nav",
      "footer",
    ])),
  },
});

export default App;
