import React, { useCallback, useMemo } from "react";
import styled from "@emotion/styled";
import Avatar from "../Avatar";
import { useCurrentUser } from "@/hooks/user";
import { BiImageAlt } from "react-icons/bi";
import { useCreateTweet } from "@/hooks/tweet";

function NewPost() {
  const Styled = useMemo(
    () => styled.div`
      border-bottom: 1px solid #38444d;
      .tabs {
        border-bottom: 1px solid #38444d;
        display: flex;
        font-size: 16px;
        color: #6e767d;
        width: 100%;
        .tab {
          width: 50%;
          text-align: center;
          height: 54px;
          display: flex;
          justify-content: center;
          align-items: flex-end;
          cursor: pointer;
          .tab-label {
            width: fit-content;
            padding-bottom: 12px;
          }
          :hover {
            background-color: rgb(231, 233, 234, 0.1);
          }
        }
        .active {
          .tab-label {
            color: #fff;
            font-weight: 700;
            border-bottom: 4px solid #1da1f2;
          }
        }
      }
      .new-post-container {
        display: flex;
        padding: 12px;
      }
      .right-section {
        width: 100%;
        textarea {
          width: 100%;
          padding: 12px;
          border-radius: 8px;
          border: none;
          background-color: transparent;
          color: #fff;
          font-size: 20px;
          resize: none;
          border: none;
          :focus,
          :active {
            outline: none;
          }
        }
        .post-btn-collection {
          display: flex;
          justify-content: space-between;
          align-items: center;
          .post-btn {
            background-color: #1da1f2;
            color: white;
            padding: 12px 24px;
            line-height: 20px;
            border-radius: 99px;
            text-align: center;
            cursor: pointer;
            font-size: 16px;
            font-weight: 700;
            margin: 8px 0px;
          }
          .btn-groups {
            display: flex;
            gap: 8px;
            color: grey;
            flex-grow: 1;
            justify-content: space-between;
            svg {
              cursor: pointer;
            }
          }
        }
      }
    `,
    []
  );
  const [content, setContent] = React.useState("");
  const { user } = useCurrentUser();
  const { mutate } = useCreateTweet();
  const handleSelectImage = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = (event) => {
      //   const file = (event.target as HTMLInputElement).files[0];
      console.log(event);
    };
    input.click();
  };
  const handleTweetPost = useCallback(() => {
    console.log(content, "content");
    if (content) {
      console.log(content);
      mutate({ content });
      setContent("");
    }
  }, [content]);

  if (!user) return null;
  return (
    <Styled>
      <div className="tabs">
        <div className="tab tab-1 active">
          <div className="tab-label">For you</div>
        </div>
        <div className="tab tab-2">
          <div className="tab-label">Following</div>
        </div>
      </div>
      <div className="new-post-container">
        <div className="left-section">
          <Avatar url={user.profileImageUrl || ""} size={50} />
        </div>
        <div className="right-section">
          <div className="input-section">
            <textarea
              value={content}
              rows={2}
              maxLength={280}
              placeholder="What is happening?!"
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <div className="post-btn-collection">
            <div className="btn-groups">
              <BiImageAlt onClick={handleSelectImage} />
            </div>
            <div
              className="post-btn"
              onClick={handleTweetPost}
              role="presentation"
            >
              Post
            </div>
          </div>
        </div>
      </div>
    </Styled>
  );
}

export default NewPost;
