import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 400px;
  padding: 16px;
  border-radius: 10px;
  border: 1px solid var(--green-500);
`;

export const ContainerImage = styled.div`
  display: flex;
`;

export const Label = styled.label`
  font-size: 1rem;
  color: var(--green-100);
`;
