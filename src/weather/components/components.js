import styled, { keyframes } from "styled-components";
import img from "../../img/bgc.png";
/**
 * @param Weather.js
 */
const action = keyframes`
0% { transform: translateY(0); }
  100% { transform: translateY(-10px); }
`;
export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100vh;
    background-image: url(${img});
    background-repeat: repeat;
    filter: blur(5px) sepia(20%);
  }
`;
export const RecommendList = styled.div`
  position: absolute;
  top: 12%;
  left: 50%;
  transform: translate(-50%, 0);
  width: 550px;
  margin: 20px auto;
  z-index: 10;
`;
export const WeatherIcon = styled.img.attrs((props) => ({
  src: props.imgURL,
}))`
  margin: -25px auto;
  height: 200px;
  width: 200px;
  object-fit: cover;
  animation: ${action} 1s infinite alternate;
`;
export const WeatherImg = styled.div`
  width: 100%;
  height: 150px;
  overflow: hidden;
`;
export const Typography = styled.h1`
  width: 100%;
  height: 60px;
  font-size: 36px;
  font-weight: 600;
  line-height: 60px;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  transition: all 0.3s;
`;
export const Des = styled.h4`
  width: 100%;
  font-size: 24px;
  line-height: 24px;
  font-weight: 500;
  height: 24px;
  text-align: center;
`;
export const Main = styled.div`
  padding: 20px 10px 20px 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  transform: translate(-50%, -50%);
  width: 550px;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  gap: 5px;
  -webkit-box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
  -moz-box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: bisque;
    opacity: 0.5;
    z-index: -3;
    border-radius: 20px;
  }
`;
/**
 * @param Recommend.js
 */
export const RecommendItem = styled.div`
  height: 25px;
  background-color: rgba(250, 236, 219);
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 1px;
  padding-left: 10px;
  cursor: pointer;
  &:first-child {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
  &:last-child {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }
`;
/**
 * @param Info.js
 */
export const InfoValue = styled.span`
  height: 100%;
  width: 50%;
  display: inline-block;
  font-weight: 600;
`;
export const InfoTitle = styled(InfoValue)`
  line-height: 50px;
  padding-left: 10px;
  font-size: 16px;
  font-style: italic;
  font-weight: unset;
`;
export const WeatherInfo = styled.div`
  width: calc(50% - 10px);
  height: 50px;
`;

/**
 * @param Input.js
 */
export const Form = styled.form`
  position: absolute;
  top: 5%;
  left: 50%;
  transform: translate(-50%, 0);
  width: 550px;
  height: 60px;
  margin: 20px auto;
  background-color: transparent;
`;
export const Label = styled.label`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(0px, -50%);
  text-align: center;
  line-height: 60px;
  background-color: transparent;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: bisque;
    border-radius: 10px;
    opacity: 0.5;
  }
  .fas {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(10px, -50%);
    font-size: 24px;
    color: #696969;
    font-weight: 600;
  }
`;
export const InputText = styled.input.attrs({ type: "text" })`
  background-color: transparent;
  border: 1px solid grey;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  padding-left: 40px;
  padding-right: 10px;
  outline: none;
  font-size: 30px;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  -webkit-box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
  -moz-box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);

  &::placeholder {
    font-family: "Poppins", sans-serif;
    font-size: 30px;
    font-weight: 500;
    font-style: italic;
  }
`;
