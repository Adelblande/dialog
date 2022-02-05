import { FC } from "react";
import { Container } from "./styles";

const Header: FC = () => (
  <Container>
    <h1>Dialog</h1>
    <input type="search" placeholder="Search" />
  </Container>
);

export default Header;
