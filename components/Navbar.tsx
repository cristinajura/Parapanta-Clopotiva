import React from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import type { FC } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import useMediaQuery from "@mui/material/useMediaQuery";

const TopNav: FC = () => {
  const router = useRouter();
  const changeTo = router.locale === "en" ? "ro" : "en";
  const { t } = useTranslation(["nav", "common"]);

  const tonggleLanguage = (newLocale: string) => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  const [menu, setMenu] = React.useState(false);

  let isTabletOrPhone = useMediaQuery("(min-width:841px)");
  const showIcon = menu ? { display: "none" } : { display: "block" };
  const showMenu = isTabletOrPhone
    ? { display: "block" }
    : menu
    ? { display: "block" }
    : { display: "none" };

  return (
    <div>
      <nav className={styles.topNav}>
        <img
          src="https://live.staticflickr.com/65535/52538042981_54621dc908_w.jpg"
          alt="Parapanta Clopotiva Logo"
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={showIcon}>
            <button className={styles.hideMenu} onClick={() => setMenu(!menu)}>
              <GiHamburgerMenu />
            </button>
          </div>
          <div style={showMenu}>
            <ul className={styles.navBox}>
              <li key={0}>
                <button
                  className={styles.hideMenu}
                  style={{
                    border: "none",
                    fontSize: "20px",
                    background: "var(--small-menu)",
                    marginTop: "-3px",
                  }}
                  onClick={() => setMenu(!menu)}
                >
                  <MdClose />
                </button>
                <div
                  className={styles.orangeLine}
                  style={{ marginTop: "8px" }}
                ></div>
              </li>
              <li key={1}>
                <Link className={styles.navLink} href="/">
                  {t("navHome")}
                </Link>
              </li>
              <li key={2}>
                <Link className={styles.navLink} href="/tandems">
                  {t("navTandem")}
                </Link>
              </li>
              <li key={3}>
                <Link className={styles.navLink} href="/voucher">
                  {t("navVoucher")}
                </Link>
              </li>
              <li key={4}>
                <Link className={styles.navLink} href="/school">
                  {t("navSchool")}
                </Link>
              </li>
              <li key={5}>
                <Link className={styles.navLink} href="/aboutUs">
                  {t("navAboutus")}
                </Link>
              </li>
              <li key={6}>
                <Link className={styles.navLink} href="/contact">
                  {t("navContact")}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <button
        className={styles.laguageBtn}
        onClick={() => tonggleLanguage(changeTo)}
      >
        {t("common:changeLanguageBtn")}
      </button>
    </div>
  );
};

export default TopNav;
