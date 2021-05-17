import axios from "axios";
import { useEffect, useState } from "react";
import Info from "./Info";
import Input from "./Input";
import Recommend from "./Recommend";
import {
  Container,
  Des,
  Main,
  RecommendList,
  Typography,
  WeatherIcon,
  WeatherImg,
} from "./components/components";

const Weather = () => {
  const API_KEY = "307c6c129d748887623bcb77fcf93c58";
  const [valueSearch, setValueSearch] = useState("");
  const [capitals, setCapitals] = useState([]);
  const [alpha2Code, setAlpha2Code] = useState({});
  const [keys, setKeys] = useState([]);
  const [valueRecommend, setValueRecommend] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const COUNTRIES_API = "https://restcountries.eu/rest/v2/all";
    axios.get(COUNTRIES_API).then((res) => {
      let map = new Map();
      setCapitals([
        ...res.data.map((country) => {
          map.set(country.alpha2Code, country.name);
          return country.capital;
        }),
      ]);

      setAlpha2Code({ ...Object.fromEntries(map) });
    });
  }, []);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const link = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&lang=vi&appid=${API_KEY}`;
        axios.get(link).then((res) => {
          setData(getData({ ...res.data }));
        });
      },
      (err) => {
        console.log(`err`, err);
      }
    );
  }, [alpha2Code]);

  const onHandleChangeSearch = (event) => {
    setValueSearch(event.target.value);
  };

  useEffect(() => {
    if (valueSearch.length >= 2) {
      setValueRecommend([
        ...capitals.filter(
          (capital) =>
            capital.toLowerCase().indexOf(valueSearch.toLowerCase()) !== -1
        ),
      ]);
    } else {
      setValueRecommend([]);
    }
  }, [valueSearch]);

  const getData = (res) => {
    return {
      name: res.name + ", " + alpha2Code[`${res.sys.country}`],
      description:
        res.weather[0].description.charAt(0).toUpperCase() +
        res.weather[0].description.slice(1),
      icon: ["Link icon", setLinkICON(res.weather[0].icon)],
      lon: ["Kinh độ", res.coord.lon],
      lat: ["Vĩ độ", res.coord.lat],
      humidity: ["Độ ẩm", res.main.humidity + `%`],
      temp: ["Nhiệt độ", res.main.temp + "°C"],
      temp_around: [
        "Nhiệt độ từ",
        res.main.temp_min + "- " + res.main.temp_max + "°C",
      ],
      speed: ["Tốc độ gió", `${res.wind.speed} m/s`],
      deg: ["Hướng gió", `${res.wind.deg}°`],
      clouds: ["Có mây", res.clouds.all + `%`],
    };
  };

  const setLinkAPI = (name) => {
    const ENDPOINT = `http://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&lang=vi&appid=`;
    return ENDPOINT + API_KEY;
  };

  const setLinkICON = (icon) => {
    return `http://openweathermap.org/img/wn/${icon}@4x.png`;
  };

  const callAPI = (link) => {
    axios
      .get(link)
      .then((res) => {
        setData(getData({ ...res.data }));
      })
      .then((err) => {
        console.log("err :>> ", err);
      });
  };

  const preHandleEnterInput = (value) => {
    if (value !== "") {
      callAPI(setLinkAPI(value.trim()));
      setValueSearch("");
      setValueRecommend([]);
    }
  };

  const onHandleEnterInput = (event) => {
    event.preventDefault();
    preHandleEnterInput(valueSearch);
  };

  useEffect(() => {
    setKeys(Object.keys(data));
  }, [data]);

  const onHandChooseRecommend = (event) => {
    setValueSearch(event.target.textContent);
    preHandleEnterInput(event.target.textContent);
  };

  const listRecommend = valueRecommend.map((item, index) => (
    <Recommend
      key={index}
      valueRecommend={item}
      handleChooseRecommend={onHandChooseRecommend}
    />
  ));

  const listInfo = keys.map((key, index) =>
    key === "icon" ? (
      <WeatherImg key={index}>
        <WeatherIcon imgURL={data[key][1]} alt="icon" />
      </WeatherImg>
    ) : key === "name" ? (
      <Typography key={index}>{data[key]}</Typography>
    ) : key === "description" ? (
      <Des key={index}>{data.description}</Des>
    ) : (
      <Info infoTitle={data[key][0]} infoValue={data[key][1]} key={index} />
    )
  );

  return (
    <Container>
      <Input
        value={valueSearch}
        handleChangeSearch={onHandleChangeSearch}
        handleEnterInput={onHandleEnterInput}
      >
        {listRecommend.length > 0 && (
          <RecommendList>{listRecommend}</RecommendList>
        )}
      </Input>
      {keys.length > 0 && <Main className="weather__main">{listInfo}</Main>}
    </Container>
  );
};

export default Weather;
