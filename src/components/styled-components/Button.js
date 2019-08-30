import styled from "styled-components";
import { NavLink } from "react-router-dom";
// Global Styling for all buttons
export const ButtonContainer = styled.button`
  border-radius: 1.875rem;
  border: none;
  padding: 0.3125rem 0.625rem;
  color: #fff;
  width: 16rem;
  height: 3rem;
  margin-top: 0.6rem;
  background: #e65400;
  transition: all ease-in 0.2s;
  font-size: 1.5rem;
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
  width: 150px;
  border-radius: 20px;
  color: #e60800;
  text-align: center;
  text-decoration: none;
  line-height: 2rem;
  font-size: 1.5rem;
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
    height: 40px;
    width: 220px;
    border-radius: 20px;
    color: #fff;
    text-align: center;
    text-decoration: none;
    line-height: 3rem;
    &:hover {
      background: #ffae80;
      color: white;
    }
    &:active {
      text-decoration: none;
      background-color: lightgray;
      color: white;
    }
  }
`;

export const CreatePassportButton = styled(NavLink)`
  background: #e65400;
  height: 30px;
  width: 180px;
  border-radius: 20px;
  color: #fff;
  text-align: center;
  text-decoration: none;
  line-height: 2rem;
  &:hover {
    background-color: #ffae80;
    color: white;
  }
  &:active {
    text-decoration: none;
    background-color: #ffae80;
    color: white;
  }
  @media (max-width: 500px) {
    display: none;
  }
`;

export const DeletePassportButton = styled(NavLink)`
  background: #e65400;
  height: 30px;
  width: 180px;
  border-radius: 20px;
  color: #fff;
  text-align: center;
  text-decoration: none;
  line-height: 2rem;
  &:hover {
    background-color: #ffae80;
    color: white;
  }
  &:active {
    text-decoration: none;
    background-color: #ffae80;
    color: white;
  }
  @media (max-width: 500px) {
    display: none;
  }
`;

export const CheckitOutButton = styled(NavLink)`
  background: #e65400;
  height: 40px;
  width: 300px;
  border-radius: 20px;
  color: #fff;
  text-align: center;
  text-decoration: none;
  line-height: 3rem;
  &:hover {
    background-color: #ffae80;
    color: white;
  }
  &:active {
    text-decoration: none;
    background-color: #ffae80;
    color: white;
  }
  @media (max-width: 500px) {
    display: none;
  }
`;
