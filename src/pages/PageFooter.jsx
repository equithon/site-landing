/* --- Packages and Components --- */
import React from 'react';
import styled from 'styled-components';
import { Link, scrollSpy, animateScroll } from 'react-scroll';
import { sponsorsPageData } from '../data/siteData';

/* --- Images --- */
import Background from '../static/img/shapes/footer_bg@2x.png';
import LogoWhite from '../static/img/logo_white.png';
import Insta from '../static/img/icons/instagram.png';
import EmailIcon from '../static/img/icons/email.png';
import Facebook from '../static/img/icons/facebook.png';
import Github from '../static/img/icons/github.png';
import LinkedIn from '../static/img/icons/linkedin.png';
import Twitter from '../static/img/icons/twitter.png';
import { mediaSize } from '../data/siteTools';
/* --- Styles --- */
const PageContainer = styled.div``;

const ContentContainer = styled.div`
  position: relative;
  top: -25vw;
  width: 100vw;
  height: 1vw;

  &.backgroundImg {
    max-height: 35vw;
  }

  & .imageLogo {
    position: relative;
    display: block;
    width: 3.7vw;
    margin: auto;
    z-index: 2;
    top: 35vw;
  }

  & .imageIcons {
    display: block;
    position: relative;
    width: 1.4vw;
    margin: auto;
  }

  & .equithonCopyright {
    display: block;
    margin: auto;
    font-family: 'SF Pro Display', serif;
    font-weight: lighter;
    font-size: 0.7vw;
    width: 10vw;
    text-align: center;
    color: white;
    position: relative;
    top: 32vw;
  }

  & a {
    font-family: 'SF Pro Display', serif;
    font-weight: lighter;
    font-size: 0.7vw;
    color: white;
  }

  & .centerDiv {
    display: block;
    margin: auto;
    text-align: center;
  }
  ${mediaSize.tablet`
  
    
  
    & .imageLogo{
      width: 3.7vw;
      margin: 0;
      left: 5vw;
      z-index: 2;
      top: 35vw;
    }

`};
`;

/* --- Component --- */
class PageFooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <PageContainer>
        <ContentContainer>
          <img
            className="imageLogo"
            src={LogoWhite}
            onClick={() => animateScroll.scrollToTop()}
          />
          <a
            className="imageIcons"
            href="https://www.instagram.com/equithon/?hl=en"
          >
            <img
              className="imageIcons"
              src={Insta}
              style={{ top: '36.1vw', left: '-5vw' }}
            />
          </a>
          <a className="imageIcons" href="https://www.facebook.com/UWEquithon/">
            <img
              className="imageIcons"
              src={Facebook}
              style={{ top: '34.7vw', left: '-3vw' }}
            />
          </a>
          <a
            className="imageIcons"
            href="https://www.linkedin.com/company/waterlooequithon/"
          >
            <img
              className="imageIcons"
              src={LinkedIn}
              style={{ width: '1.6vw', top: '33.2vw', left: '-1vw' }}
            />
          </a>
          <a
            className="imageIcons"
            href="https://twitter.com/uwequithon?lang=en"
          >
            <img
              className="imageIcons"
              src={Twitter}
              style={{ top: '31.7vw', left: '1vw' }}
            />
          </a>
          <a className="imageIcons" href="https://github.com/equithon">
            <img
              className="imageIcons"
              src={Github}
              style={{ top: '30.4vw', left: '3vw', width: '1.2vw' }}
            />
          </a>
          <a
            className="imageIcons"
            href={sponsorsPageData.sponsorAction.link.to}
          >
            <img
              className="imageIcons"
              src={EmailIcon}
              style={{ top: '29.2vw', left: '5vw', width: '1.3vw' }}
            />
          </a>
          <label className="equithonCopyright">© Equithon 2018</label>
          <a
            className="centerDiv"
            href="https://abc.xyz/investor/other/google-code-of-conduct/"
            style={{
              position: 'relative',
              top: '29.3vw',
              width: '5vw',
              left: '-4vw'
            }}
          >
            Code of Conduct
          </a>
          <a
            className="centerDiv"
            href="https://www.apple.com/ca/apple-events/"
            style={{ position: 'relative', top: '28.5vw', width: '3vw' }}
          >
            Press
          </a>
          <a
            className="centerDiv"
            href="https://www.facebook.com/legal/FB_Work_Privacy"
            style={{
              position: 'relative',
              top: '27.67vw',
              width: '5vw',
              left: '4vw'
            }}
          >
            Privacy Policy
          </a>
          <img
            src={Background}
            className="backgroundImg"
            style={{ maxHeight: '35vw' }}
          />
        </ContentContainer>
      </PageContainer>
    );
  }
}

export default PageFooter;
