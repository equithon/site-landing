/* --- Packages and Components --- */
import React from 'react';
import styled from 'styled-components';

/* --- Images --- */

/* --- Styles --- */
const PageContainer = styled.header`
  width: 100vw;
  height: 10vh;
  background-color: blue;
  position: fixed;
  z-index: 100;
  transition: transform 0.5s cubic-bezier(0.87, -0.41, 0.19, 1.44);
  transform: translateY(0);

  &.hidden {
    transform: translateY(-100%);
  }
`;

/* --- Component --- */
class PageHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolled: false,
      hidden: false,
      lastScrollPos: window.pageYOffset
    };
    this.curHeader = React.createRef();

    setInterval(() => this.handleScroll(), 150); // only check for scroll every 150ms for performance
  }

  componentDidMount() {
    window.addEventListener('scroll', () => this.setState({ scrolled: true }));
    this.height = this.curHeader.current.offsetHeight;
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
    const curScrollPos = window.pageYOffset;
    if (
      this.state.scrolled &&
      Math.abs(curScrollPos - this.state.lastScrollPos) >= SCROLL_TRIGGER_DELTA
    ) {
      // scrolled, and for more than the delta
      const shouldHide = // eslint-disable-next-line no-access-state-in-setstate
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
        header
      </PageContainer>
    );
  }
}

export default PageHeader;
