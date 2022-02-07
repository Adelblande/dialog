import { FC } from "react";
import GlobalStyles from "./GlobalStyles";
import Home from "./pages/Home";
import Details from "./pages/Details";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message }) =>
      console.log("GraphQL Error-->", message)
    );
  }
});
const linkApollo = from([
  errorLink,
  new HttpLink({ uri: "http://localhost:4000" }),
]);

const client = new ApolloClient({
  link: linkApollo,
  cache: new InMemoryCache(),
});

const App: FC = () => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/details/:_id" element={<Details />} />
        </Routes>
        <GlobalStyles />
      </BrowserRouter>
    </ApolloProvider>
  );
};

export default App;
