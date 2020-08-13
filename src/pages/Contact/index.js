import React from 'react';

// components
import Banner from '../../components/Banner';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

// styles
import { Container, ContactText } from './styles';

const Contact = () => {
  return (
    <Container>
      <Banner />
      <Navbar />
      <ContactText>
        <p>I don&apos;t implemented a form or anything like that yet :( </p>
      </ContactText>
      <ContactText>
        <p>
          But you can call me by the socials that are in the navbar / footer.
        </p>
      </ContactText>
      <Footer />
    </Container>
  );
};

export default Contact;
