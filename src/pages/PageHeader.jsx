/* --- Packages and Components --- */
import React from 'react';
import styled from 'styled-components';

/* --- Images --- */

/* --- Styles --- */
const PageContainer = styled.div`
  width: 100vw;
  height: 5vh;
  background-color: blue;
  position: fixed;
`;

/* --- Component --- */
class PageHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <PageContainer>header</PageContainer>;
  }
}

export default PageHeader;
