import React from "react";
import styled from "styled-components";
import { queryForTitle, queryForText } from "../../../../styles/devices";
import colors from "../../../../styles/colors";
import device from "../../../../styles/devices";
import ludzik from "../../../../assets/ludzik.png";

const DecriptionsStyle = styled.div`
  display: grid;
  grid-gap: 0.2vw;
  grid-template-columns: 33vw auto 33vw;
  grid-template-rows: 20vw auto;
  background-color: ${colors.background.Primary1};
  ${device.M} {
    grid-template-columns: auto;
    grid-template-rows: auto auto auto auto;
  }
`;

const DecriptionsTitleStyle = styled.h3`
  ${queryForTitle}
  color: ${colors.text.Primary7};
  text-align: center;
`;

const DecriptionsTextStyle = styled.div`
  ${queryForText}
  color: ${colors.text.Primary1};
  padding: 2vw;
  ul {
    padding: 3vw;
  }
`;

const First = styled.div`
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 2;
  background-color: ${colors.background.Primary8};
  ${device.M} {
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 2;
  }
`;
const Second = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
  background-color: ${colors.background.Primary4};
  ${device.M} {
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 2;
    grid-row-end: 3;
  }
`;
const Third = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;
  background-color: ${colors.background.Primary5};
  ${device.M} {
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 3;
    grid-row-end: 4;
  }
`;
const Fourth = styled.div`
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 3;
  background-color: ${colors.background.Primary6};
  ${device.M} {
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 4;
    grid-row-end: 5;
  }
`;

const Wrapper = styled.div`
  display: flex;
`;

const ImgStyle = styled.div`
  width: 100%;
  background-image: url("${ludzik}");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;

const Descriptions = () => {
  return (
    <DecriptionsStyle>
      <First>
        <DecriptionsTitleStyle>Panie, jo sie nie znom</DecriptionsTitleStyle>
        <Wrapper>
          <ImgStyle />

          <div>
            <DecriptionsTextStyle>
              Spoko luzik, nie każdy musi się znać.
            </DecriptionsTextStyle>
            <DecriptionsTextStyle>Już tłumaczę wszystko.</DecriptionsTextStyle>
          </div>
        </Wrapper>
      </First>

      <Second>
        <DecriptionsTextStyle>
          <p>
            <b>Ostrzenie</b> - w przypadku zwykłych nart wystarczy ostrzenie
            pilnikami stalowymi. Pilniki diamentowe służą głównie zawodnikom, bo
            pozwalają na uzyskanie gładszej powierzchni krawędzi.
          </p>
          <p> Jak wygląda u mnie proces ostrzenia?</p>
          <ul>
            <li>
              powierzchnia krawędzi jest traktowana pilnikami o (zazwyczaj) 2
              gradacjach, aż do osiądnięcia finalnego efektu
            </li>
            <li>
              przy wybraniu opcji z diamentami, po etapie skrawania pilnikami
              stalowymi, używane są 3 gradacje pilników diamentowych, które
              polerują krawędź
            </li>
          </ul>
        </DecriptionsTextStyle>
      </Second>
      <Third>
        <DecriptionsTextStyle>
          <p>
            <b>Smarowanko</b> - w przypadku zwykłych nart wystarczy smarowanie
            smarami hydrokarbonowymi. Smary z dodatkiem fluoru służą głównie
            zawodnikom, bo pozwalają na uzyskanie bardziej hydrofobowej
            powierzchni ślizgu, co wpływa na szybkość nart.
          </p>
          <p> Jak wygląda u mnie proces smarowania?</p>
          <ul>
            <li>
              na ślizg nanoszona jest warstwa smaru na gorąco, która następnie
              jest kilkukrotnie "wprasowywana" w ślizg
            </li>
            <li>
              następnie nadmiar smaru jest cyklinowany, a ślizg polerowany
              szczotkami o różnej twardości, na koniec zaś polerowany korkiem
            </li>
            <li>
              w przypadku smaru z fluorem, jest on nawet kilkunastokrotnie
              "wprasowywany" w ślizg w celu jak najlepszego nasączenia struktury
            </li>
          </ul>
        </DecriptionsTextStyle>
      </Third>
      <Fourth>
        <DecriptionsTextStyle>
          <p>
            <b>Dostawa</b> - chcesz żebyśmy odebrali od Ciebie narty, a
            nastepnie przywieźli pod drzwi? Nie ma problemu. Szczegóły w krótce
            bo na razie musimy to rozkmninić.
          </p>
        </DecriptionsTextStyle>
      </Fourth>
    </DecriptionsStyle>
  );
};

export default Descriptions;
