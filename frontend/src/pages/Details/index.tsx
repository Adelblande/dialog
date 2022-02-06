import { FC } from "react";
import Layout from "../Layout";
import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

const QUERY_LIST = gql`
  query Details($detailsId: ID) {
    details(_id: $detailsId) {
      picture
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
  const { loading, error, data } = useQuery(QUERY_LIST, {
    variables: { _id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) {
    console.log("DETAILS-ERROUUU-->", error);
  }

  if (data) {
    console.log("Acertouuu-->", data);
  }

  return (
    <Layout>
      <h1>Details</h1>
      {data && data.details.name}
    </Layout>
  );
};

export default Details;
