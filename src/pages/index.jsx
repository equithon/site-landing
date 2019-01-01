/* --- Packages and Components --- */
import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { isMobile } from 'react-device-detect';

import MobileMenu from '../components/MobileMenu';

import PageHeader from './PageHeader';
import PageFooter from './PageFooter';
import MainPage from './MainPage';
import AboutPage from './AboutPage';
import PreviewPage from './PreviewPage';
import SponsorsPage from './SponsorsPage';
import FAQPage from './FAQPage';

/* --- Images --- */
import SfProTextMediumOTF from '../static/fonts/SF-Pro-Text-Medium.otf';
import SfProTextRegularOTF from '../static/fonts/SF-Pro-Text-Regular.otf';
import SfProTextBoldOTF from '../static/fonts/SF-Pro-Text-Heavy.otf';

/* --- Styles --- */
const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }

  @font-face {
    font-family: "SF Pro Text Medium";
    font-style: normal;
    font-weight: normal;
    src: url(${SfProTextMediumOTF}) format("opentype");
  }

  @font-face {
    font-family: "SF Pro Text Regular";
    font-style: normal;
    font-weight: normal;
    src: url(${SfProTextRegularOTF}) format("opentype");
  }

  @font-face {
    font-family: "SF Pro Text Bold";
    font-style: bold;
    font-weight: bold;
    src: url(${SfProTextBoldOTF}) format("opentype");
  }
`;

/* --- Component --- */
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="wrapper">
        <GlobalStyle />
        <PageHeader />
        {isMobile ? <MobileMenu /> : null}
        <MainPage />
        <AboutPage className="section about" />
        <PreviewPage className="section preview" />
        <SponsorsPage className="section sponsors" />
        <FAQPage className="section faq" />
        <PageFooter /> {/* Frank will implement */}
      </div>
    );
  }
}

export default App;
