import styles from "../../styles/Home.module.css";
import SortDownIcon from "@rsuite/icons/SortDown";
import { useTranslation } from "next-i18next";

const CurrentWeather = ({ data }: any) => {
  const { t } = useTranslation("weather");

  const wind =
    data?.wind?.speed * 3.6 >= 10
      ? (data?.wind?.speed * 3.6).toPrecision(3)
      : data?.wind?.speed * 3.6 < 1
      ? (data?.wind?.speed * 3.6).toPrecision(1)
      : (data?.wind?.speed * 3.6).toPrecision(2);

  const gust =
    data?.wind?.gust * 3.6 >= 10
      ? (data?.wind?.gust * 3.6).toPrecision(3)
      : data?.wind?.gust * 3.6 < 1
      ? (data?.wind?.gust * 3.6).toPrecision(1)
      : (data?.wind?.gust * 3.6).toPrecision(2);

  return (
    <div
      className={styles.top}
      style={data ? { maxWidth: "1150px" } : { maxWidth: "550px" }}
    >
      <img src="../paragliding.jpg" alt="Clopotiva take-off" />
      <a
        href="https://www.windmap.vercel.app/"
        target="blank"
        className={styles.windmapA}
      >
        <img
          src="../windmap.png"
          alt="windmap logo"
          style={{ width: "20px", height: "20px" }}
        />
        <div className={styles.windmapText}>windmap</div>
      </a>
      {data ? (
        <div className={styles.weather}>
          <div className={styles.topWeather}>
            <div style={{ marginTop: "5px", flex: "1 1", marginRight: "20px" }}>
              <p className={styles.city}>{data?.city}</p>
              <p className={styles.descriptionTop}>
                {data?.weather[0]?.description}
              </p>
            </div>
            <div>
              <img
                className={styles.weatherIcon}
                src={
                  data?.weather[0]?.description === "overcast clouds"
                    ? "../icons/05.png"
                    : data?.weather[0]?.description === "snow"
                    ? "../icons/14.png"
                    : data?.weather[0]?.description === "moderate rain"
                    ? "../icons/06.png"
                    : `../icons/${data?.weather[0]?.icon}.png`
                }
                alt="weather icon"
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              margin: "5px 10px",
            }}
          >
            <div className={styles.bottomWeather}>
              <div className={styles.datas1}>
                <div className={styles.row}>
                  <span>{t("windDir")}</span>
                  <span>
                    <SortDownIcon
                      rotate={data?.wind?.deg}
                      className={styles.windIcon}
                    />
                    {data?.wind?.deg < 11
                      ? "N"
                      : data?.wind?.deg < 34
                      ? "NNE"
                      : data?.wind?.deg < 56
                      ? "NE"
                      : data?.wind?.deg < 79
                      ? "ENE"
                      : data?.wind?.deg < 101
                      ? "E"
                      : data?.wind?.deg < 124
                      ? "ESE"
                      : data?.wind?.deg < 146
                      ? "SE"
                      : data?.wind?.deg < 169
                      ? "SSE"
                      : data?.wind?.deg < 191
                      ? "S"
                      : data?.wind?.deg < 214
                      ? "SSW"
                      : data?.wind?.deg < 236
                      ? "SW"
                      : data?.wind?.deg < 259
                      ? "WSW"
                      : data?.wind?.deg < 281
                      ? "W"
                      : data?.wind?.deg < 304
                      ? "WNW"
                      : data?.wind?.deg < 326
                      ? "NW"
                      : data?.wind?.deg < 349
                      ? "NNW"
                      : "N"}
                  </span>
                </div>
                <div className={styles.row}>
                  <span>
                    {t("windDir")} <small>{t("deg")}</small>
                  </span>
                  <span>{data?.wind?.deg}°</span>
                </div>
                <div className={styles.row}>
                  <span>{t("speed")}</span>
                  <span>{wind} km/h</span>
                </div>
                <div className={styles.row}>
                  <span>{t("gust")}</span>
                  <span>{gust} km/h</span>
                </div>
                <div className={styles.row}>
                  <span>{t("press")}</span>
                  <span>{data?.main?.pressure} hPa</span>
                </div>
              </div>
              <div className={styles.datas2}>
                <div className={styles.row}>
                  <span>{t("temp")}</span>
                  <span>{Math.floor(data?.main?.temp)}°C</span>
                </div>
                <div className={styles.row}>
                  <span>{t("tempFelt")}</span>
                  <span>{Math.floor(data?.main?.feels_like)}°C</span>
                </div>
                <div className={styles.row}>
                  <span>{t("clouds")}</span>
                  <span>{data?.clouds?.all}%</span>
                </div>
                <div className={styles.row}>
                  <span>{t("humidity")}</span>
                  <span>{data?.main?.humidity}%</span>
                </div>
                <div className={styles.row}>
                  <span>
                    {t("prec")} <small>(mm/1h)</small>
                  </span>
                  <span>
                    {data?.rain
                      ? data.rain[`1h`]
                      : data?.snow
                      ? data.snow[`1h`]
                      : "0"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default CurrentWeather;
