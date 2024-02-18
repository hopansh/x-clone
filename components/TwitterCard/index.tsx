import React from "react";
import { BiMessageRounded, BiUpload } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { FiBarChart2 } from "react-icons/fi";
import styled from "@emotion/styled";
import Image from "next/image";

type TwitterCardProps = {
  tweet: {
    avatar: string;
    user: string;
    username: string;
    tweet: string;
    hashtags: string[];
  };
};
function TwitterCard({ tweet }: TwitterCardProps) {
  const { avatar, user, username, tweet: content, hashtags } = tweet;
  const Styled = styled.div`
    width: 100%;
    padding: 12px;
    display: flex;
    font-size: 15px;
    line-height: 20px;
    border-bottom: 1px solid rgb(47, 51, 54);
    .avatar {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      margin-right: 8px;
    }
    .content {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      gap: 2px;
      .user {
        display: flex;
        gap: 4px;

        font-weight: 700;
        p {
          margin: 0px;
          color: rgb(113, 118, 123);
          font-weight: 400;
        }
      }
      .tweet {
        .hashtags {
          color: #1da1f2;
        }
      }
      .actions {
        margin: 12px 0px;
        display: flex;
        gap: 8px;
        color: grey;
        flex-grow: 1;
        justify-content: space-between;
        width: 100%;
      }
    }
  `;
  return (
    <Styled>
      <div className="prefix">
        <Image
          className="avatar"
          src={avatar}
          alt="avatar"
          width={50}
          height={50}
        />
      </div>
      <div className="content">
        <div className="user">
          <div>{user}</div>
          <p>{username}</p>
        </div>
        <div className="tweet">
          <span>{content}</span>
          <div className="hashtags">
            {hashtags.map((hashtag, index) => (
              <span key={index}>{hashtag} &nbsp;</span>
            ))}
          </div>
        </div>
        <div className="actions">
          <BiMessageRounded />
          <FaRetweet />
          <AiOutlineHeart />
          <FiBarChart2 />
          <BiUpload />
        </div>
      </div>
    </Styled>
  );
}

export default TwitterCard;
