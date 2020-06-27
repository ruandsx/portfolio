import React from 'react';

// components
import Card from '../../components/Card';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

// data
import skills from '../../assets/skills.json';

// styles
import { Container, Banner, CardsArea } from './styles';

const Home = () => {
  return (
    <Container>
      <Banner>
        <h1> Ruan Xavier - FullStack Developer </h1>
        <h2> Web and Mobile development </h2>
      </Banner>
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
