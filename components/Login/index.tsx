import { graphqlClient } from "@/clients/api";
import { verifyGoogleTokenQuery } from "@/graphql/query/user";
import { useCurrentUser } from "@/hooks/user";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { useQueryClient } from "@tanstack/react-query";
import React, { useCallback } from "react";

function Login() {
  const { user } = useCurrentUser();
  const queryClient = useQueryClient();

  const handleLoginWithGoogle = useCallback(
    async (creds: CredentialResponse) => {
      try {
        console.log(creds);
        const token = creds.credential;
        if (token) {
          console.log(token);
          const { verifyGoogleToken } = await graphqlClient.request(
            verifyGoogleTokenQuery,
            {
              token,
            }
          );
          if (verifyGoogleToken) {
            window.localStorage.setItem("token", verifyGoogleToken);
            window.location.reload();
          }
          queryClient.invalidateQueries(["currentUser"]);
          console.log(verifyGoogleToken);
        }
      } catch (e) {
        console.error(e);
      }
    },
    []
  );

  const handleLogout = useCallback(() => {
    window.localStorage.removeItem("token");
    window.location.reload();
  }, []);
  return !user ? (
    <div className="btn login-btn">
      <GoogleLogin
        shape="pill"
        theme="filled_black"
        onSuccess={handleLoginWithGoogle}
      />
    </div>
  ) : (
    <div className="btn logout-btn" onClick={handleLogout}>
      Logout
    </div>
  );
}

export default Login;
