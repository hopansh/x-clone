import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { GoogleOAuthProvider } from "@react-oauth/google";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GoogleOAuthProvider clientId="116328230171-umnqsevfb7e627g6698758l534btd3g3.apps.googleusercontent.com">
      <Component {...pageProps} />;
    </GoogleOAuthProvider>
  );
}
