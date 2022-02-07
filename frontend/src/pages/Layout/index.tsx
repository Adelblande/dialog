import { FC } from "react";
import Header from "../../components/Header";
import { Container, Body } from "./styles";

const Layout: FC = ({ children }) => {
  return (
    <Container>
      <Header />
      <Body>{children}</Body>
    </Container>
  );
};

export default Layout;
