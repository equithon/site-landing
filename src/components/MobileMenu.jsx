/* --- Packages and Components --- */
import React from 'react';
import styled from 'styled-components';
import onClickOutside from 'react-onclickoutside';
import { Link, scrollSpy } from 'react-scroll';

import { mediaSize } from '../data/siteTools';
import { mobileMenuData } from '../data/siteData';

/* --- Images --- */
/* --- Styles --- */
const ComponentContainer = styled.div`
  width: 10vw;
  height: 10vw;

  position: fixed;
  bottom: 3em;
  right: 3em;
  z-index: 100;

  color: white;
  text-align: center;
  line-height: 10vw;

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
  position: absolute;
  z-index: 102;
  right: ${props =>
    props.offset}px; //align menu options with the centered menu icon
  bottom: 100%;
`;

const MenuSiteLink = styled(Link)`
  display: block;
  font-weight: 500;
  cursor: pointer;
  transition: color 750ms;
  line-height: 150%;
  text-align: justify;
  direction: rtl;
  float: right;
  font-size: 4vw;
  cursor: pointer;

  &.active-link,
  :hover {
    color: #66adef;
  }

  ${mediaSize.phone`
    font-size: 6vw;
    line-height: 170%;
  `}
`;

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

class MobileMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  componentDidMount() {
    scrollSpy.update();
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
        {this.state.open ? (
          <MenuContents offset={this.menuBar.offsetLeft}>
            {mobileMenuData.links.map((link, i) => (
              <MenuSiteLink
                className="mobile-menu-link"
                to={link.scrollTo}
                activeClass="active-link"
                spy
                smooth
                duration={750}
                key={link.scrollTo}
                offset={i}
                onClick={() => this.setState({ open: false })}
              >
                {link.name}
              </MenuSiteLink>
            ))}
          </MenuContents>
        ) : null}
      </ComponentContainer>
    );
  }
}

export default onClickOutside(MobileMenu);
