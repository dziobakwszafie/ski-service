import React from "react";
import styled from "styled-components";

const IntroWaxStyles = styled.div`
  max-width: 100%;
  background-color: #009688;
  display: flex;
`;

const IntroWaxTextContainer = styled.div`
  width: 50%;
  padding: 5rem;
  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;

const IntroWaxPhotoContainer = styled.div`
  width: 50%;
`;

const IntroWaxTitleStyles = styled.h1`
  font-family: "Permanent Marker", cursive;
  font-size: 40px;
  color: #f37736;
  padding-bottom: 3rem;
`;

const IntroWaxTextStyles = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  line-height: 30px;
`;

const IntroWax = () => {
  return (
    <IntroWaxStyles>
      <IntroWaxPhotoContainer></IntroWaxPhotoContainer>
      <IntroWaxTextContainer>
        <IntroWaxTitleStyles>SMAROWANKO</IntroWaxTitleStyles>
        <IntroWaxTextStyles>
          Co ile powinno się smarować narty? No ja smaruje co jazde. A
          przynajmniej smarowałem w zeszłym roku jak miałem czas. Generalnie po
          smarowaniu ślizg powinien być czarny ( no chyba, że masz komórki
          Atomica albo inny model nart z kolorowym ślizgiem, to wtedy nie xD )
          po jeździe zacznie się robić szary począwszy od krawędzi. Wynika to z
          tego, że zwyczajnie się on tam wyciera. Także jak widzisz że robi ci
          się sporo tego szarego to zgodnie ze sztuką wypadałoby oddać nartę do
          smarowania.
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
      </IntroWaxTextContainer>
    </IntroWaxStyles>
  );
};

export default IntroWax;
