/* --- Packages and Components --- */
import React from 'react';
import Helmet from 'react-helmet';

/* --- Images & Other Assets --- */
import Favicon from '../static/img/logo_tiny.png';

/* --- Component [STATELESS] --- */
export default () => (
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
);
