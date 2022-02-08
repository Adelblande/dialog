import { FC, useCallback } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from 'react-router-dom'
import {
  Container,
  ContainerImage,
  Label,
  ContainerInfos,
  ContainerFriends,
  FriendsTitle,
} from "./styles";
import { IUser } from "../Card";
import CardFriend from "../CardFriend";

export interface IUserDetails {
  _id: string;
  picture: string;
  age: number;
  name: string;
  email: string;
  friends: IUser[];
}
interface ICardDetailsProps {
  user: IUserDetails;
}


const CardDetails: FC<ICardDetailsProps> = ({ user }) => {
  const navigate = useNavigate()
  const handleBack = useCallback(() => {
    navigate('/')
  }, [])
  return (
  <>
    <Container>
      <ContainerImage url={user.picture} />
      <ContainerInfos>
        <Label>Name: {user.name}</Label>
        <Label>Age: {user.age}</Label>
        <Label>E-mail: {user.email}</Label>
      </ContainerInfos>
      <FiArrowLeft size={80} color="#007676" onClick={handleBack} cursor="pointer" />
    </Container>
    <FriendsTitle>Friends:</FriendsTitle>
    <ContainerFriends>
      {user.friends.map((friend: IUser) => (
        <CardFriend user={friend} />
      ))}
    </ContainerFriends>
  </>
)};

export default CardDetails;
