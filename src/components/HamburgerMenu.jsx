/*
This component is incomplete.



--- Packages and Components ---
import React from 'react';
import styled from 'styled-components';
import { mediaSize } from '../data/siteTools';

const MenuIconContainer = styled.div`
  position: relative;
  z-index: 102;
  height: 100%;
  width: 100%;
  display: table;
`;

const MenuIcon = styled.div`
  display: table-cell;
  vertical-align: middle;
`;

const MenuIconBar = styled.div`
  background-color: white;
  border-radius: 50px;

  width: 45%;
  height: 6%;
  margin: 9% auto;

  ${mediaSize.phone`
    width: 45%;
    margin: 10% auto;
  `}

  // https://codepen.io/sergioandrade/pen/onkub maybe implement later?

  transition: all 0.5s ease;
  &.top-bar {
    // translate is mismatched
    transform: ${props =>
      props.open ? 'rotate(-45deg) translate(-50%, 375%)' : ''};
  }

  &.mid-bar {
    opacity: ${props => (props.open ? 0 : 1)};
    transform: ${props => (props.open ? 'rotate(45deg)' : '')};
  }

  &.bot-bar {
    transform: ${props => (props.open ? 'rotate(45deg)' : '')};
  }
`;


export default (props) => {
  return (
    <MenuIconContainer>
      <MenuIcon>
        <MenuIconBar
          ref={elem => {
            this.menuBar = elem;
          }}
          className="top-bar"
          open={this.state.open}
        />
        <MenuIconBar className="mid-bar" open={this.state.open} />
        <MenuIconBar className="bot-bar" open={this.state.open} />
      </MenuIcon>
    </MenuIconContainer>
  );
};

*/
