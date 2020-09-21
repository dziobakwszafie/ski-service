import React from "react";
import styled from "styled-components";

const IntroWaxStyles = styled.div`
  width: 100%;
  padding: 3vw;
  @media only screen and (min-width: 1921px) {
    font-size: 1.2vw;
  }
  @media only screen and (max-width: 1920px) {
    font-size: 1.2vw;
  }
  @media only screen and (max-width: 1500px) {
    font-size: 1.3vw;
  }
  @media only screen and (max-width: 1024px) {
    font-size: 2.2vw;
  }
`;

const IntroWaxTitleStyles = styled.h1`
  font-family: "Permanent Marker", cursive;
  font-size: 2em;
  padding-bottom: 1rem;
  color: #f37736;
`;

const IntroWaxTextStyles = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 1em;
  line-height: 1.5em;
  margin-bottom: 1vw;
`;

const IntroWax = () => {
  return (
    <IntroWaxStyles>
      <IntroWaxTitleStyles>SMAROWANKO</IntroWaxTitleStyles>
      <IntroWaxTextStyles>
        Co ile powinno się smarować narty? No ja smaruje co jazde. A
        przynajmniej smarowałem w zeszłym roku jak miałem czas. Generalnie po
        smarowaniu ślizg powinien być czarny ( no chyba, że masz komórki Atomica
        albo inny model nart z kolorowym ślizgiem, to wtedy nie xD ) po jeździe
        zacznie się robić szary począwszy od krawędzi. Wynika to z tego, że
        zwyczajnie się on tam wyciera. Także jak widzisz że robi ci się sporo
        tego szarego to zgodnie ze sztuką wypadałoby oddać nartę do smarowania.
      </IntroWaxTextStyles>

      <IntroWaxTextStyles>
        Smarowanie to zabieg, który odczuć może każdy kto trochę pojeździ.
        Faktycznie robi różnice gdy narta jest świeżo zrobiona. Tylko błagam,
        pamietaj - smar na slizgu trzyma się ze dwa, trzy dni, może ciutke
        dłużej. Potem zostają resztki.
      </IntroWaxTextStyles>

      <IntroWaxTextStyles>
        Więc jak oddałeś narty do jakiegoś marketowego serwisu w grudniu, to w
        lutym już raczej nie masz tego smaru na ślizgu :P
      </IntroWaxTextStyles>
    </IntroWaxStyles>
  );
};

export default IntroWax;
