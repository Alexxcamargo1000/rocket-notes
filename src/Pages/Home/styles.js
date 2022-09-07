import styled from "styled-components";
import { Link } from "react-router-dom";
export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 250px auto;
  grid-template-rows: 105px 128px auto 64px;
  grid-template-areas:
    "brand header"
    "menu search"
    "menu content"
    "newnote content";

  @media (max-width: 768px) {
    grid-template-columns: 150px auto;
    grid-template-rows: 105px 100px auto auto;
    grid-template-areas:
      "header header"
      "menu menu"
      "search search"
      "content content";
  }
`;

export const Brand = styled.div`
  grid-area: brand;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  @media (max-width: 768px) {
    display: none;
  }

  > h1 {
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }
`;

export const Menu = styled.ul`
  grid-area: menu;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  padding-top: 64px;
  text-align: center;

  @media (max-width: 768px) {
    padding-top: 0;

    display: flex;
    align-items: center;
    justify-content:flex-start;
    padding-inline: 10px ;
    gap: 16px;
    overflow-x: auto;
  }

  > li {
    margin-bottom: 24px;

    @media (max-width: 768px) {
      display: flex;
      align-items: center;
      margin-bottom: 0px;
    }
  }
`;

export const Search = styled.div`
  grid-area: search;
  padding: 64px 64px 0;

  @media (max-width: 768px) {
    padding: 40px 10px 0px;
  }
`;

export const Content = styled.div`
  grid-area: content;
  padding: 0 64px;
  overflow-y: auto;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const NewNote = styled(Link)`
  grid-area: newnote;
  background-color: ${({ theme }) => theme.COLORS.ORANGE};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: none;
  @media (max-width: 768px) {
    position: fixed;
    bottom: 20px;
    right: 20px;

    width: 32px;
    height: 32px;
    border-radius: 50%;

    & span {
      display: none;
    }
  }
`;
