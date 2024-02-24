import { graphqlClient } from "@/clients/api";
import TweetsList from "@/components/Feed/TweetsList";
import Layout from "@/components/Layout";
import { Tweet } from "@/gql/graphql";
import { getAllTweetsQuery } from "@/graphql/query/tweet";
import { GetServerSideProps } from "next";

interface ServerProps {
  allTweets: Tweet[];
}
export default function Home(props: ServerProps) {
  return (
    <Layout>
      <TweetsList tweets={props.allTweets as Tweet[]} />
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const allTweets = await graphqlClient.request(getAllTweetsQuery);
  return {
    props: {
      allTweets: allTweets.getAllTweets,
    },
  };
};
