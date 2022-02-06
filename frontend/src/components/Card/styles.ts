import styled from "styled-components";
import { Link } from "react-router-dom";

interface IContainerImageProps {
  url: string;
}

export const Container = styled(Link)`
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
  &:hover {
    cursor: pointer;
    transform: scale(1.02);
    transition: all 300ms ease-in-out;
  }
`;

export const Label = styled.label`
  font-size: 1rem;
  color: var(--green-100);
`;
