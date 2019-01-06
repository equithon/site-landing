/* --- Packages and Components --- */
import React from 'react';
import styled from 'styled-components';

import { mediaSize } from '../data/siteTools';
import { previewPageData } from '../data/siteData';

/* --- Images --- */

/* --- Styles --- */
const PageContainer = styled.div`
  width: 100vw;
  height: auto;
  margin: 0;
  background-color: rgb(189, 189, 189);
  box-sizing: border-box;
`;

const ContentContainer = styled.div`
  padding: 10vh 0;
  width: 80vw;
  height: auto;
  margin: auto;

  color: #46484a;
`;

const Header = styled.div`
  font-size: 2.5vw;
  font-weight: 600;
  margin-bottom: 10px;

  ${mediaSize.tablet`
    font-size: 5vw;
  `};

  ${mediaSize.phone`
    font-size: 7vw;
  `};
`;

const PageDesc = styled.div`
  font-size: 1.3vw;

  & div {
    margin-top: 20px;
  }
`;

const Bubble = styled.div`
  border-radius: 50%;
  background-color: ${props => props.backgroundColor};
  color: ${props => props.color};
  width: ${props => props.size};
  height: ${props => props.size};
  text-align: center;
  display: inline-block;
  margin: 2em;
  position: relative;

  & div {
    margin-top: 30%;
  }

  transform: ${props => `rotate(${props.rotate}deg)`};
`;

const SubHeader = styled.div`
  font-size: 2vw;
  font-weight: 600;
  margin-bottom: 1vw;
  margin-top: 3vw;

  ${mediaSize.tablet`
    font-size: 3.5vw;
  `};

  ${mediaSize.phone`
    font-size: 5vw;
  `};
`;

const SneakPeekContainer = styled.div``;

const StatCounter = styled.div`
  display: inline-block;
  margin-right: 10vw;
  & div.number {
    font-size: 6vw;
  }

  & div.subtitle {
    font-size: 2vw;
  }
`;

/* --- Component --- */
class PreviewPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <PageContainer className="section" id="event">
        <ContentContainer>
          <Header>{previewPageData.header}</Header>
          <PageDesc>
            {previewPageData.previewDesc.map(paragraph => (
              <div>{paragraph}</div>
            ))}
          </PageDesc>

          <SubHeader>{previewPageData.lastYear.header}</SubHeader>
          {previewPageData.lastYear.statBubbles.map(bubble => (
            <Bubble
              size="15vw"
              backgroundColor={bubble.backgroundColor}
              color={bubble.color}
              rotate={Math.random() * (15 - -15) + -15}
            >
              <div>{bubble.contents}</div>
            </Bubble>
          ))}

          <SubHeader>{previewPageData.thisYear.header}</SubHeader>
          <SneakPeekContainer>
            {previewPageData.thisYear.statCounters.map(counter => (
              <StatCounter>
                <div className="number">{counter.end}</div>
                <div className="subtitle">{counter.subtitle}</div>
              </StatCounter>
            ))}
          </SneakPeekContainer>
          {previewPageData.thisYear.categories.map(categoryBubble => (
            <Bubble
              size="8vw"
              backgroundColor={categoryBubble.backgroundColor}
              color={categoryBubble.color}
              rotate={Math.random() * (15 - -15) + -15}
            >
              <div>{categoryBubble.contents}</div>
            </Bubble>
          ))}
        </ContentContainer>
      </PageContainer>
    );
  }
}

export default PreviewPage;
