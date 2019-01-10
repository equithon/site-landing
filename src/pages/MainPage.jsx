/* --- Packages and Components --- */
import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

import { mediaSize } from '../data/siteTools';
import { mainPageData } from '../data/siteData';

import GenericButton from '../components/GenericButton';

/* --- Images --- */
import HeroImg from '../static/img/hero.png';
import AbstractShape1 from '../static/img/shapes/main_about_middle_left@2x.png';

/* --- Styles --- */
const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0;
  box-sizing: border-box;
`;

const ContentContainer = styled.div`
  padding-top: 10vh;
  width: 80vw;
  height: 80vh;
  margin: auto;

  color: ${props => props.theme.offBlack};

  display: grid;
  grid-column-gap: 3vw;
  grid-template-columns: 6fr 4fr;
  grid-template-rows: 4fr 1fr 3fr;
  grid-template-areas:
    'header hero'
    'action hero'
    'button hero';

  ${mediaSize.tablet`
    padding-top: 15vh;
    height: 80vh;

    grid-template-columns: auto;
    grid-template-rows: 6fr 2fr 1fr 1fr;
    grid-template-areas:
      'hero'
      'header'
      'action'
      'button';
  `};

  ${mediaSize.phone`
    height: 70vh;
    grid-template-rows: 5fr 1fr 1fr 1fr;
  `};
`;

const HeroImgContainer = styled.img`
  grid-area: hero;
  justify-self: end;
  align-self: center;
  max-height: 100%;
  max-width: 100%;

  ${mediaSize.tablet`
    justify-self: center;
  `};
`;

const HeaderTextContainer = styled.div`
  grid-area: header;
  align-self: end;
  margin-bottom: 2vh;
  position: relative;
  z-index: 1;

  ${mediaSize.tablet`
    justify-self: center;
  `};

  ${mediaSize.phone`
    padding-top: 5%;
  `};
`;

const Header = styled.span`
  font-size: 3.5vw;
  font-weight: 500;
  position: relative;

  &:after {
    content: '${props => props.shadowText}';
    color: rgba(199, 199, 199, 0.4);
    font-size: 1.3em;

    position: absolute;
    top: -3vmin;
    right: -1vmin;
    z-index: -1;
  }

  ${mediaSize.tablet`
    font-size: 7vw;
  `};

  ${mediaSize.phone`
    font-size: 7.5vw;
  `};
`;

const ActionTextContainer = styled.div`
  grid-area: action;
  align-self: start;
  margin-bottom: 5vh;
  width: 70%;

  font-size: 1.5vw;

  ${mediaSize.tablet`
    justify-self: center;
    text-align: center;
    width: 90%;

    font-size: 3vw;
  `};

  ${mediaSize.phone`
    font-size: 4vw;
  `};
`;

const MainButtonContainer = styled.div`
  grid-area: button;
  align-self: start;

  ${mediaSize.tablet`
    justify-self: center;
  `};
`;

const ActionButton = styled(GenericButton)`
  height: 3vw;
  font-weight: 500;
  font-size: 2vmin;

  ${mediaSize.tablet`
    font-size: 2.5vmin;
    height: 8vw;
  `};

  ${mediaSize.phone`
    height: 12vw;
    font-size: 5vmin;
  `};
`;

const ShapeContainer = styled.img`
  position: absolute;
  bottom: -15vw;
  left: -20px;
  max-width: 30vw;
  max-height: 30vw;
  z-index: -1;

  ${mediaSize.tablet`
    max-height: 50vw;
    max-width: 50vw;
    left: -14vw;
    bottom: -12vw;
  `};

  ${mediaSize.phone`
    max-height: 60vw;
    max-width: 60vw;
    left: -5vw;
    bottom: -15vw;
  `};
`;

/* --- Component --- */
class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <PageContainer className="section" id="main">
        <Fade bottom distance="5vw">
          <ContentContainer>
            <HeroImgContainer src={HeroImg} alt="A person thinking." />
            <HeaderTextContainer>
              <Header shadowText={mainPageData.header.split(' ').splice(-1)}>
                {mainPageData.header}
              </Header>
            </HeaderTextContainer>
            <ActionTextContainer>{mainPageData.actionText}</ActionTextContainer>
            <MainButtonContainer>
              <ActionButton
                text={mainPageData.actionButton.text}
                backgroundColor="#66adef"
                color="#fff"
                click={() => {}}
              />
            </MainButtonContainer>
          </ContentContainer>
        </Fade>
        <ShapeContainer src={AbstractShape1} />
      </PageContainer>
    );
  }
}

export default MainPage;
