/* --- Packages and Components --- */
import React from 'react';
import styled from 'styled-components';
import { animateScroll } from 'react-scroll';

import { mediaSize } from '../site/siteTools';

/* --- Images --- */
import BackgroundShape from '../static/img/shapes/footer_bg@2x.png';
import LogoWhite from '../static/img/logo_white.png';
import InstaIcon from '../static/img/icons/instagram.png';
import EmailIcon from '../static/img/icons/email.png';
import FacebookIcon from '../static/img/icons/facebook.png';
import GithubIcon from '../static/img/icons/github.png';
import LinkedInIcon from '../static/img/icons/linkedin.png';
import TwitterIcon from '../static/img/icons/twitter.png';

/* --- Styles --- */
const PageContainer = styled.div`
  width: 100vw;
  height: 45vw;
  margin: 0;
  position: relative;
  display: flex;
  box-sizing: border-box;

  background-image: url(${BackgroundShape});
  background-size: cover; /* <------ */
  background-repeat: no-repeat;
  background-position: center center;
`;

const ContentContainer = styled.div`
  padding: 0;
  padding-top: 18vw;
  margin: auto;
  width: 50vw;

  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 12vw 3vw 3vw 2vw;
  grid-template-areas:
    'logo'
    'icons'
    'links'
    'copyright';

  justify-items: center;

  ${mediaSize.tablet`
    padding-top: 21vw;
    width: 90vw;
    grid-template-columns: auto auto;
    grid-template-rows: 10vw 5vw;
    grid-template-areas:
      'logo icons'
      'copyright links';
  `};

  ${mediaSize.phone`

  `};
`;

const LogoContainer = styled.div`
  grid-area: logo;
  width: 8vw;
  height: 8vw;
  text-align: center;
  cursor: pointer;

  & > img {
    max-height: 100%;
    max-width: 100%;
    margin: auto;
    vertical-align: middle;
  }

  ${mediaSize.tablet`
    justify-self: start;
    align-self: center;
    text-align: left;
    width: 8vw;
    height: 8vw;
  `};

  ${mediaSize.phone`

  `};
`;

const IconsContainer = styled.div`
  grid-area: icons;
  width: 35%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  & > img.icons {
    max-width: 2vw;
    max-height: 2vw;
    cursor: pointer;
    transition: all 250ms linear;

    &:hover {
      filter: brightness(80%);
    }

    ${mediaSize.tablet`
      max-width: 3vw;
      max-height: 3vw;
    `};
  }

  ${mediaSize.tablet`
    justify-self: end;
    align-self: end;
    width: 50%;

  `};

  ${mediaSize.phone`

  `};
`;

const LinksContainer = styled.div`
  grid-area: links;
  width: 20em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  & a {
    color: white;
  }

  ${mediaSize.tablet`
    justify-self: end;
    align-self: center;
    width: 35vw;
    font-size: 2vw;
  `};

  ${mediaSize.phone`

  `};
`;

const CopyrightContainer = styled.div`
  grid-area: copyright;
  color: white;

  ${mediaSize.tablet`
    justify-self: start;
    align-self: center;
    font-size: 2vw;
  `};

  ${mediaSize.phone`

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
          <LogoContainer onClick={() => animateScroll.scrollToTop()}>
            <img className="imageLogo" src={LogoWhite} alt="Equithon logo." />
          </LogoContainer>

          <IconsContainer>
            {/* eslint-disable */}
            <img
              className="icons"
              src={InstaIcon}
              alt="Contact Icon."
              onClick={() => window.open('https://www.instagram.com/equithon')}
            />
            <img
              className="icons"
              src={FacebookIcon}
              alt="Contact Icon."
              onClick={() => window.open('https://www.instagram.com/equithon')}
            />
            <img
              className="icons"
              src={LinkedInIcon}
              alt="Contact Icon."
              onClick={() =>
                window.open('https://www.linkedin.com/company/waterlooequithon')
              }
            />
            <img
              className="icons"
              src={TwitterIcon}
              alt="Contact Icon."
              onClick={() => window.open('https://twitter.com/uwequithon')}
            />
            <img
              className="icons"
              src={GithubIcon}
              alt="Contact Icon."
              onClick={() => window.open('https://github.com/equithon')}
            />
            <img
              className="icons"
              src={EmailIcon}
              alt="Contact Icon."
              onClick={() => window.open('mailto:hello@equithon.org')}
            />
            {/* eslint-enable */}
          </IconsContainer>

          <CopyrightContainer>
            <div className="equithonCopyright">© Equithon 2018</div>
          </CopyrightContainer>

          <LinksContainer>
            <a
              className="centerDiv"
              href="https://abc.xyz/investor/other/google-code-of-conduct/"
            >
              Code of Conduct
            </a>

            <a
              className="centerDiv"
              href="https://www.apple.com/ca/apple-events/"
            >
              Press
            </a>

            <a
              className="centerDiv"
              href="https://www.facebook.com/legal/FB_Work_Privacy"
            >
              Privacy Policy
            </a>
          </LinksContainer>
        </ContentContainer>
      </PageContainer>
    );
  }
}

export default PageFooter;
