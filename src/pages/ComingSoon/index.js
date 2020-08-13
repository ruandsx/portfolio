import React from 'react';

// components
import Banner from '../../components/Banner';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

// styles
import { Container, ComingSoonText } from './styles';

const ComingSoon = () => {
  return (
    <Container>
      <Banner />
      <Navbar />
      <ComingSoonText>
        <p>Coming Soon...</p>
      </ComingSoonText>
      <Footer />
    </Container>
  );
};

export default ComingSoon;
