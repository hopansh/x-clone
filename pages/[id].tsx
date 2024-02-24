import { graphqlClient } from "@/clients/api";
import Layout from "@/components/Layout";
import TwitterCard from "@/components/TwitterCard";
import { Tweet, User } from "@/gql/graphql";
import { getUserByIdQuery } from "@/graphql/query/user";
import { useCurrentUser } from "@/hooks/user";
import styled from "@emotion/styled";
import { GetServerSideProps } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoArrowBack } from "react-icons/io5";

interface ServerProps {
  userInfo?: User;
}

function UserProfile(props: ServerProps) {
  const Styled = styled.div`
    .user-name {
      font-size: 20px;
      font-weight: 700;
      color: rgb(231, 233, 234);
    }
    .subtext {
      color: rgb(113, 118, 123);
    }
    .navbar {
      display: flex;
      gap: 42px;
      padding: 0px 16px;
      align-items: center;
      height: 53px;
      .user-content {
        display: flex;
        flex-direction: column;
        gap: 4px;

        .user-post-count {
          font-size: 13px;
          color: rgb(113, 118, 123);
        }
      }
    }
    .user-profile-container {
      position: relative;
      .banner {
        height: 200px;
        background-color: rgb(51, 54, 57);
      }
      .avatar-big {
        height: 145px;
        width: 145px;
        border-radius: 50%;
        border: 4px solid #000;
        position: absolute;
        top: 125px;
        left: 16px;
        overflow: hidden;
      }
      .edit-profile {
        height: 75px;
        padding: 12px 18px;
        display: flex;
        justify-content: flex-end;
        align-items: flex-start;
        .edit-btn {
          padding: 8px 16px;
          border-radius: 999px;
          border: 1px solid rgb(47, 51, 54);
        }
      }
      .user-info {
        padding: 12px 18px;
        display: flex;
        flex-direction: column;
        gap: 4px;
        border-bottom: 1px solid rgb(47, 51, 54);
      }
    }
  `;

  const { user: currentUser } = useCurrentUser();
  const user = props.userInfo ?? currentUser;

  return (
    <Layout>
      <Styled>
        <div className="navbar">
          <Link href="/">
            <IoArrowBack />
          </Link>
          <div className="user-content">
            <div className="user-name">
              {user?.firstName} {user?.lastName}
            </div>
            <div className="user-post-count">
              {user?.tweets?.length ?? 0} posts
            </div>
          </div>
        </div>
        <div className="user-profile-container">
          <div className="banner"></div>
          <div className="avatar-big">
            <Image
              src={user?.profileImageUrl ?? ""}
              alt="avatar"
              height={140}
              width={140}
            />
          </div>
          <div className="edit-profile">
            <div className="edit-btn">Edit Profile</div>
          </div>
          <div className="user-info">
            <div className="user-name">
              {user?.firstName} {user?.lastName}
            </div>
            <div className="user-handle subtext">{user?.email}</div>
          </div>

          {user?.tweets?.map((tweet) => (
            <TwitterCard
              key={tweet?.id}
              data={
                {
                  ...tweet,
                  author: {
                    firstName: user?.firstName,
                    lastName: user?.lastName,
                    profileImageUrl: user?.profileImageUrl,
                  },
                } as Tweet
              }
            />
          ))}
        </div>
      </Styled>
    </Layout>
  );
}
export const getServerSideProps: GetServerSideProps<ServerProps> = async (
  context
) => {
  const id = context.params?.id as string | undefined;

  if (!id) {
    return {
      notFound: true,
      props: {
        userInfo: undefined,
      },
    };
  }

  const userInfo = await graphqlClient.request(getUserByIdQuery, { id });
  if (!userInfo) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      userInfo: userInfo.getUserById as User,
    },
  };
};

export default UserProfile;
