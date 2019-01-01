/* --- Packages and Components --- */
import React from 'react';
import styled from 'styled-components';

/* --- Images --- */

/* --- Styles --- */
const PageContainer = styled.div`
  width: 100vw;
  height: 10vh;
  background-color: blue;
`;

/* --- Component --- */
class PageFooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <PageContainer>footer</PageContainer>;
  }
}

export default PageFooter;
