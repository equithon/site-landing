/* --- Packages and Components --- */
import React from 'react';
import styled from 'styled-components';
import { isMobileOnly } from 'react-device-detect';

import { mediaSize } from '../data/siteTools';
import { previewPageData } from '../data/siteData';

import StatCounter from '../components/StatCounter';
import FloatingBubble from '../components/FloatingBubble';

/* --- Images --- */

/* --- Styles --- */
const PageContainer = styled.div`
  width: 100vw;
  height: auto;
  margin: 0;
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
  font-weight: 400;

  & div {
    margin-top: 20px;
  }

  ${mediaSize.tablet`
    font-size: 2.5vw;
  `};

  ${mediaSize.phone`
    font-size: 4vw;
  `};
`;

const SubHeader = styled.div`
  font-size: 2vw;
  font-weight: 600;
  margin-bottom: 2vw;
  margin-top: 3vw;

  ${mediaSize.tablet`
    font-size: 3.5vw;
    margin-bottom: 4vw;
    margin-top: 7vw;
  `};

  ${mediaSize.phone`
    font-size: 5vw;
  `};
`;

const LookBackContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  height: 25vw;
  margin: 5vw 0;
  font-size: 1.5vw;

  ${mediaSize.tablet`
    font-size: 2vw;
  `};

  ${mediaSize.phone`
    flex-direction: column;
    height: auto;
    font-size: 3.5vw;
  `};
`;

const SneakPeekContainer = styled.div`
  display: grid;
  width: 100%;

  font-size: 1.5vw;

  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 2fr 5fr;
  grid-row-gap: 5vw;
  grid-template-areas:
    'statAttendees statDuration statGoal'
    'statCategories categories categories';

  ${mediaSize.tablet`
      font-size: 2vw;
  `};

  ${mediaSize.phone`
    font-size: 4vw;

    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 3fr;
    grid-template-areas:
      'statAttendees statDuration'
      'statCategories statGoal'
      'categories categories';
  `};
`;

const StatCounterContainer = styled.div`
  display: inline-block;
  grid-area: ${props => props.gridArea};
  align-self: center;

  color: ${props => props.color};

  &:before {
    content: '${props => props.prefix}';
    font-weight: 500;
    width: 50%;
    display: block;
    margin-bottom: 1vw;
    font-size: 1.3vw;

    ${mediaSize.tablet`
      width: 85%;
      font-size: 2.5vw;
    `};

    ${mediaSize.phone`
      display: none;
    `};
  }

  ${mediaSize.tablet`
  `};

  ${mediaSize.phone`
  `};
`;

const CategoriesContainer = styled.div`
  grid-area: categories;
  position: relative;

  display: inline-flex;
  flex-direction: row;
  flex-wrap: nowrap;
  left: -5vw;

  ${mediaSize.phone`
    flex-wrap: wrap;
    left: 0;
    justify-content: space-around;

    & > div:first-child {
      right: -6vw;
    }

    & > div:last-child {
      left: -10vw;
      bottom: 10vw;
    }

    & > div {
      padding: 2vw 0;
    }
  `};
`;

const StatBubbleContainer = styled.div`
  width: 20%;
  height: 100%;
  position: relative;

  & > div {
    display: inline-block;
    position: relative;
    left: 50%;
    top: ${props => `${props.offset}%`};
    transform: translateX(-50%) translateZ(0);

    ${mediaSize.phone`
      top: ${props => `calc(${props.mobileTopOffset} * -8vw)`};
      transform: ${props => `translateX(calc(-50% + ${props.offset}%))`};
    `};
  }

  ${mediaSize.phone`
    width: 50%;
  `};
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
          <LookBackContainer>
            {previewPageData.lastYear.statBubbles.map((bubble, i) => {
              const isEvenOffset = i % 2 === 0;
              const rotationOffset = Math.random() * (10 - -10) + -10;
              const mobileTopOffset = i;
              let bubbleOffset = isEvenOffset
                ? Math.random() * (10 - 5) + 5
                : Math.random() * (0 - -10) + -10;
              if (isMobileOnly)
                bubbleOffset = isEvenOffset
                  ? Math.random() * (15 - 0) + 0
                  : Math.random() * (95 - 85) + 85;

              return (
                <StatBubbleContainer
                  offset={bubbleOffset}
                  mobileTopOffset={mobileTopOffset}
                >
                  <div>
                    <FloatingBubble
                      size="20vw"
                      backgroundColor={bubble.backgroundColor}
                      color={bubble.color}
                      rotate={rotationOffset}
                    >
                      {bubble.contents}
                    </FloatingBubble>
                  </div>
                </StatBubbleContainer>
              );
            })}
          </LookBackContainer>

          <SubHeader>{previewPageData.thisYear.header}</SubHeader>
          <SneakPeekContainer>
            {previewPageData.thisYear.statCounters.map(counter => (
              <StatCounterContainer
                gridArea={counter.gridArea}
                prefix={counter.textAbove}
                color={counter.color}
              >
                <StatCounter
                  countStart={counter.start}
                  countEnd={counter.end}
                  countDuration={3}
                  size="6vw"
                  suffix={counter.suffix}
                >
                  <span>{counter.subtitle}</span>
                </StatCounter>
              </StatCounterContainer>
            ))}
            <CategoriesContainer>
              {previewPageData.thisYear.categories.map((categoryBubble, i) => {
                const isEvenOffset = i % 2 === 0;
                const rotationOffset = Math.random() * (10 - -10) + -10;
                const mobileTopOffset =
                  isEvenOffset &&
                  i + 1 !== previewPageData.thisYear.categories.length
                    ? 0
                    : -2;
                let bubbleOffset = isEvenOffset
                  ? Math.random() * (60 - 48) + 48
                  : Math.random() * (17 - 5) + 5;
                if (isMobileOnly)
                  bubbleOffset = Math.random() * (10 - -10) + -10;

                return (
                  <StatBubbleContainer
                    offset={bubbleOffset}
                    mobileTopOffset={mobileTopOffset}
                  >
                    <div>
                      <FloatingBubble
                        size="13vw"
                        backgroundColor={categoryBubble.backgroundColor}
                        color={categoryBubble.color}
                        rotate={rotationOffset}
                      >
                        {categoryBubble.contents}
                      </FloatingBubble>
                    </div>
                  </StatBubbleContainer>
                );
              })}
            </CategoriesContainer>
          </SneakPeekContainer>
        </ContentContainer>
      </PageContainer>
    );
  }
}

export default PreviewPage;
