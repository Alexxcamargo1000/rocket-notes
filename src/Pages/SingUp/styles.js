import styled from "styled-components";
import backgroundImg from "../../assets/background.png";
export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 136px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 0;
    padding-bottom: 10px;
    width: 90%;
    margin: 0 auto;
  }

  > h1 {
    font-size: 48px;
    color: ${({ theme }) => theme.COLORS.ORANGE};

    @media (max-width: 768px) {
      font-size: 32px;
    }
  }

  > p {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  > h2 {
    font-size: 24px;
    margin: 48px 0;
    @media (max-width: 768px) {
      font-size: 20px;
    }
  }

  > a {
    margin-top: 124px;
    color: ${({ theme }) => theme.COLORS.ORANGE};
    
    @media (max-width: 768px) {
      margin-top: 40px;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
  filter: brightness(0.3);

  @media (max-width: 768px) {
    display: none;
  }
`;
