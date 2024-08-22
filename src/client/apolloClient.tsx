import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    ssrMode: true,
    uri:"http://localhost:3000/api/graphql",
    credentials: 'include',
    cache: new InMemoryCache(),
})

export default client;
