import React from 'react';
import { AiOutlineGithub, AiFillLinkedin, AiFillMail } from 'react-icons/ai';
import { FaNpm, FaHeart } from 'react-icons/fa';

// styles
import { Container, Copyright, SideNav } from './styles';

const Footer = () => {
  return (
    <Container>
      <Copyright>
        <p>
          Made with
          <FaHeart color="#FF0000" />
          and ReactJS by Ruan Xavier
        </p>
      </Copyright>
      <SideNav>
        <li>
          <a href="https://github.com/ruandsx">
            <AiOutlineGithub />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/ruan-xavier-8bab6a169/">
            <AiFillLinkedin />
          </a>
        </li>
        <li>
          <a href="https://www.npmjs.com/~ruanxavier">
            <FaNpm />
          </a>
        </li>
        <li>
          <a href="mailto:ruandsxavier@gmail.com">
            <AiFillMail />
          </a>
        </li>
      </SideNav>
    </Container>
  );
};

export default Footer;
