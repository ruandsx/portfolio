import styled, { css } from 'styled-components';

export const Container = styled.a`
  min-height: 300px;
  margin: 0 20px 40px;

  flex: 1 1 300px;
  flex-direction: column;

  overflow: hidden;

  background: #fff 50%;
  background-size: cover;
  border-radius: 5px;
  box-shadow: rgba(39, 44, 49, 0.06) 8px 14px 38px,
    rgba(39, 44, 49, 0.03) 1px 3px 8px;
  transition: transform 0.5s;
  cursor: pointer;

  &:hover {
    transform: scale(1.03);
  }

  ${props =>
    props.size === 'large' &&
    css`
      @media (min-width: 795px) {
        flex: 1 1 100%;
        flex-direction: row;

        img {
          position: relative;
          flex: 1 1 auto;
          border-radius: 5px 0 0 5px;
        }
      }
    `}

  ${props =>
    props.size === 'medium' &&
    css`
      @media (min-width: 795px) {
        flex: 1 1 40%;
        flex-direction: row;
      }
    `}
`;

export const CardImage = styled.img`
  width: 100%;
  max-width: 100%;
  height: 200px;

  vertical-align: middle;

  object-fit: cover;
  border: 0;
  background: #c5d2d9 no-repeat 50%;
`;
export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  flex-grow: 1;
`;

export const Content = styled.div`
  display: block;
  position: relative;
  flex-grow: 1;

  padding: 25px 25px 0;

  color: #15171a;
`;

export const Tag = styled.span`
  display: block;
  margin-bottom: 4px;

  font-weight: 500;
  font-size: 0.8rem;
  line-height: 1em;

  text-transform: uppercase;

  color: #738a94;
`;

export const Title = styled.header`
  font-size: 16px;
`;
export const Description = styled.section`
  font-family: 'Poppins';
  font-size: 14px;

  margin: 10px 0;
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  padding: 0 25px 25px;

  font-family: 'Poppins';
  font-size: 12px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.64);
  text-transform: uppercase;
`;
