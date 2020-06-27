import styled, { css } from 'styled-components';

export const Container = styled.nav`
  width: 70vw;

  display: flex;
  justify-content: space-between;
  position: relative;
  top: -80px;

  font-weight: 300;

  overflow-x: ${window.innerWidth < 650 ? 'scroll' : 'none'};
`;

export const SideNav = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;

  letter-spacing: 0.8px;
  white-space: nowrap;

  padding: 0;

  li {
    a {
      margin: 0 10px;

      font-size: 14px;
      font-weight: 400;
      text-decoration: none;
      color: rgba(255, 255, 255, 0.8);

      transition: color 0.2s ease-in-out;

      &:hover {
        color: ${props =>
          props.hoverColor ? props.hoverColor : 'rgba(255, 255, 255, 1)'};
      }
    }

    margin: 0;

    display: block;

    text-transform: uppercase;
  }

  svg {
    font-size: 30px;
  }
`;

export const IconLink = styled.a`
  margin: 0 10px;

  font-size: 14px;
  font-weight: 400;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.8);

  transition: color 0.4s ease-in-out !important;

  &:hover {
    color: ${props =>
      props.hoverColor
        ? `${props.hoverColor}!important`
        : 'rgba(255, 255, 255, 1)'};
  }

  svg {
    font-size: 30px;
  }
`;

export const NavLink = styled.li`
  ${props =>
    props.selected &&
    css`
      border-bottom: 2px solid #fff;
    `}
`;
