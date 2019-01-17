/* --- Packages and Components --- */
import React from 'react';
import styled from 'styled-components';
import posed from 'react-pose';
import onClickOutside from 'react-onclickoutside';
import { Link, scrollSpy } from 'react-scroll';

import { mediaSize } from '../site/siteTools';
import { mobileMenuData } from '../site/siteData';
import { mobileMenuAnimations } from '../site/siteAnimations';

/* --- Styles --- */
const ComponentContainer = styled.div`
  width: 10vw;
  height: 10vw;

  position: fixed;
  bottom: 3em;
  right: ${props => (props.shouldHide ? '-70%' : '3em')};
  z-index: 100;

  color: white;
  text-align: center;
  line-height: 10vw;
  box-shadow: 2px 2px 1px 2px rgba(154, 113, 209, 0.6);
  border-radius: 50%;

  transition: right 0.5s cubic-bezier(0.87, -0.41, 0.19, 1.44);

  ${mediaSize.phone`
    width: 14vw;
    height: 14vw;
    line-height: 14vw;
    bottom: 2em;
    right: ${props => (props.shouldHide ? '-70%' : '2em')};
  `}
`;

const MenuBackground = styled.div`
  width: 200vw;
  height: 200vw;
  opacity: ${props => (props.open ? 0.975 : 1)};
  background-color: #a16beb;
  border-radius: 50%;
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

const MenuContents = styled(posed.div(mobileMenuAnimations.containerConfig))`
  position: absolute;
  z-index: 102;
  right: ${props =>
    props.offset}px; //align menu options with the centered menu icon
  bottom: 100%;
`;

const MenuSiteLinkDiv = styled(posed.div(mobileMenuAnimations.indivLinkConfig))`
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

  ${mediaSize.phone`
    font-size: 6vw;
    line-height: 170%;
  `}
`;

const MenuSiteLink = styled(Link)`
  &.active-link,
  :hover {
    color: ${props => props.theme.secondary};
  }
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
      open: false,
      scrolled: false,
      hidden: false,
      lastScrollPos: typeof window !== 'undefined' && window.pageYOffset
    };

    this.curMenu = React.createRef();

    this.scrollTimer = setInterval(() => this.handleScroll(), 150); // only check for scroll every 150ms for performance
  }

  componentDidMount() {
    window.addEventListener('scroll', () => this.setState({ scrolled: true }));
    this.height = this.curMenu.current.offsetHeight;
    scrollSpy.update();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', () =>
      this.setState({ scrolled: true })
    );
    clearInterval(this.scrollTimer);
  }

  handleClickOutside = () => {
    this.setState({ open: false });
  };

  handleScroll() {
    const SCROLL_TRIGGER_DELTA = 5;
    const curScrollPos = typeof window !== 'undefined' && window.pageYOffset;
    if (
      this.state.scrolled &&
      Math.abs(curScrollPos - this.state.lastScrollPos) >= SCROLL_TRIGGER_DELTA
    ) {
      // scrolled, and for more than the delta
      const shouldHide = // eslint-disable-next-line
        curScrollPos > this.state.lastScrollPos && curScrollPos > this.height;
      this.setState({
        scrolled: false, // reset scroll
        hidden: shouldHide,
        lastScrollPos: curScrollPos
      });
    } else {
      this.setState({ scrolled: false });
    }
  }

  render() {
    return (
      <ComponentContainer
        onClick={() => this.setState(prevState => ({ open: !prevState.open }))}
        shouldHide={this.state.hidden}
        ref={this.curMenu}
      >
        <MenuBackground open={this.state.open && !this.state.hidden} />
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
          <MenuContents
            offset={this.menuBar.offsetLeft}
            pose="entered"
            initialPose="entering"
          >
            {mobileMenuData.links.map((link, i) => (
              <MenuSiteLinkDiv>
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
              </MenuSiteLinkDiv>
            ))}
          </MenuContents>
        ) : null}
      </ComponentContainer>
    );
  }
}

export default onClickOutside(MobileMenu);
