import React, { useCallback } from "react";
import { graphqlClient } from "@/clients/api";
import MenuPane from "@/components/MenuPane";
import { verifyGoogleTokenQuery } from "@/graphql/query/user";
import { useCurrentUser } from "@/hooks/user";
import styled from "@emotion/styled";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { useQueryClient } from "@tanstack/react-query";
import Login from "../Login";

function Layout(props: any) {
  const Styled = styled.div`
    width: 100vw;
    height: 100vh;
    font-family: sans-serif;
    .container {
      display: flex;
      justify-content: center;
      height: 100%;
      .right-pane {
        width: 350px;
        padding: 8px 50px 8px 28px;
        margin-right: 50px;
        @media (max-width: 768px) {
           display: none;
        }
      }
    }
    .login-btn {
      display: flex;
      justify-content: center;
      margin-top: 20px;
      width: fit-content;
      overflow-y: clip;
      overflow-x: clip;
      border-radius: 999px;
    }
    .logout-btn {
      background-color: #1da1f2;
      color: white;
      padding: 15px 32px;
      line-height: 20px;
      border-radius: 99px;
      text-align: center;
      cursor: pointer;
      width: 233px;
      font-size: 16px;
      font-weight: 700;
      margin: 20px 0px;
      @media (max-width: 768px) {
        padding: 12px;
        width: fit-content;
      }
    }
    .center-pane{
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
    }
  `;

  return (
    <Styled>
      <div className="container">
        <MenuPane />
        <div className="pane center-pane">{props.children}</div>
        <div className="pane right-pane">
          <Login />
        </div>
      </div>
    </Styled>
  );
}

export default Layout;
