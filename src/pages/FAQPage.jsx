/* --- Packages and Components --- */
import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import withReveal from 'react-reveal/withReveal';
import { isMobile } from 'react-device-detect';

import { mediaSize } from '../site/siteTools';
import { FAQPageData } from '../site/siteData';

import GenericAccordion from '../components/GenericAccordion';
/* --- Images --- */

/* --- Styles --- */
const PageContainer = styled.div`
  width: 100vw;
  height: auto;
  margin: 0;
  box-sizing: border-box;
`;

const ContentContainer = styled.div`
  padding: 10vh 0 0 0;
  width: 80vw;
  height: auto;
  margin: auto;

  color: ${props => props.theme.offBlack};

  ${mediaSize.tablet`
    width: 80vw;
  `};

  ${mediaSize.phone`
  `};
`;

const PageHeader = withReveal(
  styled.div`
    font-size: 2.5vw;
    font-weight: 500;
    color: ${props => props.theme.offBlack};
    position: relative;
    display: inline-block;

    ${'' /* &:after {
    color: black;
    mix-blend-mode: difference;
    content: '${props => props.title}';
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  } */}

    ${mediaSize.tablet`
    font-size: 5vw;
    margin-bottom: 20px;
  `};

    ${mediaSize.phone`
    font-size: 7vw;
    margin-bottom: 30px;
  `};
  `,
  <Fade bottom />
);

const QandAContainer = styled.div`
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  & > div {
    width: 45%;

    ${mediaSize.tablet`
      width: 100%;
    `};

    ${mediaSize.phone`
    `};
  }
`;

const FAQAccordion = styled(GenericAccordion)`
  width: 100%;

  & > div.label {
    font-size: 1.5vw;
    font-weight: 500;
    margin-bottom: 10px;

    ${mediaSize.tablet`
      font-size: 3.5vw;
    `};

    ${mediaSize.phone`
      font-size: 5vw;
    `};
  }

  & div.contents {
    font-size: 1.3vw;
    font-weight: 400;

    ${mediaSize.tablet`
      font-size: 2.5vw;
    `};

    ${mediaSize.phone`
      font-size: 4vw;
    `};
  }
`;

const AdditionalQuestionsContainer = styled.div`
  width: 40vw;
  margin: auto;
  text-align: center;

  color: ${props => props.theme.offBlack};

  & > div {
    font-weight: 500;
    padding-bottom: 5px;

    font-size: 1.5vw;

    ${mediaSize.tablet`
      font-size: 3.5vw;
    `};

    ${mediaSize.phone`
      font-size: 5vw;
    `};
  }

  & > a {
    color: ${props => props.theme.offBlack};
    font-size: 1.3vw;

    ${mediaSize.tablet`
      font-size: 2.5vw;
    `};

    ${mediaSize.phone`
      font-size: 4vw;
    `};
  }

  ${mediaSize.tablet`
    width: 60vw;
  `};

  ${mediaSize.phone`
    width: 80vw;
  `};
`;

/* --- Component --- */
class FAQPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <PageContainer className="section" id="faq">
        <ContentContainer>
          <PageHeader title={FAQPageData.header}>
            {FAQPageData.header}
          </PageHeader>
          <QandAContainer>
            <Fade bottom>
              {FAQPageData.faqs.map(qa => (
                <FAQAccordion
                  className="accordion question"
                  label={qa.question}
                  collapsible={isMobile}
                  key={qa.question}
                >
                  <div className="contents">{qa.answer}</div>
                </FAQAccordion>
              ))}
            </Fade>
          </QandAContainer>
          <AdditionalQuestionsContainer>
            <div>{FAQPageData.FAQAction.actionText}</div>
            <a href={FAQPageData.FAQAction.link.to}>
              {FAQPageData.FAQAction.link.text}
            </a>
          </AdditionalQuestionsContainer>
        </ContentContainer>
      </PageContainer>
    );
  }
}

export default FAQPage;
