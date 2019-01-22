/* --- Packages and Components --- */
import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import firebase from '@firebase/app';
import '@firebase/firestore';

import { mediaSize } from '../site/siteTools';
import { mainPageData } from '../site/siteData';

import GenericInput from '../components/GenericInput';

// import firebaseConfig from '../../secretConfig';

/* --- Images --- */
import HeroImg from '../static/img/MainPage/hero_rounded.png';
import AbstractShape1 from '../static/img/shapes/main_about_middle_left@2x.png';

/* --- Styles --- */
const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0;
  box-sizing: border-box;

  ${mediaSize.tablet`
    height: 130vw;
  `};

  ${mediaSize.phone`
    height: 170vw;
  `};
`;

const ContentContainer = styled.div`
  padding-top: 10vh;
  width: 80vw;
  height: 80vh;
  margin: auto;

  color: ${props => props.theme.offBlack};

  display: grid;
  grid-column-gap: 3vw;
  grid-template-columns: 6fr 4fr;
  grid-template-rows: 4fr 1fr 4fr;
  grid-template-areas:
    'header hero'
    'action hero'
    'button hero';

  ${mediaSize.tablet`
    padding-top: 25vw;
    height: 90vw;

    grid-template-columns: auto;
    grid-template-rows: 6fr 2fr 1fr 1fr;
    grid-template-areas:
      'hero'
      'header'
      'action'
      'button';
  `};

  ${mediaSize.phone`
    height: 130vw;
    grid-template-rows: 5fr 1fr 1fr 1fr;
  `};
`;

const HeroImgContainer = styled.img`
  grid-area: hero;
  justify-self: end;
  align-self: center;
  max-height: 100%;
  max-width: 100%;

  ${mediaSize.tablet`
    justify-self: center;
  `};
`;

const HeaderTextContainer = styled.div`
  grid-area: header;
  align-self: end;
  margin-bottom: 2vh;
  position: relative;
  z-index: 1;

  ${mediaSize.tablet`
    justify-self: center;
  `};

  ${mediaSize.phone`
    padding-top: 5%;
  `};
`;

const Header = styled.span`
  font-size: 3.5vw;
  font-weight: 500;
  position: relative;

  &:after {
    content: '${props => props.shadowText}';
    color: rgba(199, 199, 199, 0.4);
    font-size: 1.3em;

    position: absolute;
    top: -3vmin;
    right: -1vmin;
    z-index: -1;
  }

  ${mediaSize.tablet`
    font-size: 7vw;
  `};

  ${mediaSize.phone`
    font-size: 7.5vw;
  `};
`;

const ActionTextContainer = styled.div`
  grid-area: action;
  align-self: start;
  margin-bottom: 5vh;
  width: 70%;

  font-size: 1.5vw;

  ${mediaSize.tablet`
    justify-self: center;
    text-align: center;
    width: 90%;

    font-size: 3vw;
  `};

  ${mediaSize.phone`
    font-size: 4vw;
    margin-bottom: 4vw;
  `};
`;

const MainActionContainer = styled.div`
  grid-area: button;
  align-self: start;

  ${mediaSize.tablet`
    align-self: center;
    justify-self:center;
    width: 70%;
  `};

  ${mediaSize.phone`
    width: 85%;
  `};
`;

const MailingListSignupInput = styled(GenericInput)`
  height: 3vw;
  width: 80%;
  font-weight: 500;
  font-size: 2vmin;

  ${mediaSize.tablet`
    font-size: 2.5vmin;
    height: 8vw;
    width: 100%;
  `};

  ${mediaSize.phone`
    height: 10vw;
    font-size: 3.5vmin;
  `};
`;

const ShapeContainer = styled.img`
  position: absolute;
  bottom: -15vw;
  left: -20px;
  max-width: 30vw;
  max-height: 30vw;
  z-index: -1;

  ${mediaSize.tablet`
    max-height: 50vw;
    max-width: 50vw;
    left: -20vw;
    bottom: -12vw;
  `};

  ${mediaSize.phone`
    display: none;
  `};
`;

/* --- Component --- */
class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: 'AIzaSyBqfsxK5YJ44FRi_8mJtR3HiorXKtYzKM0',
        authDomain: 'equithon-platform-2019.firebaseapp.com',
        databaseURL: 'https://equithon-platform-2019.firebaseio.com',
        projectId: 'equithon-platform-2019',
        storageBucket: 'equithon-platform-2019.appspot.com',
        messagingSenderId: '740846697122'
      });
    }
    let db = firebase.firestore(); // eslint-disable-line

    this.signUpForMailingList = email => {
      let addSuccess = true;

      if (email.length) {
        db.collection('mailinglist')
          .add({ email })
          .then(docRef => {
            console.log('Document written with ID: ', docRef.id);
          })
          .catch(error => {
            console.error('Error adding document: ', error);
            // TODO: FIX THIS, it's async so it won't work for now
            addSuccess = false;
          });
      }
      return addSuccess;
    };
  }

  render() {
    return (
      <PageContainer className="section" id="main">
        <Fade bottom distance="5vw">
          <ContentContainer>
            <HeroImgContainer src={HeroImg} alt="A person thinking." />
            <HeaderTextContainer>
              <Header shadowText={mainPageData.header.split(' ').splice(-1)}>
                {mainPageData.header}
              </Header>
            </HeaderTextContainer>
            <ActionTextContainer>{mainPageData.actionText}</ActionTextContainer>
            <MainActionContainer>
              <MailingListSignupInput
                backgroundColor="#4B97E0"
                color="#fff"
                submit={this.signUpForMailingList}
                submitText="Stay updated by signing up for our mailing list 📫"
                submitSuccess="Thanks! You've been signed up 🎉"
                submitError="An error occurred 😢 Please try again."
                placeholderText="Your Email"
                buttonText="Sign Up"
              />
            </MainActionContainer>
          </ContentContainer>
        </Fade>
        <ShapeContainer src={AbstractShape1} />
      </PageContainer>
    );
  }
}

export default MainPage;
