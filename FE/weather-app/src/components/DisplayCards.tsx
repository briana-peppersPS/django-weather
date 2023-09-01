import { Typography } from "@mui/material";
import WeatherCard from "./WeatherCard";
import styled from "styled-components";
import { useEffect, useState } from "react";

type WeatherData = {
  city: string;
  weekday: string;
  date: string;
  temp: string;
};

export const CardWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  max-width: 1000px;
  margin: 1vh 0;
  flex-wrap: wrap;
`;

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 30vh;
  margin: 5vh 0;
  width: 100%;
`;

const DisplayCards = () => {
  const [weather, setWeather] = useState([]);

  // testing endpoint
  useEffect(() => {
    fetch("http://localhost:8000/weather/")
      .then((res) => res.json())
      .then((data) => {
        setWeather(data);
      });
  }, []);

  return (
    <SectionWrapper>
      <Typography variant="h5" component={"h1"}>
        Current weather trends
      </Typography>
      <CardWrapper>
        {weather.map((weather: WeatherData) => {
          return (
            <WeatherCard
              city={weather.city}
              weekday={weather.weekday}
              date={weather.date}
              temp={weather.temp}
            />
          );
        })}
      </CardWrapper>
    </SectionWrapper>
  );
};

export default DisplayCards;
