import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  height:100vh;
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

  > h1 {
    font-size: 48px;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }

  > p {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  > h2 {
    font-size: 24px;
    margin-top:84px;
    margin-bottom: 24px;
  }

  > a {
    margin-top: 124px;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }
`
