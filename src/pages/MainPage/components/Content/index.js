import React from 'react';
import styled from 'styled-components';
import IntroSharp from './IntroSharp';
import IntroWax from './IntroWax';
import ExtraInfo from './ExtraInfo';
import myface from '../../../../assets/myface.jpeg';
import wax from '../../../../assets/wax.jpeg';
import service from '../../../../assets/service.jpg';
import mountain from '../../../../assets/mountain.PNG';
import drawboot from '../../../../assets/drawboot.PNG';
import skibar from '../../../../assets/skibar.jpeg';
import device from '../../../../styles/devices';
import colors from '../../../../styles/colors';

const Main = styled.div`
  display: grid;
  grid-gap: 0.33333vw;
  grid-template-columns: 27.83333vw 7.83333vw 19.83333vw 15.83333vw auto;
  grid-template-rows: auto auto 29vw 29vw;
  background-color: ${colors.background.Primary1};
  border-bottom: 0.33333vw solid ${colors.background.Primary1};
  ${device.M} {
    grid-template-columns: 50vw auto;
    grid-template-rows: auto auto auto 54vw auto auto 48vw;
  }
`;

const First = styled.div`
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 3;
  background-color: ${colors.background.Primary4};
  ${device.M} {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 3;
  }
`;
const Second = styled.div`
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-end: 2;
  background-color: ${colors.background.Primary2};
  background-image: url('${wax}');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  ${device.M} {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;
  }
`;
const Third = styled.div`
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 3;
  background-color: ${colors.background.Primary2};
  background-image: url('${service}');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  ${device.M} {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;
  }
`;
const Fourth = styled.div`
  grid-column-start: 4;
  grid-row-start: 1;
  grid-row-end: 3;
  grid-column-end: 6;
  background-color: ${colors.background.Primary5};
  ${device.M} {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 3;
    grid-row-end: 4;
  }
`;
const Fifth = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 3;
  grid-row-end: 4;
  background-color: ${colors.background.Primary2};
  background-image: url('${skibar}');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  ${device.M} {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 4;
    grid-row-end: 5;
  }
`;
const Sixth = styled.div`
  grid-column-start: 3;
  grid-column-end: 5;
  grid-row-start: 3;
  grid-row-end: 5;
  background-color: ${colors.background.Primary6};
  ${device.M} {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 5;
    grid-row-end: 7;
  }
`;
const Seventh = styled.div`
  grid-column-start: 5;
  grid-column-end: 6;
  grid-row-start: 3;
  grid-row-end: 4;
  background-color: ${colors.background.Primary2};
  background-image: url('${myface}');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  ${device.M} {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 5;
    grid-row-end: 6;
  }
`;
const Eighth = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 4;
  grid-row-end: 5;
  background-color: ${colors.background.Primary2};
  background-image: url('${drawboot}');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  ${device.M} {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 6;
    grid-row-end: 7;
  }
`;
const Ninth = styled.div`
  grid-column-start: 5;
  grid-column-end: 6;
  grid-row-start: 4;
  grid-row-end: 5;
  background-color: ${colors.background.Primary2};
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('${mountain}');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  ${device.M} {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 7;
    grid-row-end: 8;
  }
`;

const Try = () => {
  return (
    <Main>
      <First>
        <IntroSharp />
      </First>
      <Second></Second>
      <Third></Third>
      <Fourth>
        <IntroWax />
      </Fourth>
      <Fifth></Fifth>
      <Sixth>
        <ExtraInfo />
      </Sixth>
      <Seventh></Seventh>
      <Eighth></Eighth>
      <Ninth></Ninth>
    </Main>
  );
};

export default Try;
