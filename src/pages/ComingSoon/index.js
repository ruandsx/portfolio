import React from 'react';

// components
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

// styles
import { Container, Banner, ComingSoonText } from './styles';

const ComingSoon = () => {
  return (
    <Container>
      <Banner>
        <h1> Ruan Xavier - Full Stack Developer </h1>
        <h2> Web and Mobile development </h2>
      </Banner>
      <Navbar />
      <ComingSoonText>
        <p>Coming Soon...</p>
      </ComingSoonText>
      <Footer />
    </Container>
  );
};

export default ComingSoon;
