import styled from 'styled-components';

import banner from '../../assets/banner.jpg';

export const Container = styled.div`
width: 100%;
height: 470px;

padding: 40px;

display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;

/* background-image: url('${banner}'); */
/* background-color: rgb(209, 136, 98); */
background-color: rgba(153,87,55, 0.9);
background-size: cover;
background-position: center;



text-align: center;
color: #fff;

h1 {
  margin-top: -20px;
}
h2 {
  margin-top: 5px;
  font-size: 24px;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.8);
}
`;

export const Avatar = styled.div`
  position: relative;
  align-self: center;

  margin-bottom: 32px;
  width: 186px;

  img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
    /* border: 0.5px solid rgb(209, 136, 98);

    transition: border 0.5s;

    &:hover {
      border: 0.5px solid #ffffff;
      cursor: pointer;
    } */
  }
`;
