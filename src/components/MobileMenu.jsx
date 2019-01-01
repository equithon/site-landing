/* --- Packages and Components --- */
import React from 'react';
import styled from 'styled-components';

/* --- Images --- */
/* --- Styles --- */
const ComponentContainer = styled.div`
  width: 4em;
  height: 4em;
  background-color: black;
  color: white;
  border-radius: 2000px;
  position: fixed;
  line-height: 4em;
  text-align: center;
  bottom: 3em;
  right: 3em;
`;

class MobileMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <ComponentContainer>menu</ComponentContainer>;
  }
}

export default MobileMenu;
