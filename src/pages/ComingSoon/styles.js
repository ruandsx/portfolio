import styled from 'styled-components';

import banner from '../../assets/banner.jpg';

export const Container = styled.div`
  height: 100%;
  min-height: 100vh;
  width: 100vw;

  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: #f4f8fb;
`;

export const Banner = styled.div`
  width: 100%;
  height: 400px;

  padding: 40px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-image: url('${banner}');
  background-color: rgb(209, 136, 98);
  background-size: cover;
  background-position: center;

  /*
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed; */

  text-align: center;
  color: #fff;

  h1 {
    margin-top: -30px;
  }
  h2 {
    font-size: 24px;
    font-weight: 300;
    color: rgba(255, 255, 255, 0.8);
  }
`;

export const ComingSoonText = styled.div`
  height: 100%;
  width: 75vw;

  margin-top: 20px;
  padding: 10px 20px;

  display: flex;
  flex-wrap: wrap;

  font-family: 'Poppins';
  font-weight: 400;
  font-size: 20px;
`;
