import React from "react";
import styled from "styled-components";
import device, {
  queryForTitle,
  queryForText,
} from "../../../../styles/devices";
import colors from "../../../../styles/colors";

import typography from "../../../../styles/typography";

const DescrStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 3vw 2vw;
  color: ${colors.text.Primary6};

  ul {
    margin: 2vw;
  }
`;

const DescrTitleStyles = styled.h3`
  ${queryForTitle}

  color: ${colors.text.Primary6};
  text-align: center;
`;

const DescrTextStyles = styled.div`
  ${queryForText}
  ${device.XXL} {
    ${typography.body.XS}
  }
  ${device.XL} {
    ${typography.body.XS}
  }
  ${device.L} {
    ${typography.body.S}
  }
  ${device.M} {
    ${typography.body.M}

    margin: auto 3vw;
  }
  ${device.S} {
    ${typography.body.M}
  }
`;

const OrderDesc = () => {
  return (
    <DescrStyles>
      <DescrTitleStyles>CO I JAK</DescrTitleStyles>
      <DescrTextStyles>
        <b>Kąt boczny</b>
        <ul>
          <li>
            89 stopni - jak jeździsz niezbyt dobrze - rzadko wybierane
            ustawienie
          </li>
          <li>
            88 stopni - jak jeździsz nieźle - ustawienie polecane większości
          </li>
          <li>
            87 stopni - jak jeździsz bardzo dobrze - krawędź zaczyna trzymać
            dopiero jak się mocniej pochylisz
          </li>
        </ul>
      </DescrTextStyles>
      <DescrTextStyles>
        <b>Kąt dolny</b>
        <ul>
          <li>0,7 stopnia - jeśli chcesz nartę stabilną głównie na prostych</li>
          <li>0,5 stopnia - ustawienie standardowe</li>
          <li>
            0 stopni - narta będzie bardzo nerwowa i sama będzie inicjowała
            skręt
          </li>
        </ul>
      </DescrTextStyles>
      <DescrTextStyles>
        <b>Rodzaj pilników</b>
        <ul>
          <li>stalowe - standardowy zestaw 2 pilników</li>
          <li>
            diamentowe - rozszerzony zestaw 2 pilników stalowych i 3
            diamentowych dla lepszego wykończenia krawędzi
          </li>
        </ul>
      </DescrTextStyles>
      <DescrTextStyles>
        <b>Przewidywany rodzaj śniegu</b>
        <ul>
          <li>
            mokry - zazwyczaj na wiosnę i przy temperaturach około zera i więcej
          </li>
          <li>zwykły - standardowy smar</li>
          <li>
            zmrożony - używany pzy dużych mrozach lub na stare i zmrożone śniegi
          </li>
        </ul>
      </DescrTextStyles>
      <DescrTextStyles>
        <b>Rodzaj smaru</b>
        <ul>
          <li>smar hydrokarbon - zwyczajny smar, najczęściej używany</li>
          <li>
            smar fluor - smar z dodatkiem fluoru, powoduje, że narta jest
            szybsza
          </li>
        </ul>
      </DescrTextStyles>
    </DescrStyles>
  );
};

export default OrderDesc;
