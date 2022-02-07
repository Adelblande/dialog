import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  height: 90px;
  padding: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }

  h1 {
    color: var(--green-500);
    font-size: 1.5rem;
    margin-right: 10px;
  }
`;

export const ContainerSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
