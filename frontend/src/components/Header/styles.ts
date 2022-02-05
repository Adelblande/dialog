import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  height: 90px;
  padding: 20px;

  h1 {
    color: var(--green-500);
    font-size: 1.3rem;
  }

  input {
    margin-left: 20px;
    width: 300px;
    height: 50px;
    border: 2px solid var(--green-500);
    border-radius: 30px;
    font-size: 1.2rem;
    box-sizing: border-box;
    padding: 8px 20px;
  }
`;
