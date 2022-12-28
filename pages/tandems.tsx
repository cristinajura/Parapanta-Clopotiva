import React from "react";
import styles from "../styles/Home.module.css";
import TopNav from "../components/Navbar";
import Footer from "../components/Footer";
import Whatsapp from "../components/Whatsapp";
import { BsTelephone, BsWhatsapp } from "react-icons/bs";
import { useTranslation } from "next-i18next";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";

const PTandems = () => {
  const { t } = useTranslation(["tandem", "common", "nav", "footer"]);

  React.useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <div className="animate__animated animate__fadeIn">
      <TopNav />
      <div className={styles.container}>
        <Whatsapp />
        <div className={styles.cardContainer}>
          <div className="animate__animated animate__zoomIn">
            <div className={styles.title}>{t("tandemTitle")}</div>
          </div>
          <img
            src="https://live.staticflickr.com/65535/52591078091_8c05eee054.jpg"
            alt="Tandem flying at Clopotiva site"
          />
          <p>{t("tandemText1")}</p>
          <img
            src="https://live.staticflickr.com/65535/52532436193_7fcbe6039f.jpg"
            alt="Parapanta Clopotiva decolare"
          />
          <p>{t("tandemText2")}</p>
          <div
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            data-aos-offset="200"
          >
            <img
              src="https://live.staticflickr.com/65535/52532394265_15cdbdd917.jpg"
              alt="Parapanta Clopotiva zbor in tandem"
            />
          </div>
          <p>{t("tandemText3")}</p>
          <div
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            data-aos-offset="200"
          >
            <img
              src="https://live.staticflickr.com/65535/52552114421_948ca2105b.jpg"
              alt="Paragliding Romania, tandem flying at Clopotiva"
            />
          </div>
          <p>{t("tandemText4")}</p>
          <div
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            data-aos-offset="200"
          >
            <img
              src="https://live.staticflickr.com/65535/52532393350_b6791224a8.jpg"
              alt="Parapanta Romania, zbor cu parapanta la Clopotiva"
            />
          </div>
          <p>{t("tandemText5")}</p>
          <div
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            data-aos-offset="200"
          >
            <img
              src="https://live.staticflickr.com/65535/52531919041_93e59ef6c5.jpg"
              alt="Tandem paragliding in Romania, Clopotiva"
            />
          </div>
          <p style={{ marginTop: "-5px" }}>{t("tandemText6")}</p>
          <p style={{ marginTop: "-10px" }}>{t("tandemText7")}</p>
          <p style={{ marginTop: "-10px" }}>{t("tandemText8")}</p>
          <p style={{ marginTop: "40px", marginBottom: "-25px" }}>
            {t("tandenText9")}
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
      </div>
      <Footer />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", [
      "tandem",
      "common",
      "nav",
      "footer",
    ])),
  },
});

export default PTandems;
