/* --- Packages and Components --- */
import React from 'react';
import styled from 'styled-components';

import { mediaSize } from '../data/siteTools';
import FloatingBubble from '../components/FloatingBubble';

/* --- Images --- */

/* --- Styles --- */
const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: grey;
`;

const ContentContainer = styled.div`
  padding-top: 10vh;
  width: 80vw;
  height: 80vh;
  margin: auto;

  color: #46484a;

  ${mediaSize.tablet`
    height: 80vh;
  `};

  ${mediaSize.phone`
    height: 60vh;
  `};
`;

const PageHeader = styled.div`
  font-size: 5vmin;
  font-weight: 500;
  color: black;
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
          <PageHeader>Special Thanks</PageHeader>
          <FloatingBubble backgroundColor="black" color="white">
            <div
              style={{ width: '4em', height: '4em', backgroundColor: 'blue' }}
            >
              test
            </div>
          </FloatingBubble>
          <FloatingBubble backgroundColor="black" color="white">
            <div
              style={{ width: '2em', height: '2em', backgroundColor: 'blue' }}
            >
              test
            </div>
          </FloatingBubble>
          <FloatingBubble backgroundColor="black" color="white">
            <div
              style={{ width: '3em', height: '3em', backgroundColor: 'blue' }}
            >
              test
            </div>
          </FloatingBubble>
        </ContentContainer>
      </PageContainer>
    );
  }
}

export default SponsorsPage;
