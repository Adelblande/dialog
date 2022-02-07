import styled from "styled-components";

export const Container = styled.div`
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  @media (max-width: 768px) {
    height: 40px;
  }
  padding: 0 8px 0 16px;
  color: var(--green-500);
  border: 3px solid var(--green-500);
  border-radius: 25px;

  input {
    width: 90%;
    border: 0;
    color: var(--green-500);
    background: transparent;

    font-size: 18pt;
    @media (max-width: 768px) {
      font-size: 12pt;
    }

    &::placeholder {
      color: var(--green-500);
      opacity: 0.3;
    }
  }
  svg {
    cursor: pointer;
    @media (max-width: 768px) {
      width: 20px;
      height: 20px;
    }
  }
`;
