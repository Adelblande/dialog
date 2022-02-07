import styled from "styled-components";

interface IContainerImageProps {
  url: string;
}

export const Container = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }
  width: 500px;
  height: 300px;
  padding: 16px;
  border-radius: 10px;
  margin: 10px;
  color: var(--black);
`;

export const ContainerImage = styled.div<IContainerImageProps>`
  border-radius: 10px;
  background-image: url(${(props) => props.url});
  width: 100%;
  height: 100%;
  background-size: cover;
`;

export const Label = styled.label`
  font-size: 1rem;
  color: var(--black);
`;

export const ContainerInfos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 20px;
  width: 600px;
`;

export const ContainerFriends = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  padding: 10px 20px;
`;

export const FriendsTitle = styled.h2`
  margin: 20px;
  font-size: 1.5rem;
  color: var(--green-500);
`;
