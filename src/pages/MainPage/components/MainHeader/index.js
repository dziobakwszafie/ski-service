import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import typography from '../../../../styles/typography';
import colors from '../../../../styles/colors';
import device from '../../../../styles/devices';

const HeaderStyles = styled.div`
  max-width: 100vw;
  height: 56.25vw;
`;

const VideoContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  height: 56.25vw;
`;
const VideoStyles = styled.iframe`
  position: absolute;
  top: 50%;
  left: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);
  width: 110%;
  height: 110%;
  vertical-align: middle;
  ${device.L} {
    width: 130%;
    height: 130%;
  }
  ${device.XS} {
    width: 160%;
    height: 160%;
  }
`;

const OverflowStyles = styled.div`
  position: relative;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  text-align: center;
`;

const TitleStyles = styled.h1`
  ${typography.header.XL}

  position: absolute;
  top: 35%;
  left: 50%;
  color: ${colors.text.Primary4};
  transform: translate(-50%, -50%);
  white-space: nowrap;
`;

const SubtitleStyles = styled.h2`
  ${typography.header.XL}

  position: absolute;
  top: 55%;
  left: 50%;
  color: ${colors.text.Primary3};
  transform: translate(-50%, -50%);
  white-space: nowrap;
`;

const Wrapper = styled.div`
  position: absolute;
  top: 5vw;
  left: 5vw;
  ${device.XS} {
    top: 3vw;
  }
`;

const Wrapper2 = styled.div`
  position: absolute;
  top: 10vw;
  left: 5vw;
`;

const Wrapper3 = styled.div`
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ButtonStyles = styled.div`
  position: relative;
  display: block;
  width: 250px;
  height: 50px;
  border: 1px solid ${colors.text.Primary7};
  border-radius: 3px;
  background-color: rgba(255, 255, 255, 0.3);
  color: ${colors.text.Primary7};
  font-family: sans-serif;
  font-size: 18px;
  letter-spacing: 2px;
  line-height: 50px;
  text-align: center;
  text-decoration: none;
  transition: all 0.35s;
  ${device.M} {
    width: 180px;
    height: 35px;
    font-size: 14px;
    line-height: 35px;
  }
  ${device.S} {
    width: 120px;
    height: 30px;
    font-size: 10px;
    line-height: 30px;
  }
  ${device.XS} {
    height: 24px;
    line-height: 24px;
  }

  span {
    position: relative;
    z-index: 2;
  }

  ::after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background-color: ${colors.background.Secondary1};
    transition: all 0.35s;
  }

  :hover {
    color: ${colors.text.Primary2};
    cursor: pointer;
  }

  :hover::after {
    width: 100%;
  }
`;

const ButtonSecondStyles = styled(ButtonStyles)`
  border: 2px solid ${colors.text.Primary5};
  background-color: rgba(14, 154, 167, 0.3);
`;

const MainHeader = ({ reference, click }) => {
  return (
    <HeaderStyles>
      <VideoContainer>
        <VideoStyles
          data-module-vimeo-player="video-promo"
          src="https://player.vimeo.com/video/472020208?controls=false&amp;autoplay=1&amp;transparent=false&amp;autopause=false&amp;loop=1&amp;muted=1"
          width="1920"
          height="1080"
          data-vimeo-player-autoplay="true"
          frameborder="0"
          webkitallowfullscreen=""
          mozallowfullscreen=""
          allowfullscreen=""
          allow="autoplay; encrypted-media"
          data-ready="true"
        />
      </VideoContainer>
      <OverflowStyles>
        <TitleStyles>NIESMIALI ROMANTYCY</TitleStyles>
        <SubtitleStyles>SERVICE DEPARTMENT</SubtitleStyles>
        <Wrapper>
          <ButtonStyles>
            <Link to="/order">
              <span>Złóż zamówienie</span>
            </Link>
          </ButtonStyles>
        </Wrapper>
        <Wrapper2>
          <ButtonStyles>
            <Link to="/prices">
              <span>Sprawdź ceny</span>
            </Link>
          </ButtonStyles>
        </Wrapper2>
        <Wrapper3 ref={reference}>
          <ButtonSecondStyles onClick={click}>
            <span>Przejdź niżej!</span>
          </ButtonSecondStyles>
        </Wrapper3>
      </OverflowStyles>
    </HeaderStyles>
  );
};

export default MainHeader;
