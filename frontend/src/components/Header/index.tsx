import { FC } from "react";
import { Container, ContainerSearch } from "./styles";
import { FiSearch } from "react-icons/fi";
import Search from "../Search";

const Header: FC = () => {
  return (
    <Container>
      <h1>Dialog</h1>
      <ContainerSearch>
        <Search
          name="search"
          icon={FiSearch}
        />
      </ContainerSearch>
    </Container>
  );
};

export default Header;
