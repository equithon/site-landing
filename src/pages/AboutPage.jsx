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
class AboutPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <PageContainer className="section" id="about">
        about page
      </PageContainer>
    );
  }
}

export default AboutPage;
