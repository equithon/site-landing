/* --- Packages and Components --- */
import React from 'react';
import styled from 'styled-components';

import { mediaSize } from '../data/siteTools';
import { FAQPageData } from '../data/siteData';

import GenericAccordion from '../components/GenericAccordion';
/* --- Images --- */

/* --- Styles --- */
const PageContainer = styled.div`
  width: 100vw;
  height: auto;
  margin: 0;
  background-color: white;
  box-sizing: border-box;
`;

const ContentContainer = styled.div`
  padding: 10vh 0;
  width: 85vw;
  height: auto;
  margin: auto;

  color: #46484a;

  ${mediaSize.tablet`
    width: 80vw;
  `};

  ${mediaSize.phone`
  `};
`;

const Header = styled.div`
  font-size: 2.5vw;
  font-weight: 500;

  ${mediaSize.tablet`
    font-size: 5vw;
    margin-bottom: 20px;
  `};

  ${mediaSize.phone`
    font-size: 7vw;
    margin-bottom: 30px;
  `};
`;

const QandAContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const FAQAccordion = styled(GenericAccordion)`
  width: 45%;

  & > div.label {
    font-size: 2vw;
    font-weight: 500;
    margin-bottom: 10px;

    ${mediaSize.tablet`
      font-size: 4vw;
    `};

    ${mediaSize.phone`
      font-size: 5vw;
    `};
  }

  & div.contents {
    font-size: 1.5vw;
    font-weight: 400;

    ${mediaSize.tablet`
      font-size: 3vw;
    `};

    ${mediaSize.phone`
      font-size: 4vw;
    `};
  }

  ${mediaSize.tablet`
    width: 100%;
  `};

  ${mediaSize.phone`
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
          <Header>{FAQPageData.header}</Header>
          <QandAContainer>
            {FAQPageData.faqs.map(qa => (
              <FAQAccordion className="accordion question" label={qa.question}>
                <div className="contents">{qa.answer}</div>
              </FAQAccordion>
            ))}
          </QandAContainer>
        </ContentContainer>
      </PageContainer>
    );
  }
}

export default FAQPage;
