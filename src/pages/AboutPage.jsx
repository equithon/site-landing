/* --- Packages and Components --- */
import React from 'react';
import styled from 'styled-components';

import { mediaSize } from '../data/siteTools';

import { aboutPageData } from '../data/siteData';

/* --- Images --- */
import AboutImg from '../static/img/about_1.png';

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
    height: 90vh;
    grid-template-columns: auto;
    grid-template-rows: 1fr 3fr 1fr;
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
    color: #9c9797;
    width: 100%;
  }

  ${mediaSize.tablet`
    top: 0; right: 0;
    justify-self: center;
    font-size: 3vw;
    margin-bottom: 0;
    text-align: center;
  `};

  ${mediaSize.phone`
    font-size: 4vw;
  `};
`;

const TestimonialQuote = styled.div`
  margin-bottom: 1em;
  //text-align: justify;

  ${mediaSize.tablet`
    text-align: justify;
  `};
`;

const TestimonialAuthorName = styled.div`
  font-style: italic;
  //text-align: right;
`;

const TestimonialAuthorDesc = styled.div`
  font-weight: 300;
  font-style: italic;
  //text-align: center;
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
            <MainHeader>{aboutPageData.header}</MainHeader>
            <MainDesc>{aboutPageData.desc}</MainDesc>
          </MainContainer>

          <TestimonialContainer>
            <TestimonialQuote>
              &quot;{aboutPageData.testimonials[0].authorQuote}&quot;
            </TestimonialQuote>
            <TestimonialAuthorName>
              - {aboutPageData.testimonials[0].authorName}
            </TestimonialAuthorName>
            <TestimonialAuthorDesc>
              {aboutPageData.testimonials[0].authorDesc}
            </TestimonialAuthorDesc>
          </TestimonialContainer>
        </ContentContainer>
      </PageContainer>
    );
  }
}

export default AboutPage;
