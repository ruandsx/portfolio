import styled from 'styled-components';

export const Container = styled.nav`
  width: 100%;
  min-height: 50px;

  margin-top: auto;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  position: relative;
  bottom: 0;
  font-weight: 400;

  padding: 10px 40px;

  background-color: #000;

  @media (max-width: 582px) {
    justify-content: center;
  }
`;

export const Copyright = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;

  padding: 10px;

  font-size: 14px;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.8);

  @media (max-width: 582px) {
    margin-bottom: 15px;
  }

  p {
    svg {
      margin: 0 5px;
    }
  }
`;

export const SideNav = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style-type: none;

  letter-spacing: 0.8px;
  white-space: nowrap;

  padding: 0 10px;

  color: rgba(255, 255, 255, 0.8);

  li {
    a {
      margin: 0 10px;

      font-size: 14px;
      text-decoration: none;
      color: rgba(255, 255, 255, 0.8);

      transition: color 0.2s ease-in-out;

      &:hover {
        color: rgba(255, 255, 255, 1);
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
