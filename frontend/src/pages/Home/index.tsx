import { FC } from "react";
import { useQuery, gql } from "@apollo/client";
import Layout from "../Layout";
import Card from "../../components/Card";
import { Container } from "./styles";
import { IUser } from "../../components/Card";

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

const Home: FC = () => {
  // const [name, setName] = useState(null);
  const { loading, error, data } = useQuery(QUERY_LIST, {
    variables: { name: null },
  });

  if (loading) return <p>Loading...</p>;
  if (error) {
    console.log("ERROUUU-->", error);
  }

  return (
    <Layout>
      <Container>
        {data && data.list.map((user: IUser) => <Card user={user} />)}
      </Container>
    </Layout>
  );
};

export default Home;
