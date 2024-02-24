import React from "react";
import { BiMessageRounded, BiUpload } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { FiBarChart2 } from "react-icons/fi";
import styled from "@emotion/styled";
import Avatar from "../Avatar";
import { Tweet } from "@/gql/graphql";
import Link from "next/link";

interface TwitterCardInterface {
  data: Tweet;
}
const TwitterCard: React.FC<TwitterCardInterface> = (props) => {
  const { data } = props;
  const { author, content } = data;
  const user = `${author?.firstName} ${author?.lastName}`;
  const imageURL = author?.profileImageUrl;
  const Styled = styled.div`
    width: 100%;
    padding: 12px;
    display: flex;
    font-size: 15px;
    line-height: 20px;
    border-bottom: 1px solid rgb(47, 51, 54);
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
        <Link href={`/${author?.id}`} passHref>
          <Avatar url={imageURL ?? ""} size={50} />
        </Link>
      </div>
      <div className="content">
        <div className="user">
          <div>{user}</div>
          {/* <p>{username}</p> */}
        </div>
        <div className="tweet">
          <span>{content}</span>
          {/* <div className="hashtags">
            {hashtags.map((hashtag, index) => (
              <span key={index}>{hashtag} &nbsp;</span>
            ))}
          </div> */}
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
};

export default TwitterCard;
