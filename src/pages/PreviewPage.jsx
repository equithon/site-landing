/* --- Packages and Components --- */
import React from 'react';
import styled from 'styled-components';

/* --- Images --- */

/* --- Styles --- */
const PageContainer = styled.div`
  width: 100vw;
  height: 150vh;
  background-color: purple;
`;

/* --- Component --- */
class PreviewPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <PageContainer className="section preview">
        sneak peek at 2019
      </PageContainer>
    );
  }
}

export default PreviewPage;
