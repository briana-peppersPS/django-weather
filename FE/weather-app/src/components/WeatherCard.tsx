import { Card, CardContent, Typography } from "@mui/material";
import { styled } from "styled-components";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

interface WeatherCardProps {
  city: string;
  weekday: string;
  date: string;
  temp: string;
  weather?: string; //icon
}

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 5px 0;
`;

const CardWrapper = styled(Card)`
  min-width: 275px;
  margin: 10px;
  background-color: #489e96 !important;
  border: 0.2rem solid #cbe7e4;
  border-radius: 5%;
  text-align: center;
`;

const Icon = styled(WbSunnyIcon)`
  color: #fec601;
`;

const WeatherCard = ({
  weekday,
  date,
  temp,
  weather,
  city,
}: WeatherCardProps) => {
  return (
    <CardWrapper>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {city}
        </Typography>
        <Typography variant="body1" component="div">
          {weekday} - {date}
        </Typography>
        <Typography variant="h6" color="Highlight">
          {temp}
        </Typography>
        <Typography variant="body2">{weather}</Typography>
        <IconWrapper>
          <Icon />
        </IconWrapper>
      </CardContent>
    </CardWrapper>
  );
};

export default WeatherCard;
