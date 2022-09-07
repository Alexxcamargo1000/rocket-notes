import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
    "header"
    "content";

  > main {
    grid-area: content;
    overflow-y: auto;
  }

  .tags {
    display:flex;
    justify-content:space-between;
    flex-wrap:wrap;
  }
`;

export const Form = styled.form`
  max-width: 550px;
  margin: 36px auto;
  @media (max-width: 768px) {
    width: 90%;
  }

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 36px;
    > button {
      font-size: 20px;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }

  
`;
