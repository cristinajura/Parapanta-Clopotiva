import React from "react";
import styles from "../styles/Home.module.css";
import TopNav from "../components/Navbar";
import Footer from "../components/Footer";
// import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import type { GetStaticProps } from "next";
// import Link from "next/link";
import { BsTelephone, BsWhatsapp } from "react-icons/bs";
import Whatsapp from "../components/Whatsapp";
import "animate.css";

const PVoucher = () => {
  // const router = useRouter();
  // const changeTo = router.locale === "en" ? "ro" : "en";

  const { t } = useTranslation(["voucher", "common", "nav", "footer"]);

  return (
    <div className="animate__animated animate__fadeIn">
      <div className={styles.container}>
        <TopNav />
        {/* <Link href="/voucher" locale={changeTo}>
          <button className={styles.laguageBtn}>
            {t("common:changeLanguageBtn")}
          </button>
        </Link> */}
        <Whatsapp />
        <div className={styles.cardContainer}>
          <div className="animate__animated animate__zoomIn">
            <div className={styles.title}>{t("voucherTitle")}</div>
          </div>
          <p>{t("voucherText1")}</p>
          <img
            src="https://live.staticflickr.com/65535/52539617838_6fc8655bfc_c.jpg"
            alt="Voucher view"
          />
          <p style={{ marginTop: "-5px" }}>{t("voucher:voucherText2")}</p>
          <p>{t("voucherText3")}</p>
          <p style={{ marginTop: "40px", marginBottom: "-25px" }}>
            {t("voucherText4")}
          </p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button className={styles.telBtn}>
              <a
                className={styles.callUs}
                href="tel:0040-784-743-214"
                target="blank"
              >
                <BsTelephone />
              </a>
            </button>
            <button className={styles.whatsAppBtn}>
              <a
                href="https://api.whatsapp.com/send?phone=40784743214"
                target="blank"
              >
                <BsWhatsapp />
              </a>
            </button>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", [
      "voucher",
      "common",
      "nav",
      "footer",
    ])),
  },
});

export default PVoucher;
