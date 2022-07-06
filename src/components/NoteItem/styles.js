import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  color: ${({theme}) => theme.COLORS.GRAY_300};
  
  background-color: ${({ theme, isNew }) => isNew 
    ? "transparent"
    : theme.COLORS.BACKGROUND_900};

  border: ${({ theme, isNew }) => isNew 
    ? `1px dashed ${theme.COLORS.GRAY_300}`
    : 'none' };

  padding-right:16px;
  border-radius: 10px;
  margin-bottom: 8px;

  > button {
    border: none;
    background: none;
  }

  .button-delete {
    color: ${({ theme }) => theme.COLORS.RED};
  }
  .button-add {
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }

  > input {
    height: 56px;
    width: 100%;
    padding: 12px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background-color:transparent;
    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300}
    }
  }
`;