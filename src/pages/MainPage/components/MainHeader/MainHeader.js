import React from "react";
import styled from "styled-components";
import device from "../../../../styles/devices";
import typography from "../../../../styles/typography";
import colors from "../../../../styles/colors";

const HeaderStyles = styled.div`
  height: 56.25vw;
  max-width: 100vw;
`;

const VideoContainer = styled.div`
  height: 56.25vw;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: hidden;
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
  ${typography.header.XXL}
  color: ${colors.text.Primary1};
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  white-space: nowrap;
  ${device.L} {
    ${typography.header.L}
  }
`;

const SubtitleStyles = styled.h2`
  ${typography.header.XL}
  color: ${colors.text.Primary1};
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  white-space: nowrap;
  ${device.L} {
    ${typography.header.M}
  }
`;

const MainHeader = () => {
  return (
    <HeaderStyles>
      <VideoContainer>
        <VideoStyles
          data-module-vimeo-player="video-promo"
          src="https://player.vimeo.com/video/434891103?controls=false&amp;autoplay=1&amp;transparent=false&amp;autopause=false&amp;loop=1&amp;muted=1"
          width="1280"
          height="720"
          data-vimeo-player-autoplay="true"
          frameborder="0"
          webkitallowfullscreen=""
          mozallowfullscreen=""
          allowfullscreen=""
          allow="autoplay; encrypted-media"
          data-ready="true"
        ></VideoStyles>
      </VideoContainer>
      <OverflowStyles>
        <TitleStyles>NIESMIALI ROMANTYCY</TitleStyles>
        <SubtitleStyles>SERVICE DEPARTMENT</SubtitleStyles>
      </OverflowStyles>
    </HeaderStyles>
  );
};

export default MainHeader;
