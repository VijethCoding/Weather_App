import "./App.css";
import WeatherApp from "./WeatherApp";
import styled from "styled-components"

function App() {
  return (
    <>
      <BackGround>
        < WeatherApp />
      </BackGround>
      
    </>
  );
}

export default App;

const BackGround = styled.div`
  background-image: url("/Background.png");
  background-size: cover;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

