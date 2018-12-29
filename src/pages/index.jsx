/* --- Packages and Components --- */
import React from 'react';
import styled from 'styled-components';
import { isMobile } from 'react-device-detect';

import PageHeader from '../components/PageHeader';
import PageFooter from '../components/PageFooter';

/* --- Images --- */
import HeroImg from '../static/img/hero.png';

const MobileMenu = styled.div`
  color: red;
`;

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="wrapper">
        <PageHeader />

        {isMobile ? <MobileMenu>mobile menu</MobileMenu> : null}

        <div className="page hero">
          Equithon
          <img src={HeroImg} alt="A person thinking." />
        </div>

        <div className="page about1">what is equithon?</div>

        <div className="page about2">whats in store?</div>

        <div className="page sponsors">sponsors</div>

        <div className="page faq">faq</div>

        <PageFooter />
      </div>
    );
  }
}

export default MainPage;
