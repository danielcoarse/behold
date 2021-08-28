import styled from "styled-components";

export const StyldedButton = styled.button`
  padding: 1rem 1.5rem;
  border: 0;
  outline: none;
  border-radius: 0.25rem;
  cursor: pointer;
  background-color: black;
  color: white;
`;

export const StyledMain = styled.main`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: 3rem 0;
`;

export const Divider = styled.div`
  background-color: black;
  width: 100%;
  height: 1px;
  margin: 2rem auto;
`;

export const Title2 = styled.h2`
  text-align: center;
`;

export const StyledPostContainer = styled.div`
  margin: 0 auto;
  width: 90%;
`;
