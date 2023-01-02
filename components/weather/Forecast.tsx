import styles from "../../styles/Home.module.css";
import React from "react";
import SortDownIcon from "@rsuite/icons/SortDown";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTranslation } from "next-i18next";
import { FaAngleDoubleRight, FaAngleDoubleLeft } from "react-icons/fa";

const HOURS = [
  "00:00",
  "03:00",
  "06:00",
  "09:00",
  "12:00",
  "15:00",
  "18:00",
  "21:00",
];

const Forecast = ({ data }: any) => {
  const { t } = useTranslation("weather");

  const [show, setShow] = React.useState(false);
  const [show1, setShow1] = React.useState(false);
  const [show2, setShow2] = React.useState(false);
  const [show3, setShow3] = React.useState(false);

  const showOrHide = show ? "show" : styles.hide;
  const showOrHide1 = show1 ? "show1" : styles.hide;
  const showOrHide2 = show2 ? "show2" : styles.hide;
  const showOrHide3 = show3 ? "show3" : styles.hide;

  let isTabletOrPhone = useMediaQuery("(max-width:1350px)");

  const WEEK_DAY = [
    t("monday"),
    t("tuesday"),
    t("wednesday"),
    t("thursday"),
    t("friday"),
    t("saturday"),
    t("sunday"),
  ];

  const dayInWeek = new Date().getDay();
  const today = dayInWeek - 1;
  const forecastDays = WEEK_DAY.slice(today, WEEK_DAY.length).concat(
    WEEK_DAY.slice(0, today)
  );

  const hourInDay = new Date().getHours();
  const currHour =
    hourInDay < 2
      ? HOURS
      : hourInDay < 5
      ? HOURS.slice(1)
      : hourInDay < 8
      ? HOURS.slice(2)
      : hourInDay < 11
      ? HOURS.slice(3)
      : hourInDay < 14
      ? HOURS.slice(4)
      : hourInDay < 17
      ? HOURS.slice(5)
      : hourInDay < 20
      ? HOURS.slice(6)
      : hourInDay < 23
      ? HOURS.slice(7)
      : HOURS;
  const currHourLength = currHour.length;

  return (
    <div>
      <div className={styles.dayContainer}>
        <div className={styles.forecast} onClick={() => setShow(!show)}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div className={styles.dayDate}>
              <div className={styles.day}>
                {currHour[0] !== "00:00" ||
                (currHour[0] === "00:00" && hourInDay < 2)
                  ? t("today")
                  : t("tomorrow")}
              </div>
              <div>{data?.list[0].dt_txt.slice(0, 10)}</div>
            </div>
            {!isTabletOrPhone && data ? (
              <div className={showOrHide}>
                <TextDetails />
              </div>
            ) : (
              <></>
            )}
          </div>
          {data?.list.slice(0, currHourLength).map((item: any, idx: any) => (
            <div key={idx}>
              <div className={styles.details}>
                <div className={styles.line}></div>
                <div className={styles.hours}>{currHour[idx]}</div>
                <div className={styles.iconAlign}>
                  <img
                    src={
                      item.weather[0].description === "overcast clouds"
                        ? "../icons/05.png"
                        : item.weather[0].description === "snow"
                        ? "../icons/14.png"
                        : item.weather[0].description === "moderate rain"
                        ? "../icons/06.png"
                        : `../icons/${item.weather[0].icon}.png`
                    }
                    alt="icon"
                    className={styles.iconSmall}
                  />
                  <div className={styles.description}>
                    {item.weather[0].description}
                  </div>
                </div>
                <div className={styles.windBox}>
                  <div
                    style={{
                      textAlign: "right",
                      fontWeight: "600",
                      fontSize: "17px",
                      marginTop: "-15px",
                    }}
                  >
                    <SortDownIcon
                      rotate={item.wind.deg}
                      className={styles.windIcon}
                    />
                    {item.wind.deg < 11
                      ? "N"
                      : item.wind.deg < 34
                      ? "NNE"
                      : item.wind.deg < 56
                      ? "NE"
                      : item.wind.deg < 79
                      ? "ENE"
                      : item.wind.deg < 101
                      ? "E"
                      : item.wind.deg < 124
                      ? "ESE"
                      : item.wind.deg < 146
                      ? "SE"
                      : item.wind.deg < 169
                      ? "SSE"
                      : item.wind.deg < 191
                      ? "S"
                      : item.wind.deg < 214
                      ? "SSW"
                      : item.wind.deg < 236
                      ? "SW"
                      : item.wind.deg < 259
                      ? "WSW"
                      : item.wind.deg < 281
                      ? "W"
                      : item.wind.deg < 304
                      ? "WNW"
                      : item.wind.deg < 326
                      ? "NW"
                      : item.wind.deg < 349
                      ? "NNW"
                      : "N"}
                  </div>
                  <div
                    style={{
                      textAlign: "right",
                      marginTop: "-13px",
                      fontSize: "13px",
                    }}
                  >
                    {item.wind.deg}°
                  </div>
                  <div className={styles.minMax}>
                    <div>
                      {item.wind.speed * 3.6 >= 10
                        ? (item.wind.speed * 3.6).toPrecision(3)
                        : item.wind.speed * 3.6 < 1
                        ? (item.wind.speed * 3.6).toPrecision(1)
                        : (item.wind.speed * 3.6).toPrecision(2)}
                    </div>
                    <div>
                      -{" "}
                      {item.wind.gust * 3.6 >= 10
                        ? (item.wind.gust * 3.6).toPrecision(3)
                        : item.wind.gust * 3.6 < 1
                        ? (item.wind.gust * 3.6).toPrecision(1)
                        : (item.wind.gust * 3.6).toPrecision(2)}{" "}
                      km/h
                    </div>
                  </div>
                </div>
              </div>

              <div className={showOrHide}>
                <div className={styles.forecastBottom}>
                  {isTabletOrPhone && data ? <TextDetails /> : <></>}

                  <div
                    className={styles.spacing}
                    style={{ textAlign: "right" }}
                  >
                    <div className={styles.minMax}>
                      <div>{Math.floor(item.main.temp_max)}</div>
                      <div>- {Math.floor(item.main.temp_min)}°C</div>
                    </div>
                    <div>{Math.floor(item.main.feels_like)}°C</div>
                    <div>{item.main.pressure} hPa</div>
                    <div>{item.main.grnd_level} hPa</div>
                    <div>{item.main.humidity}%</div>
                    <div>{item.clouds.all}%</div>
                    <div>
                      {item.rain
                        ? item.rain[`3h`]
                        : item.snow
                        ? item.snow[`3h`]
                        : "0"}
                    </div>
                    <div>{Math.round(item.pop * 100)}%</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className={styles.line}></div>
          {show && isTabletOrPhone && data ? (
            <div className={styles.arrows}>
              <FaAngleDoubleLeft />
            </div>
          ) : isTabletOrPhone && data ? (
            <div className={styles.arrows}>
              <FaAngleDoubleRight />
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>

      <div className={styles.dayContainer}>
        <div className={styles.forecast} onClick={() => setShow1(!show1)}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div className={styles.dayDate}>
              <div>
                <div className={styles.day}>
                  {currHour[0] !== "00:00" ||
                  (currHour[0] === "00:00" && hourInDay < 2)
                    ? t("tomorrow")
                    : forecastDays[2]}
                </div>
                <div>{data?.list[currHourLength].dt_txt.slice(0, 10)}</div>
              </div>
            </div>
            {!isTabletOrPhone && data ? (
              <div className={showOrHide1}>
                <TextDetails />
              </div>
            ) : (
              <></>
            )}
          </div>
          {data?.list
            .slice(currHourLength, currHourLength + 8)
            .map((item: any, idx: any) => (
              <div key={idx}>
                <div className={styles.details}>
                  <div className={styles.line}></div>
                  <div className={styles.hours}>{HOURS[idx]}</div>
                  <div className={styles.iconAlign}>
                    <img
                      src={
                        item.weather[0].description === "overcast clouds"
                          ? "../icons/05.png"
                          : item.weather[0].description === "snow"
                          ? "../icons/14.png"
                          : item.weather[0].description === "moderate rain"
                          ? "../icons/06.png"
                          : `../icons/${item.weather[0].icon}.png`
                      }
                      alt="icon"
                      className={styles.iconSmall}
                    />
                    <div className={styles.description}>
                      {item.weather[0].description}
                    </div>
                  </div>
                  <div className={styles.windBox}>
                    <div
                      style={{
                        textAlign: "right",
                        fontWeight: "600",
                        fontSize: "17px",
                        marginTop: "-15px",
                      }}
                    >
                      <SortDownIcon
                        rotate={item.wind.deg}
                        className={styles.windIcon}
                      />
                      {item.wind.deg < 11
                        ? "N"
                        : item.wind.deg < 34
                        ? "NNE"
                        : item.wind.deg < 56
                        ? "NE"
                        : item.wind.deg < 79
                        ? "ENE"
                        : item.wind.deg < 101
                        ? "E"
                        : item.wind.deg < 124
                        ? "ESE"
                        : item.wind.deg < 146
                        ? "SE"
                        : item.wind.deg < 169
                        ? "SSE"
                        : item.wind.deg < 191
                        ? "S"
                        : item.wind.deg < 214
                        ? "SSW"
                        : item.wind.deg < 236
                        ? "SW"
                        : item.wind.deg < 259
                        ? "WSW"
                        : item.wind.deg < 281
                        ? "W"
                        : item.wind.deg < 304
                        ? "WNW"
                        : item.wind.deg < 326
                        ? "NW"
                        : item.wind.deg < 349
                        ? "NNW"
                        : "N"}
                    </div>
                    <div
                      style={{
                        textAlign: "right",
                        marginTop: "-13px",
                        fontSize: "13px",
                      }}
                    >
                      {item.wind.deg}°
                    </div>
                    <div className={styles.minMax}>
                      <div>
                        {item.wind.speed * 3.6 >= 10
                          ? (item.wind.speed * 3.6).toPrecision(3)
                          : item.wind.speed * 3.6 < 1
                          ? (item.wind.speed * 3.6).toPrecision(1)
                          : (item.wind.speed * 3.6).toPrecision(2)}
                      </div>
                      <div>
                        -{" "}
                        {item.wind.gust * 3.6 >= 10
                          ? (item.wind.gust * 3.6).toPrecision(3)
                          : item.wind.gust * 3.6 < 1
                          ? (item.wind.gust * 3.6).toPrecision(1)
                          : (item.wind.gust * 3.6).toPrecision(2)}{" "}
                        km/h
                      </div>
                    </div>
                  </div>
                </div>

                <div className={showOrHide1}>
                  <div className={styles.forecastBottom}>
                    {isTabletOrPhone && data ? <TextDetails /> : <></>}

                    <div
                      className={styles.spacing}
                      style={{ textAlign: "right" }}
                    >
                      <div className={styles.minMax}>
                        <div>{Math.floor(item.main.temp_max)}</div>
                        <div>- {Math.floor(item.main.temp_min)}°C</div>
                      </div>
                      <div>{Math.floor(item.main.feels_like)}°C</div>
                      <div>{item.main.pressure} hPa</div>
                      <div>{item.main.grnd_level} hPa</div>
                      <div>{item.main.humidity}%</div>
                      <div>{item.clouds.all}%</div>
                      <div>
                        {item.rain
                          ? item.rain[`3h`]
                          : item.snow
                          ? item.snow[`3h`]
                          : "0"}
                      </div>
                      <div>{Math.round(item.pop * 100)}%</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          <div className={styles.line}></div>
          {show1 && isTabletOrPhone && data ? (
            <div className={styles.arrows}>
              <FaAngleDoubleLeft />
            </div>
          ) : isTabletOrPhone && data ? (
            <div className={styles.arrows}>
              <FaAngleDoubleRight />
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>

      <div className={styles.dayContainer}>
        <div className={styles.forecast} onClick={() => setShow2(!show2)}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div className={styles.dayDate}>
              <div className={styles.day}>
                {currHour[0] === "00:00" && hourInDay === 23
                  ? forecastDays[3]
                  : forecastDays[2]}
              </div>
              <div>{data?.list[currHourLength + 8].dt_txt.slice(0, 10)}</div>
            </div>
            {!isTabletOrPhone && data ? (
              <div className={showOrHide2}>
                <TextDetails />
              </div>
            ) : (
              <></>
            )}
          </div>
          {data?.list
            .slice(currHourLength + 8, currHourLength + 16)
            .map((item: any, idx: any) => (
              <div key={idx}>
                <div className={styles.details}>
                  <div className={styles.line}></div>
                  <div className={styles.hours}>{HOURS[idx]}</div>
                  <div className={styles.iconAlign}>
                    <img
                      src={
                        item.weather[0].description === "overcast clouds"
                          ? "../icons/05.png"
                          : item.weather[0].description === "snow"
                          ? "../icons/14.png"
                          : item.weather[0].description === "moderate rain"
                          ? "../icons/06.png"
                          : `../icons/${item.weather[0].icon}.png`
                      }
                      alt="icon"
                      className={styles.iconSmall}
                    />
                    <div className={styles.description}>
                      {item.weather[0].description}
                    </div>
                  </div>
                  <div className={styles.windBox}>
                    <div
                      style={{
                        textAlign: "right",
                        fontWeight: "600",
                        fontSize: "17px",
                        marginTop: "-15px",
                      }}
                    >
                      <SortDownIcon
                        rotate={item.wind.deg}
                        className={styles.windIcon}
                      />
                      {item.wind.deg < 11
                        ? "N"
                        : item.wind.deg < 34
                        ? "NNE"
                        : item.wind.deg < 56
                        ? "NE"
                        : item.wind.deg < 79
                        ? "ENE"
                        : item.wind.deg < 101
                        ? "E"
                        : item.wind.deg < 124
                        ? "ESE"
                        : item.wind.deg < 146
                        ? "SE"
                        : item.wind.deg < 169
                        ? "SSE"
                        : item.wind.deg < 191
                        ? "S"
                        : item.wind.deg < 214
                        ? "SSW"
                        : item.wind.deg < 236
                        ? "SW"
                        : item.wind.deg < 259
                        ? "WSW"
                        : item.wind.deg < 281
                        ? "W"
                        : item.wind.deg < 304
                        ? "WNW"
                        : item.wind.deg < 326
                        ? "NW"
                        : item.wind.deg < 349
                        ? "NNW"
                        : "N"}
                    </div>
                    <div
                      style={{
                        textAlign: "right",
                        marginTop: "-13px",
                        fontSize: "13px",
                      }}
                    >
                      {item.wind.deg}°
                    </div>
                    <div className={styles.minMax}>
                      <div>
                        {item.wind.speed * 3.6 >= 10
                          ? (item.wind.speed * 3.6).toPrecision(3)
                          : item.wind.speed * 3.6 < 1
                          ? (item.wind.speed * 3.6).toPrecision(1)
                          : (item.wind.speed * 3.6).toPrecision(2)}
                      </div>
                      <div>
                        -{" "}
                        {item.wind.gust * 3.6 >= 10
                          ? (item.wind.gust * 3.6).toPrecision(3)
                          : item.wind.gust * 3.6 < 1
                          ? (item.wind.gust * 3.6).toPrecision(1)
                          : (item.wind.gust * 3.6).toPrecision(2)}{" "}
                        km/h
                      </div>
                    </div>
                  </div>
                </div>

                <div className={showOrHide2}>
                  <div className={styles.forecastBottom}>
                    {isTabletOrPhone && data ? <TextDetails /> : <></>}

                    <div
                      className={styles.spacing}
                      style={{ textAlign: "right" }}
                    >
                      <div className={styles.minMax}>
                        <div>{Math.floor(item.main.temp_max)}</div>
                        <div>- {Math.floor(item.main.temp_min)}°C</div>
                      </div>
                      <div>{Math.floor(item.main.feels_like)}°C</div>
                      <div>{item.main.pressure} hPa</div>
                      <div>{item.main.grnd_level} hPa</div>
                      <div>{item.main.humidity}%</div>
                      <div>{item.clouds.all}%</div>
                      <div>
                        {item.rain
                          ? item.rain[`3h`]
                          : item.snow
                          ? item.snow[`3h`]
                          : "0"}
                      </div>
                      <div>{Math.round(item.pop * 100)}%</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          <div className={styles.line}></div>
          {show2 && isTabletOrPhone && data ? (
            <div className={styles.arrows}>
              <FaAngleDoubleLeft />
            </div>
          ) : isTabletOrPhone && data ? (
            <div className={styles.arrows}>
              <FaAngleDoubleRight />
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>

      <div className={styles.dayContainer}>
        <div className={styles.forecast} onClick={() => setShow3(!show3)}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div className={styles.dayDate}>
              <div className={styles.day}>
                {currHour[0] === "00:00" && hourInDay === 23
                  ? forecastDays[4]
                  : forecastDays[3]}
              </div>
              <div>{data?.list[currHourLength + 16].dt_txt.slice(0, 10)}</div>
            </div>
            {!isTabletOrPhone && data ? (
              <div className={showOrHide3}>
                <TextDetails />
              </div>
            ) : (
              <></>
            )}
          </div>
          {data?.list
            .slice(currHourLength + 16, currHourLength + 24)
            .map((item: any, idx: any) => (
              <div key={idx}>
                <div className={styles.details}>
                  <div className={styles.line}></div>
                  <div className={styles.hours}>{HOURS[idx]}</div>
                  <div className={styles.iconAlign}>
                    <img
                      src={
                        item.weather[0].description === "overcast clouds"
                          ? "../icons/05.png"
                          : item.weather[0].description === "snow"
                          ? "../icons/14.png"
                          : item.weather[0].description === "moderate rain"
                          ? "../icons/06.png"
                          : `../icons/${item.weather[0].icon}.png`
                      }
                      alt="icon"
                      className={styles.iconSmall}
                    />
                    <div className={styles.description}>
                      {item.weather[0].description}
                    </div>
                  </div>
                  <div className={styles.windBox}>
                    <div
                      style={{
                        textAlign: "right",
                        fontWeight: "600",
                        fontSize: "17px",
                        marginTop: "-15px",
                      }}
                    >
                      <SortDownIcon
                        rotate={item.wind.deg}
                        className={styles.windIcon}
                      />
                      {item.wind.deg < 11
                        ? "N"
                        : item.wind.deg < 34
                        ? "NNE"
                        : item.wind.deg < 56
                        ? "NE"
                        : item.wind.deg < 79
                        ? "ENE"
                        : item.wind.deg < 101
                        ? "E"
                        : item.wind.deg < 124
                        ? "ESE"
                        : item.wind.deg < 146
                        ? "SE"
                        : item.wind.deg < 169
                        ? "SSE"
                        : item.wind.deg < 191
                        ? "S"
                        : item.wind.deg < 214
                        ? "SSW"
                        : item.wind.deg < 236
                        ? "SW"
                        : item.wind.deg < 259
                        ? "WSW"
                        : item.wind.deg < 281
                        ? "W"
                        : item.wind.deg < 304
                        ? "WNW"
                        : item.wind.deg < 326
                        ? "NW"
                        : item.wind.deg < 349
                        ? "NNW"
                        : "N"}
                    </div>
                    <div
                      style={{
                        textAlign: "right",
                        marginTop: "-13px",
                        fontSize: "13px",
                      }}
                    >
                      {item.wind.deg}°
                    </div>
                    <div className={styles.minMax}>
                      <div>
                        {item.wind.speed * 3.6 >= 10
                          ? (item.wind.speed * 3.6).toPrecision(3)
                          : item.wind.speed * 3.6 < 1
                          ? (item.wind.speed * 3.6).toPrecision(1)
                          : (item.wind.speed * 3.6).toPrecision(2)}
                      </div>
                      <div>
                        -{" "}
                        {item.wind.gust * 3.6 >= 10
                          ? (item.wind.gust * 3.6).toPrecision(3)
                          : item.wind.gust * 3.6 < 1
                          ? (item.wind.gust * 3.6).toPrecision(1)
                          : (item.wind.gust * 3.6).toPrecision(2)}{" "}
                        km/h
                      </div>
                    </div>
                  </div>
                </div>

                <div className={showOrHide3}>
                  <div className={styles.forecastBottom}>
                    {isTabletOrPhone && data ? <TextDetails /> : <></>}

                    <div
                      className={styles.spacing}
                      style={{ textAlign: "right" }}
                    >
                      <div className={styles.minMax}>
                        <div>{Math.floor(item.main.temp_max)}</div>
                        <div>- {Math.floor(item.main.temp_min)}°C</div>
                      </div>
                      <div>{Math.floor(item.main.feels_like)}°C</div>
                      <div>{item.main.pressure} hPa</div>
                      <div>{item.main.grnd_level} hPa</div>
                      <div>{item.main.humidity}%</div>
                      <div>{item.clouds.all}%</div>
                      <div>
                        {item.rain
                          ? item.rain[`3h`]
                          : item.snow
                          ? item.snow[`3h`]
                          : "0"}
                      </div>
                      <div>{Math.round(item.pop * 100)}%</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          <div className={styles.line}></div>
          {show3 && isTabletOrPhone && data ? (
            <div className={styles.arrows}>
              <FaAngleDoubleLeft />
            </div>
          ) : isTabletOrPhone && data ? (
            <div className={styles.arrows}>
              <FaAngleDoubleRight />
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

const TextDetails = () => {
  const { t } = useTranslation("weather");

  return (
    <div style={{ textAlign: "left", width: "200px" }}>
      <div>{t("temp")}</div>
      <div>
        <div>{t("tempFelt")}</div>
      </div>
      <div>
        {t("press")} <small>{t("sea")}</small>
      </div>
      <div>
        {t("press")} <small>{t("ground")}</small>
      </div>
      <div>{t("humidity")}</div>
      <div>{t("clouds")}</div>
      <div>
        {t("prec")} <small>(mm/3h)</small>
      </div>
      <div>{t("prob")}</div>
    </div>
  );
};

export default Forecast;
