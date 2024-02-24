import React from "react";
import NewPost from "../NewPost";
import TwitterCard from "../TwitterCard";
// import { useGetAllTweets } from "@/hooks/tweet";
import { Tweet } from "@/gql/graphql";

function TweetsList(props: { tweets: Tweet[] }) {
  // const { tweets = [] } = useGetAllTweets();
  const tweets = props.tweets;
  return (
    <>
      <NewPost />
      {!!tweets?.length &&
        tweets.map((tweet, index) => (
          <TwitterCard key={index} data={tweet as Tweet} />
        ))}
    </>
  );
}


export default TweetsList;
