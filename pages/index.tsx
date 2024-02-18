import { graphqlClient } from "@/clients/api";
import Feed from "@/components/Feed";
import MenuPane from "@/components/MenuPane";
import { verifyGoogleTokenQuery } from "@/graphql/query/user";
import styled from "@emotion/styled";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { useCallback } from "react";

export default function Home() {
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
  `;

  const handleLoginWithGoogle = useCallback(
    async (creds: CredentialResponse) => {
      try {
        console.log(creds);
        const token = creds.credential;
        if (token) {
          const { verifyGoogleToken } = await graphqlClient.request(
            verifyGoogleTokenQuery,
            {
              token,
            }
          );
          if (verifyGoogleToken) {
            window.localStorage.setItem("token", verifyGoogleToken);
          }
          console.log(verifyGoogleToken);
        }
      } catch (e) {
        console.error(e);
      }
    },
    []
  );
  return (
    <Styled>
      <div className="container">
        <MenuPane />
        <Feed />
        <div className="pane right-pane">
          <div className="login-btn">
            <GoogleLogin
              shape="pill"
              theme="filled_black"
              onSuccess={handleLoginWithGoogle}
            />
          </div>
        </div>
      </div>
    </Styled>
  );
}
