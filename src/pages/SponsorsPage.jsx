/* --- Packages and Components --- */
import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import withReveal from 'react-reveal/withReveal';

import { mediaSize } from '../site/siteTools';
import { sponsorsPageData } from '../site/siteData';

import ScrollingSponsorPane from '../components/ScrollingSponsorPane';

/* --- Images --- */
import AbstractShapeSponsor from '../static/img/shapes/sponsor_interested@2x.png';

/* --- Styles --- */
const PageContainer = styled.div`
  width: 100vw;
  height: auto;
  margin: 0;
  box-sizing: border-box;
  margin-bottom: 3vw;
`;

const ContentContainer = styled.div`
  padding: 10vw 0;
  width: 100vw;
  margin: auto;
`;

const PageHeader = withReveal(
  styled.div`
    padding-left: 10vw;
    font-size: 2.5vw;
    font-weight: 500;
    color: white;
    position: relative;
    display: inline-block;

    ${mediaSize.tablet`
      font-size: 5vw;
      margin-bottom: 20px;
    `};

    ${mediaSize.phone`
      font-size: 7vw;
      margin-bottom: 30px;
      color: ${props => props.theme.offBlack};
    `};
  `,
  <Fade bottom />
);

/* eslint-disable */
const CallForSponsorsContainer = withReveal(
  /* eslint-enable */
  styled.div`
    width: 40vw;
    height: 40vw;

    display: flex;
    margin: auto;

    text-align: center;
    font-size: 1.5vw;
    font-weight: 500;
    color: ${props => props.theme.offBlack};

    & > span {
      margin: auto;
    }

    ${mediaSize.tablet`
    font-size: 2.5vw;
    width: 50vw;
    height: 65vw;
  `};

    ${mediaSize.phone`
    font-size: 4vw;
    width: 70vw;
    height: 35vw;
  `};
  `,
  <Fade bottom />
);

/* eslint-disable */
const SponsorPaneContainer = withReveal(
  /* eslint-enable */
  styled.div`
    width: 100vw;
    height: 40vw;
    padding: 5vw 0;

    ${mediaSize.tablet`
    width: 100vw;
    height: 110vw;
  `};

    ${mediaSize.phone`
    width: 100vw;
    height: 140vw;
  `};
  `,
  <Fade duration={2000} />
);

const SponsorUsPleaseContainer = styled.div`
  width: 40vw;
  margin: 0 auto;
  text-align: center;

  color: white;

  & div.action-text {
    font-weight: 500;
    padding-bottom: 5px;
    font-size: 1.5vw;

    ${mediaSize.tablet`
      font-size: 2.5vw;
    `};

    ${mediaSize.phone`
      font-size: 4vw;
    `};
  }

  & a.action-link {
    color: white;
    font-size: 1.3vw;

    ${mediaSize.tablet`
      font-size: 2.1vw;
    `};

    ${mediaSize.phone`
      font-size: 3.5vw;
    `};
  }

  ${mediaSize.tablet`
    margin: 10vw auto 0 auto;
  `};

  ${mediaSize.phone`
    margin: 20vw auto 0 auto;
    width: 60vw;
  `};
`;

const ShapeContainer = styled.div`
  position: relative;
  top: -23vw;
  left: 5vw;
  width: 0;
  height: 0; // this div is used solely to allow an element to be positioned relatively but out of flow

  z-index: -1;

  & > img {
    max-width: 100vw;
    max-height: 100vw;

    ${mediaSize.tablet`
      max-height: 155vw;
      max-width: 155vw;
    `};

    ${mediaSize.phone`
      max-height: 220vw;
      max-width: 220vw;
    `};
  }

  ${mediaSize.tablet`
    top: -35vw;
    left: 0vw;
  `};

  ${mediaSize.phone`
    top: -50vw;
    left: 0vw;
  `};
`;

/* --- Component --- */
class SponsorsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <PageContainer className="section" id="sponsors">
        <ContentContainer>
          <PageHeader>{sponsorsPageData.header}</PageHeader>

          <SponsorPaneContainer>
            <ScrollingSponsorPane />
          </SponsorPaneContainer>

          {/* <CallForSponsorsContainer>
            <span>{sponsorsPageData.sponsorUsBlurb}</span>
          </CallForSponsorsContainer> */}

          <SponsorUsPleaseContainer>
            <Fade bottom>
              <div className="action-text">
                {sponsorsPageData.sponsorAction.actionText}
              </div>
              <div>
                <a
                  href={sponsorsPageData.sponsorAction.link.to}
                  className="action-link"
                >
                  {sponsorsPageData.sponsorAction.link.text}
                </a>
              </div>
            </Fade>
            <ShapeContainer>
              <img
                src={AbstractShapeSponsor}
                alt="An abstract blob shaped like a bubble."
              />
            </ShapeContainer>
          </SponsorUsPleaseContainer>
        </ContentContainer>
      </PageContainer>
    );
  }
}

export default SponsorsPage;
