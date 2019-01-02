/* --- Packages and Components --- */
import React from 'react';
import { MobileView } from 'react-device-detect';
import { GlobalStyle } from '../data/configOptions';

import MobileMenu from '../components/MobileMenu';
import HelmetHeader from '../components/HelmetHeader';

import PageHeader from './PageHeader';
import PageFooter from './PageFooter';
import MainPage from './MainPage';
import AboutPage from './AboutPage';
import PreviewPage from './PreviewPage';
import SponsorsPage from './SponsorsPage';
import FAQPage from './FAQPage';

/* --- Component [STATELESS] --- */
export default () => (
  <div id="appWrapper">
    <GlobalStyle />
    <HelmetHeader />

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
