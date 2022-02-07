import styled from "styled-components";

interface IContainerImageProps {
  url: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 320px;
  padding: 16px;
  border-radius: 10px;
  border: 1px solid var(--green-500);
  margin: 10px;
  color: var(--black);
`;

export const ContainerImage = styled.div<IContainerImageProps>`
  border-radius: 10px 10px 0 0;
  background-image: url(${(props) => props.url});
  width: 100%;
  height: 60%;
  background-size: cover;
  margin-bottom: 10px;
`;

export const Label = styled.label`
  font-size: 1rem;
  color: var(--black);
`;
