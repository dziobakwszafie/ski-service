import React from "react";
import styled from "styled-components";
import { queryForTitle, queryForText } from "../../../../../styles/devices";
import colors from "../../../../../styles/colors";

const IntroWaxStyles = styled.div`
  padding: 2vw;
  width: 100%;
`;

const IntroWaxTitleStyles = styled.h1`
  padding-bottom: 1rem;
  color: ${colors.text.Primary5};
  ${queryForTitle}
`;

const IntroWaxTextStyles = styled.div`
  margin-bottom: 2vw;
  line-height: 1.5em;

  ul {
    padding: 2vw;
    padding-left: 4vw;
  }
  ${queryForText}
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

      <IntroWaxTextStyles>
        Smary po krótce dzielimy na:
        <ul>
          <li>
            hydrokarbonowe - najtańsze i najpopularniejsze, dla zwykłego ludzia
            spokojnie wystarczą
          </li>
          <li>
            fluorowe - dla zawodników, narta jest szybsza bo powłoka ślizgu ma
            lepsze właściwości hydrofobowe
          </li>
        </ul>
      </IntroWaxTextStyles>
      <IntroWaxTextStyles>
        Potem jeszcze trzeba zdecydować po jakim śniegu jeździmy. Jak jest mróz,
        to warto prosić o twardszy smar, który dłuzej zostanie na ślizgu.
      </IntroWaxTextStyles>
    </IntroWaxStyles>
  );
};

export default IntroWax;
