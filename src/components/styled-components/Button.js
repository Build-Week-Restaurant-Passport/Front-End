import styled from "styled-components";
import { NavLink } from "react-router-dom";
// Global Styling for all buttons
export const ButtonContainer = styled.button`
  border-radius: 1.875rem;
  border: none;
  padding: 0.3125rem 0.625rem;
  color: #fff;
  width: 9.375rem;
  height: 1.875rem;
  margin-top: 0.6rem;
  background: #e65400;
  transition: all ease-in 0.2s;
  &:hover {
    background: #b09c9c;
    cursor: pointer;
  }
  @media (max-width: 500px) {
    width: 60vw;
    height: 2.875rem;
    font-size: 1.5rem;
  }
`;

export const HeaderButton = styled(NavLink)`
  height: 30px;
  width: 120px;
  border-radius: 20px;
  color: #e60800;
  text-align: center;
  text-decoration: none;
  line-height: 2rem;
  &:hover {
    background-color: #e60800;
    color: white;
  }
  &:active {
    text-decoration: none;
    background-color: #e60800;
    color: white;
  }
  @media (max-width: 500px) {
    display: none;
  }
`;

export const LoadMoreButton = styled(NavLink)`
  @media (max-width: 500px) {
    background: #e65400;
    height: 30px;
    width: 220px;
    border-radius: 20px;
    color: #fff;
    text-align: center;
    text-decoration: none;
    line-height: 2rem;
    &:hover {
      background: #ffae80;
      color: white;
    }
    &:active {
      text-decoration: none;
      background-color: 
      color: white;
    }
  }
`;
