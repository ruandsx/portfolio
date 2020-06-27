import React from 'react';

// styles
import {
  Container,
  CardImage,
  CardContent,
  Content,
  Tag,
  Title,
  Description,
  Footer,
} from './styles';

const Card = ({ size, name, href, image, tag, description, time }) => {
  return (
    <Container title={name} size={size} href={href}>
      <CardImage alt={name} src={image} />
      <CardContent>
        <Content>
          <Title>
            <Tag>{tag}</Tag>
            <h2>{name}</h2>
          </Title>
          <Description>
            <p>{description}</p>
          </Description>
        </Content>
        <Footer>
          <p>{time}</p>
        </Footer>
      </CardContent>
    </Container>
  );
};

export default Card;
