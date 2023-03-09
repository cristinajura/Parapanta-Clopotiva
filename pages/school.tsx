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

const PSchool = () => {
  const { t } = useTranslation(["school", "common", "nav", "footer"]);

  React.useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <div className="animate__animated animate__fadeIn">
      <TopNav page={"school"} />
      <div className={styles.container}>
        <Whatsapp />
        <div className={styles.cardContainer}>
          <div className="animate__animated animate__zoomIn">
            <div className={styles.title}>{t("schoolTitle")}</div>
          </div>
          <img
            src="https://live.staticflickr.com/65535/52544599047_561ef0bb6d.jpg"
            alt="Scoala de zbor cu parapanta, Parapanta Clopotiva"
          />
          <p>{t("schoolText1")}</p>
          <div
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-easing="ease-in-linear"
            data-aos-once="true"
            data-aos-offset="200"
          >
            <img
              src="https://live.staticflickr.com/65535/52532421063_7e3dc3b89e_z.jpg"
              alt="Paragliding Clopotiva school"
            />
          </div>
          <p>{t("schoolText2")}</p>
          <div
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-easing="ease-in-linear"
            data-aos-once="true"
            data-aos-offset="200"
          >
            <img
              src="https://live.staticflickr.com/65535/52532238834_da6c44f649.jpg"
              alt="Paragliding Romania school"
            />
          </div>
          <p>{t("schoolText3")}</p>
          <div
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-easing="ease-in-linear"
            data-aos-once="true"
            data-aos-offset="200"
          >
            <img
              src="https://live.staticflickr.com/65535/52545065241_76fb7e0ac5.jpg"
              alt="Paragliding Clopotiva groundhandling"
            />
          </div>
          <p>{t("schoolText4")}</p>
          <div
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-easing="ease-in-linear"
            data-aos-once="true"
            data-aos-offset="200"
          >
            <img
              src="https://live.staticflickr.com/65535/52552566250_570c2bcc69_w.jpg"
              alt="Parapanta Clopotiva decolare elev"
            />
          </div>
          <p>{t("schoolText5")}</p>
          <p style={{ marginTop: "40px", marginBottom: "-25px" }}>
            {t("schoolText6")}
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
      "school",
      "common",
      "nav",
      "footer",
    ])),
  },
});

export default PSchool;
