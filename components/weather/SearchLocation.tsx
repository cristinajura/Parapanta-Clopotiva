import React from "react";
import Select from "react-select";
import styles from "../../styles/Home.module.css";
import { FaSearch } from "react-icons/fa";
import { options } from "../helpers/locations";
import { useTranslation } from "next-i18next";

const SearchLocation = ({ onSearchChange }: any) => {
  const { t } = useTranslation("weather");

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
