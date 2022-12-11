import React from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import type { FC } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import useMediaQuery from "@mui/material/useMediaQuery";

function listenForOutsideClicks(
  listening: any,
  setListening: any,
  menuRef: any,
  setMenu: any
) {
  return () => {
    if (listening) return;
    if (!menuRef.current) return;
    setListening(true);
    [`click`, `touchstart`].forEach((type) => {
      document.addEventListener(`click`, (e) => {
        if (menuRef?.current?.contains(e.target)) return;
        setMenu(false);
      });
    });
  };
}

const TopNav: FC = () => {
  const router = useRouter();
  const changeTo = router.locale === "en" ? "ro" : "en";
  const { t } = useTranslation(["nav", "common"]);

  const tonggleLanguage = (newLocale: string) => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  const menuRef = React.useRef(null);
  const [listening, setListening] = React.useState(false);
  const [menu, setMenu] = React.useState(false);

  let isTabletOrPhone = useMediaQuery("(min-width:841px)");
  const showIcon = menu ? { display: "none" } : { display: "block" };
  const showMenu = isTabletOrPhone
    ? { display: "block" }
    : menu
    ? { display: "block" }
    : { display: "none" };

  React.useEffect(
    listenForOutsideClicks(listening, setListening, menuRef, setMenu)
  );

  return (
    <div>
      <nav className={styles.topNav}>
        <img
          src="https://live.staticflickr.com/65535/52555206343_6f2ce910cc_w.jpg"
          alt="Parapanta Clopotiva Logo"
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div ref={menuRef} style={showIcon}>
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
                    marginTop: "-3px",
                    background: "white",
                  }}
                  onClick={() => setMenu(!menu)}
                >
                  <MdClose />
                </button>
                <div
                  className={styles.orangeLine}
                  style={{ marginTop: "10px" }}
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
                <div
                  className={styles.hideMenu}
                  style={{
                    width: "100%",
                    height: "1.5px",
                    boxShadow: "0 0 0 0",
                  }}
                >
                  <div className={styles.orangeLine}></div>
                </div>
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
