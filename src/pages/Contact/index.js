import React from 'react';

// components
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

// styles
import { Container, Banner, ContactText } from './styles';

const Contact = () => {
  return (
    <Container>
      <Banner>
        <h1> Ruan Xavier - FullStack Developer </h1>
        <h2> Web, Desktop and Mobile development </h2>
      </Banner>
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
