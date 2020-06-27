import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import { AiOutlineGithub, AiFillLinkedin, AiFillMail } from 'react-icons/ai';
import { FaNpm } from 'react-icons/fa';

// styles
import { Container, SideNav, NavLink } from './styles';

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

export default Navbar;
