import React from "react";
import styled from "styled-components";

const HeaderStyles = styled.div`
  height: 100vh;
  max-width: 100vw;
`;

const VideoStyles = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  max-width: 100%;
`;

const OverflowStyles = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  text-align: center;
`;

const TitleStyles = styled.h1`
  font-family: "Bangers", cursive;
  font-size: 120px;
  color: #ff3b3f;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const SubtitleStyles = styled.h2`
  font-family: "Permanent Marker", cursive;
  font-size: 80px;
  color: #ff3b3f;
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Header = () => {
  return (
    <HeaderStyles>
      <div>
        <VideoStyles
          data-module-vimeo-player="video-promo"
          src="https://player.vimeo.com/video/434891103?controls=false&amp;autoplay=1&amp;transparent=false&amp;autopause=false&amp;loop=1&amp;muted=1"
          width="1920"
          height="1080"
          data-vimeo-player-autoplay="true"
          frameborder="0"
          webkitallowfullscreen=""
          mozallowfullscreen=""
          allowfullscreen=""
          allow="autoplay; encrypted-media"
          data-ready="true"
          class="is-loaded"
        ></VideoStyles>
      </div>
      <OverflowStyles>
        <TitleStyles>
          NIEŚMIALI ROMANTYCY<br></br>
          RACING TEAM
        </TitleStyles>
        <SubtitleStyles>SERVICE DEPARTMENT</SubtitleStyles>
      </OverflowStyles>
    </HeaderStyles>
  );
};

export default Header;
