/* --- Packages and Components --- */
import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import isMobile from 'react-device-detect';

import { mediaSize } from '../site/siteTools';

import { aboutPageData } from '../site/siteData';

/* --- Images --- */
import AboutImg from '../static/img/about_1.png';
import MandyTestimonialPic from '../static/img/mandy_testimonial_pic.jpg';

/* --- Styles --- */
const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0;
  box-sizing: border-box;
`;

const ContentContainer = styled.div`
  padding-top: 10vh;
  width: 85vw;
  height: 80vh;
  margin: auto;

  color: ${props => props.theme.offBlack};

  display: grid;
  grid-template-columns: 5fr 4fr;
  grid-template-rows: 2fr 2fr;
  grid-template-areas:
    'pic main'
    'pic testimonial';

  ${mediaSize.tablet`
    padding-top: 5vh;
    width: 80vw;
    height: 95vh;
    grid-template-columns: auto;
    grid-template-rows: 1fr 10fr 1fr;
    grid-row-gap: 4vw;
    grid-template-areas:
      'main'
      'pic'
      'testimonial';
  `};

  ${mediaSize.phone`
    grid-template-rows: 1fr 3fr 1fr;
  `};
`;

const AboutImgContainer = styled.img`
  position: relative;
  left: 2.5vw;
  top: 2em;
  grid-area: pic;
  justify-self: end;
  align-self: center;
  max-height: 100%;
  max-width: 100%;

  ${mediaSize.tablet`
    top: 0; left: 0;
    justify-self: center;
  `};
`;

const MainContainer = styled.div`
  grid-area: main;
  align-self: end;
  margin-bottom: 5vh;
  right: 2.5vw;
  position: relative;
  z-index: 1;
  top: -2em;

  ${mediaSize.tablet`
    top: 0; right: 0;
    justify-self: center;
    align-self: center;
    margin-bottom: 0;
  `};

  ${mediaSize.phone`
    padding-top: 5%;
  `};
`;

const MainHeader = styled.div`
  font-size: 2.5vw;
  font-weight: 500;
  margin-bottom: 10px;

  ${mediaSize.tablet`
    font-size: 5vw;
  `};

  ${mediaSize.phone`
    font-size: 7vw;
  `};
`;

const MainDesc = styled.div`
  font-size: 1.3vw;
  font-weight: 400;

  ${mediaSize.tablet`
    font-size: 3vw;
  `};

  ${mediaSize.phone`
    font-size: 4vw;
  `};
`;

const TestimonialContainer = styled.div`
  grid-area: testimonial;
  align-self: start;
  margin-bottom: 5vh;
  width: 100%;
  right: 2.5vw;
  position: relative;
  z-index: 1;
  top: -2em;

  font-size: 1.3vw;

  & > div {
    display: grid;
    grid-template-columns: 4vw auto;
    grid-column-gap: 1vw;
    grid-template-rows: 5.5vw 2vw 2vw;
    grid-template-areas:
      'quote quote'
      'pic name'
      'pic desc';

    ${mediaSize.tablet`
      height: auto;
      display: inline-block;
    `};
  }

  ${mediaSize.tablet`
    top: 0; right: 0;
    margin-bottom: 0;

    font-size: 3vw;
    text-align: center;
  `};

  ${mediaSize.phone`
    font-size: 4vw;
  `};
`;

const TestimonialQuote = styled.div`
  grid-area: quote;
  font-style: italic;

  ${mediaSize.tablet`
    margin-bottom: 2vw;
  `};
`;

const TestimonialAuthorName = styled.div`
  grid-area: name;
  align-self: end;
  font-weight: 600;
`;

const TestimonialAuthorDesc = styled.div`
  grid-area: desc;
  align-self: start;

  ${mediaSize.tablet`
    margin-bottom: 2vw;
  `};
`;

const TestimonialAuthorImg = styled.div`
  grid-area: pic;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    border-radius: 50%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.4);
  }

  & > img {
    border-radius: 50%;
    max-width: 100%;
    max-height: 100%;
  }

  ${mediaSize.tablet`
    width: 10vw;
    height: 10vw;
    margin: auto;
  `};

  ${mediaSize.phone`
    width: 15vw;
    height: 15vw;
  `};
`;

/* --- Component --- */
class AboutPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <PageContainer className="section" id="about">
        <ContentContainer>
          <AboutImgContainer src={AboutImg} />

          <MainContainer>
            <Fade right cascade>
              <div>
                <MainHeader>{aboutPageData.header}</MainHeader>
                <MainDesc>{aboutPageData.desc}</MainDesc>
              </div>
            </Fade>
          </MainContainer>

          <TestimonialContainer>
            <Fade right={!isMobile} bottom={isMobile}>
              <div>
                <TestimonialQuote>
                  &quot;{aboutPageData.testimonials[0].authorQuote}&quot;
                </TestimonialQuote>
                <TestimonialAuthorName>
                  {aboutPageData.testimonials[0].authorName}
                </TestimonialAuthorName>
                <TestimonialAuthorDesc>
                  {aboutPageData.testimonials[0].authorDesc}
                </TestimonialAuthorDesc>
                <TestimonialAuthorImg>
                  <img src={MandyTestimonialPic} alt="Mandy Meindersma" />
                </TestimonialAuthorImg>
              </div>
            </Fade>
          </TestimonialContainer>
        </ContentContainer>
      </PageContainer>
    );
  }
}

export default AboutPage;
