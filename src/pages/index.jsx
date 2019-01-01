/* --- Packages and Components --- */
import React from 'react';
import Helmet from 'react-helmet';
import { createGlobalStyle } from 'styled-components';
import { MobileView } from 'react-device-detect';

import MobileMenu from '../components/MobileMenu';

import PageHeader from './PageHeader';
import PageFooter from './PageFooter';
import MainPage from './MainPage';
import AboutPage from './AboutPage';
import PreviewPage from './PreviewPage';
import SponsorsPage from './SponsorsPage';
import FAQPage from './FAQPage';

/* --- Images & Other Assets --- */
import Favicon from '../static/img/logo_tiny.png';
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
        <Helmet>
          <title>Equithon</title>
          <meta
            name="description"
            content="A social innovation hackathon like no other. Equithon is back for 2019."
          />
          <meta
            name="google-site-verification"
            content="HrZx9ln8WamacY3EvmuPaCpXqW0Ovw82ybThKXOEiQw"
          />
          <meta
            name="keywords"
            content="equithon, hackathon, hacker, event, social, innovation, equity, activism, waterloo, university, 2019, tech, good"
          />
          <link
            rel="icon"
            href={Favicon}
            sizes={['16x16', '32x32', '64x64', '128x128']}
            type="image/png"
          />
        </Helmet>

        <PageHeader />
        <MainPage />
        <AboutPage />
        <PreviewPage />
        <SponsorsPage />
        <FAQPage />
        <PageFooter />

        <MobileView>
          <MobileMenu />
        </MobileView>
      </div>
    );
  }
}

export default App;
