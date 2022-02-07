import { FC } from "react";
import Layout from "../Layout";
import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import CardDetails from "../../components/CardDetails";

const QUERY_DETAILS = gql`
  query Details($_id: String) {
    details(_id: $_id) {
      picture
      name
      age
      email
      friends {
        picture
        age
        eyeColor
        name
        company
        email
      }
    }
  }
`;
const Details: FC = () => {
  const { _id } = useParams();

  const { loading, data } = useQuery(QUERY_DETAILS, {
    variables: { _id },
  });

  if (loading) return <p>Loading...</p>;

  return <Layout>{data && <CardDetails user={data.details} />}</Layout>;
};

export default Details;
