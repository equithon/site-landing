/* --- Packages and Components --- */
import React from 'react';
import styled from 'styled-components';

/* --- Images --- */

/* --- Styles --- */
const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: grey;
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
        sponsors page
      </PageContainer>
    );
  }
}

export default SponsorsPage;
