/* --- Packages and Components --- */
import React from 'react';
import styled from 'styled-components';

import { mediaSize } from '../data/siteTools';
import { FAQPageData } from '../data/siteData';
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
  background-color: grey;

  color: #46484a;

  ${mediaSize.tablet`
    padding-top: 5vh;
    width: 80vw;
    height: 90vh;

  `};

  ${mediaSize.phone`
  `};
`;

const Header = styled.div`
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

const QandAContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Accordion = styled.div`
  width: 40%;
  padding: 2vw 0;

  & > div.question {
    font-size: 2vw;
    font-weight: 600;
    margin-bottom: 10px;

    ${mediaSize.tablet`
      font-size: 3vw;
    `};

    ${mediaSize.phone`
      font-size: 6vw;
    `};
  }

  & > div.answer {
    font-size: 1.5vw;
    font-weight: 400;

    ${mediaSize.tablet`
      font-size: 2vw;
    `};

    ${mediaSize.phone`
      font-size: 4vw;
    `};
  }
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
              <Accordion>
                <div className="question">{qa.question}</div>
                {/* <div className="answer">{qa.answer}</div> */}
              </Accordion>
            ))}
          </QandAContainer>
        </ContentContainer>
      </PageContainer>
    );
  }
}

export default FAQPage;
