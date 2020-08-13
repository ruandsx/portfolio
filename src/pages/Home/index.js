import React from 'react';

// components
import Banner from '../../components/Banner';
import Card from '../../components/Card';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

// data
import skills from '../../assets/skills.json';

// styles
import { Container, CardsArea } from './styles';

const Home = () => {
  return (
    <Container>
      <Banner />
      <Navbar />
      <CardsArea>
        {skills.map(({ name, href, image, tag, description, time }) => (
          <Card
            key={name}
            name={name}
            href={href}
            image={image}
            tag={tag}
            description={description}
            time={time}
          />
        ))}
      </CardsArea>
      <Footer />
    </Container>
  );
};

export default Home;
