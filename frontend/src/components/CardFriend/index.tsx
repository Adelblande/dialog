import { FC } from "react";
import { Container, ContainerImage, Label } from "./styles";

export interface IUser {
  _id: string;
  picture: string;
  age: number;
  name: string;
  eyeColor: string;
  company: string;
  email: string;
}
interface ICardProps {
  user: IUser;
}

const CardFriend: FC<ICardProps> = ({ user }) => (
  <Container key={user._id}>
    <ContainerImage url={user.picture} />
    <Label>Name: {user.name}</Label>
    <Label>Age: {user.age}</Label>
    <Label>Eye color: {user.eyeColor}</Label>
    <Label>Company: {user.company}</Label>
    <Label>E-mail: {user.email}</Label>
  </Container>
);

export default CardFriend;
