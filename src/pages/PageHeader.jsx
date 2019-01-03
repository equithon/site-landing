/* --- Packages and Components --- */
import React from 'react';
import styled from 'styled-components';
import { Link, scrollSpy } from 'react-scroll';

import { mediaSize } from '../data/siteTools';

import GenericButton from '../components/GenericButton';

/* --- Images & Other Assets --- */
import Favicon from '../static/img/logo_tiny.png';
import { headerData } from '../data/siteData';

/* --- Styles --- */
const PageContainer = styled.header`
  width: 100vw;
  height: 12vh;
  top: -2vh;
  position: fixed;
  z-index: 100;
  background-color: white;
  transition: transform 0.5s cubic-bezier(0.87, -0.41, 0.19, 1.44);
  transform: translateY(0);

  &.hidden {
    transform: translateY(-100%);
  }
`;

const ContentContainer = styled.div`
  width: 80vw;
  height: 6vh;
  padding-top: 4vh;
  margin: auto;
`;

const BrandContainer = styled.div`
  float: left;
  height: 100%;
`;

const BrandImg = styled.img`
  vertical-align: top;
  margin-right: 1vw;
  max-height: 100%;
`;

const BrandText = styled.span`
  display: inline-block;
  margin-top: 2px;
  font-weight: 550;
  font-size: 3vh;
  line-height: 6vh;
  color: #a16beb;
`;

const LinksContainer = styled.div`
  float: right;
  height: 100%;
  display: flex;
  align-items: center;

  & > * {
    margin-top: 4px;
    margin-left: 2vw;
  }
`;

const HeaderSiteLink = styled(Link)`
  display: inline-block;

  line-height: 6vh;
  color: #555;
  font-weight: 500;
  cursor: pointer;
  transition: color 750ms;

  ${mediaSize.tablet`
    display: none;
  `}

  &.active-link, :hover {
    color: #66adef;
  }
`;

const ActionButton = styled(GenericButton)`
  height: 75%;

  font-weight: 500;
  font-size: 1em;

  ${mediaSize.tablet`
    height: 80%;
    font-size: 2vmin;
  `};

  ${mediaSize.phone`
    font-size: 3vmin;
  `};
`;

/* --- Component --- */
class PageHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolled: false,
      hidden: false,
      lastScrollPos: typeof window !== 'undefined' && window.pageYOffset
    };
    this.curHeader = React.createRef();

    setInterval(() => this.handleScroll(), 150); // only check for scroll every 150ms for performance
  }

  componentDidMount() {
    window.addEventListener('scroll', () => this.setState({ scrolled: true }));
    this.height = this.curHeader.current.offsetHeight;
    scrollSpy.update();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.hidden !== nextState.hidden;
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', () =>
      this.setState({ scrolled: true })
    );
  }

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
      <PageContainer
        className={this.state.hidden ? 'hidden' : ''}
        ref={this.curHeader}
      >
        <ContentContainer>
          <BrandContainer>
            <BrandImg src={Favicon} />
            <BrandText>Equithon</BrandText>
          </BrandContainer>

          <LinksContainer>
            {headerData.links.map(link => (
              <HeaderSiteLink
                className="header-link"
                to={link.scrollTo}
                activeClass="active-link"
                spy
                smooth
                duration={750}
                key={link.scrollTo}
              >
                {link.name}
              </HeaderSiteLink>
            ))}
            <ActionButton
              text={headerData.actionButton.text}
              backgroundColor="#66adef"
              color="#fff"
              click={() => {}}
              outline
            />
          </LinksContainer>
        </ContentContainer>
      </PageContainer>
    );
  }
}

export default PageHeader;
