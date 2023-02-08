import React from "react";
import TopNav from "../components/Navbar";
import Footer from "../components/Footer";
import { useTranslation } from "next-i18next";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import "animate.css";
import CurrentWeather from "../components/weather/CurrentWeather";
import Forecast from "../components/weather/Forecast";
import SearchLocation from "../components/weather/SearchLocation";
import { WEATHER_API_URL, WEATHER_API_KEY } from "../api";
import styles from "../styles/Home.module.css";

const Weather = () => {
  const { t } = useTranslation([
    "common",
    "nav",
    "weather",
    "locations",
    "footer",
  ]);

  const [iniCurrentWeather, setIniCurrentWeather] = React.useState(null);
  const [iniForecast, setIniForecast] = React.useState(null);

  React.useEffect(() => {
    fetch(
      `${WEATHER_API_URL}/weather?lat=45.472222&lon=22.810797&appid=${WEATHER_API_KEY}&units=metric`
    ).then(async (response) => {
      const data = await response.json();
      setIniCurrentWeather({
        city: "Clopotiva Take-off",
        ...data,
      });
    });
  }, []);

  React.useEffect(() => {
    fetch(
      `${WEATHER_API_URL}/forecast?lat=45.472222&lon=22.810797&appid=${WEATHER_API_KEY}&units=metric`
    ).then(async (response) => {
      const data = await response.json();
      setIniForecast({
        city: "Clopotiva Take-off",
        ...data,
      });
    });
  }, []);

  const [currentWeather, setCurrentWeather] = React.useState(null);
  const [forecast, setForecast] = React.useState(null);

  const handleLocationChange = (options: any) => {
    const [lat, lon] = options.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({
          city: options.label,
          ...weatherResponse,
        });
        setForecast({
          city: options.label,
          ...forecastResponse,
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="animate__animated animate__fadeIn">
      <TopNav />
      <div className={styles.container} style={{ marginTop: "6.5rem" }}>
        <div className={styles.weatherContainer}>
          <div className={styles.locations}>
            <div className={styles.search}>
              <SearchLocation onSearchChange={handleLocationChange} />
            </div>
          </div>
          <CurrentWeather
            data={currentWeather === null ? iniCurrentWeather : currentWeather}
          />
          <Forecast data={forecast === null ? iniForecast : forecast} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", [
      "common",
      "nav",
      "weather",
      "locations",
      "footer",
    ])),
  },
});

export default Weather;
