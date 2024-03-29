import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  > header {
    width: 100%;
    height: 144px;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    display: flex;
    align-items: center;
    padding: 0 124px;

    @media (max-width: 768px) {
    padding: 0 20px;
    }

    svg {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
    button {
      background: none;
      border: none;
    }
  }
`;

export const Form = styled.form`
  max-width: 340px;
  margin: 34px auto 0;
  padding-bottom: 40px ;

  > div:nth-child(4) {
    margin-top:24px ;
  }
`;

export const Avatar = styled.div`
  position: relative;
  margin: -124px auto 32px;
  width: 186px;
  height: 186px;

  > img {
    border-radius: 50%;
    width:100%;
    height:100%;
  }
  > label {
    width: 48px;
    height: 48px;
    background-color: ${({ theme }) => theme.COLORS.ORANGE};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position:absolute;
    bottom: 7px;
    right: 7px;
    cursor: pointer;

    svg {
      color: ${({ theme }) => theme.COLORS.BACKGROUND_800}
    }
  }
  
  > input {
    display:none ;
  }
  
`;
