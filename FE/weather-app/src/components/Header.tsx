import { Typography } from "@mui/material";
import styled from "styled-components";

const greetingTime = require("greeting-time");

const HeaderWrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ea7317;
  flex-direction: column;
  text-align: center;
`;

const Header = () => {
  const greeting = greetingTime(new Date());

  return (
    <HeaderWrapper>
      <Typography variant="h3" component={"h1"}>
        Weather Forecast
      </Typography>
      <Typography variant="h4" component={"h2"}>
        {greeting}
      </Typography>
    </HeaderWrapper>
  );
};
export default Header;
