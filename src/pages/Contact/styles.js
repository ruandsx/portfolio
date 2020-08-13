import styled from 'styled-components';

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

export const ContactText = styled.div`
  height: 100%;
  width: 75vw;

  margin-top: 20px;
  padding: 10px 20px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  font-family: 'Poppins';
  font-weight: 400;
  font-size: 20px;

  p {
    text-align: center;
  }
`;
