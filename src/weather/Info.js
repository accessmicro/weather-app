import { InfoTitle, InfoValue, WeatherInfo } from "./components/components";

const Info = ({ infoTitle, infoValue }) => {
  return (
    <WeatherInfo>
      <InfoTitle >{infoTitle}:</InfoTitle>
      <InfoValue>{infoValue}</InfoValue>
    </WeatherInfo>
  );
};

export default Info;
