import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import { AiOutlineGithub, AiFillLinkedin, AiFillMail } from 'react-icons/ai';
import { FaNpm } from 'react-icons/fa';

// styles
import { Container, SideNav, NavLink, IconLink } from './styles';

const Navbar = () => {
  const { url } = useRouteMatch();
  return (
    <Container>
      <SideNav>
        <NavLink selected={url === '/skills' || url === '/'}>
          <Link to="/skills"> Skills </Link>
        </NavLink>
        <NavLink selected={url === '/portfolio'}>
          <Link to="/portfolio"> Portfolio </Link>
        </NavLink>
        <NavLink selected={url === '/contact'}>
          <Link to="/contact"> Contact </Link>
        </NavLink>
      </SideNav>
      <SideNav>
        <li>
          <IconLink
            hoverColor="#000"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
            href="https://github.com/ruandsx"
          >
            <AiOutlineGithub />
          </IconLink>
        </li>
        <li>
          <IconLink
            hoverColor="#000"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            href="https://www.linkedin.com/in/ruan-xavier/"
          >
            <AiFillLinkedin />
          </IconLink>
        </li>
        <li>
          <IconLink
            hoverColor="#000"
            target="_blank"
            rel="noopener noreferrer"
            title="NPM"
            href="https://www.npmjs.com/~ruanxavier"
          >
            <FaNpm />
          </IconLink>
        </li>
        <li>
          <IconLink
            hoverColor="#000"
            target="_blank"
            rel="noopener noreferrer"
            title="Send Mail"
            href="mailto:ruandsxavier@gmail.com"
          >
            <AiFillMail />
          </IconLink>
        </li>
      </SideNav>
    </Container>
  );
};

export default Navbar;
