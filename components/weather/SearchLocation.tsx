import React from "react";
import Select from "react-select";
import styles from "../../styles/Home.module.css";
import { FaSearch } from "react-icons/fa";
import { useTranslation } from "next-i18next";

const SearchLocation = ({ onSearchChange }: any) => {
  const { t } = useTranslation("locations");

  const options: any = [
    {
      value: "45.472222 22.810797",
      label: t("locClopoTakeoff"),
    },
    {
      value: "45.495828 22.806300",
      label: t("locClopoSchool"),
    },
    {
      value: "45.380549 22.850112",
      label: t("locRetezat"),
    },
    {
      value: "45.554008 22.973854",
      label: t("locCiopeia"),
    },
    {
      value: "45.626761 23.036450",
      label: t("locGantaga"),
    },
    {
      value: "45.734482 23.037333",
      label: t("locCalan"),
    },
    {
      value: "45.859838 23.042844",
      label: t("locUroi"),
    },
    {
      value: "45.388145 23.491146",
      label: t("locParang"),
    },
    {
      value: "45.226978 23.684955",
      label: t("locRanca"),
    },
    {
      value: "45.174227 23.077664",
      label: t("locPlesa"),
    },
    {
      value: "45.244790 23.016945",
      label: t("locArcanu"),
    },
    {
      value: "45.988007 23.593869",
      label: t("locRapa"),
    },
    {
      value: "46.454343 23.537259",
      label: t("locRimetea"),
    },
    {
      value: "46.528938 23.522260",
      label: t("locIara"),
    },
    {
      value: "46.613307 23.439002",
      label: t("locLiteni"),
    },
    {
      value: "46.587136 23.686606",
      label: t("locPetresti"),
    },
  ];

  const [searchLocation, setSearchLocation] = React.useState(null);

  const handleChange = (selectSpot: any) => {
    setSearchLocation(selectSpot);
    onSearchChange(selectSpot);
  };

  return (
    <Select
      placeholder={
        <div>
          <div className={styles.palceholderIcon}>
            <FaSearch />
          </div>
          <div className={styles.palceholderText}>{t("searchLoc")}</div>
        </div>
      }
      options={options}
      value={"Location search..."}
      onChange={handleChange}
    />
  );
};

export default SearchLocation;
