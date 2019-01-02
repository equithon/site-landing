/* --- Packages and Components --- */
import React from 'react';
import styled from 'styled-components';
import onClickOutside from 'react-onclickoutside';

import { mediaSize } from '../data/siteTools';

/* --- Images --- */
/* --- Styles --- */
const ComponentContainer = styled.div`
  width: 10vw;
  height: 10vw;
  line-height: 10vw;
  color: white;
  position: fixed;
  z-index: 100;

  text-align: center;
  bottom: 3em;
  right: 3em;

  ${mediaSize.phone`
    width: 14vw;
    height: 14vw;
    line-height: 14vw;
    bottom: 2em;
    right: 2em;
  `}
`;

const MenuBackground = styled.div`
  width: 200vw;
  height: 200vw;
  opacity: ${props => (props.open ? 0.975 : 1)};
  background-color: #854dd0;
  border-radius: 2000px;
  position: absolute;
  z-index: 101;
  top: 50%;
  left: 50%;
  transform: ${props =>
    props.open
      ? 'translate(-50%, -50%)'
      : 'translate(-50%, -50%) scale(0.05, 0.05)'}; // scale down instead of up to avoid jagged edges before rerendering
  transition: transform 0.3s cubic-bezier(0.87, -0.41, 0.19, 1.44),
    opacity 0.3s ease;

  ${mediaSize.phone`
    transform: ${props =>
      props.open
        ? 'translate(-50%, -50%)'
        : 'translate(-50%, -50%) scale(0.075, 0.075)'};
  `}
`;

const MenuContents = styled.div`
  position: relative;
  z-index: 102;
`;

const MenuIcon = styled.div`
  position: absolute;
  top: -50%;
  left: -50%;
  z-index: 102;
`;

class MobileMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleClickOutside = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <ComponentContainer
        onClick={() => this.setState(prevState => ({ open: !prevState.open }))}
      >
        <MenuBackground open={this.state.open} />
        <MenuContents>menu</MenuContents>
        {this.state.open ? <MenuIcon>open</MenuIcon> : null}
      </ComponentContainer>
    );
  }
}

export default onClickOutside(MobileMenu);
