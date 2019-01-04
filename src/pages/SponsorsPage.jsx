/* --- Packages and Components --- */
import React from 'react';
import styled from 'styled-components';

import { mediaSize } from '../data/siteTools';
import ScrollingSponsorPane from '../components/ScrollingSponsorPane';

/* --- Images --- */

/* --- Styles --- */
const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

const ContentContainer = styled.div`
  padding-top: 5vh;
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

const PageTitle = styled.div`
  font-size: 5vmin;
  font-weight: 500;
  color: black;

  margin-bottom: 1vw;
`;

const SponsorsPane = styled(ScrollingSponsorPane)`
  background-color: white;
  height: 100%;
  width: 100%;
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
          <PageTitle>Special Thanks</PageTitle>
          <SponsorsPane className="sponsor-scroll-pane" />
        </ContentContainer>
      </PageContainer>
    );
  }
}

export default SponsorsPage;
