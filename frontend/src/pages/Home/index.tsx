import { FC, useContext } from "react";
import { useQuery, gql } from "@apollo/client";
import Layout from "../Layout";
import Card from "../../components/Card";
import { Container } from "./styles";
import { IUser } from "../../components/Card";

import SearchContext from "../../context/search";

const QUERY_LIST = gql`
  query List($name: String) {
    list(name: $name) {
      _id
      picture
      age
      name
      eyeColor
      company
      email
      friends {
        picture
        age
        name
        eyeColor
        company
        email
      }
    }
  }
`;

interface IHomeProps {
  search?: string
}

const Home: FC<IHomeProps> = () => {
  const { state } = useContext(SearchContext)
  const { loading, data } = useQuery(QUERY_LIST, {
    variables: { name: state.search },
  });

  if (loading) return <p>Loading...</p>;

  return (
    <Layout>
      <Container>
        {data && data.list.map((user: IUser) => <Card user={user} />)}
      </Container>
    </Layout>
  );
};

export default Home;
