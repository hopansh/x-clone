import React from "react";
import TwitterCard from "../TwitterCard";
import styled from "@emotion/styled";

function Feed() {
  const Styled = styled.div`
    border: 1px solid rgb(47, 51, 54);
    border-width: 0px 1px;
    width: 600px;
    height: 100vh; // or any height you want
    overflow-y: scroll;
    // Hide scrollbar for Chrome, Safari and Opera
    ::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none; \
    scrollbar-width: none; 
  `;
  const tweets = [
    {
      avatar: "https://avatars.githubusercontent.com/u/51720190?v=4",
      user: "Hopansh Gahlot",
      username: "@hopansh",
      tweet:
        "Hey there! I'm building a Twitter clone using Next.js and Emotion. It is so much fun!",
      hashtags: ["#nextjs", "#emotion", "#react"],
    },
    {
      avatar: "https://avatars.githubusercontent.com/u/51720190?v=4",
      user: "Hopansh Gahlot",
      username: "@hopansh",
      tweet: "This is a tweet",
      hashtags: ["#react", "#nextjs", "#tailwindcss"],
    },
    {
      avatar: "https://avatars.githubusercontent.com/u/51720190?v=4",
      user: "Hopansh Gahlot",
      username: "@hopansh",
      tweet:
        "This is a very long tweet that should be truncated. Lets make this text over 140 characters. This is a very long tweet that should be truncated. Lets make this text over 140 characters. This is a very long tweet that should be truncated. Lets make this text over 140 characters. This is a very long tweet that should be truncated. Lets make this text over 140 characters. This is a very long tweet that should be truncated. Lets make this text over 140 characters. This is a very long tweet that should be truncated. Lets make this text over 140 characters. This is a very long tweet that should be truncated. Lets make this text over 140 characters. This is a very long tweet that should be truncated. Lets make this text over 140 characters. This is a very long tweet that should be truncated. Lets make this text over 140 characters. This is a very long tweet that should be truncated. Lets make this text over 140 characters.",
      hashtags: ["#react", "#nextjs", "#tailwindcss"],
    },
    {
      avatar: "https://avatars.githubusercontent.com/u/51720190?v=4",
      user: "Hopansh Gahlot",
      username: "@hopansh",
      tweet:
        "Hey there! I'm building a Twitter clone using Next.js and Emotion. It is so much fun!",
      hashtags: ["#nextjs", "#emotion", "#react"],
    },
    {
      avatar: "https://avatars.githubusercontent.com/u/51720190?v=4",
      user: "Hopansh Gahlot",
      username: "@hopansh",
      tweet: "This is a tweet",
      hashtags: ["#react", "#nextjs", "#tailwindcss"],
    },
    {
      avatar: "https://avatars.githubusercontent.com/u/51720190?v=4",
      user: "Hopansh Gahlot",
      username: "@hopansh",
      tweet:
        "This is a very long tweet that should be truncated. Lets make this text over 140 characters. This is a very long tweet that should be truncated. Lets make this text over 140 characters. This is a very long tweet that should be truncated. Lets make this text over 140 characters. This is a very long tweet that should be truncated. Lets make this text over 140 characters. This is a very long tweet that should be truncated. Lets make this text over 140 characters. This is a very long tweet that should be truncated. Lets make this text over 140 characters. This is a very long tweet that should be truncated. Lets make this text over 140 characters. This is a very long tweet that should be truncated. Lets make this text over 140 characters. This is a very long tweet that should be truncated. Lets make this text over 140 characters. This is a very long tweet that should be truncated. Lets make this text over 140 characters.",
      hashtags: ["#react", "#nextjs", "#tailwindcss"],
    },
  ];

  return (
    <Styled className="pane center-pane">
      {tweets.map((tweet, index) => (
        <TwitterCard key={index} tweet={tweet} />
      ))}
    </Styled>
  );
}

export default Feed;
