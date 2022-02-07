import { FC, useState } from "react";
import { Container, ContainerSearch } from "./styles";
import { FiSearch } from "react-icons/fi";
import Search from "../Search";

const Header: FC = () => {
  const [search, setSearch] = useState("");
  return (
    <Container>
      <h1>Dialog</h1>
      <ContainerSearch>
        <Search name="search" icon={FiSearch} handleChange={() => {}} />
      </ContainerSearch>
    </Container>
  );
};

export default Header;
