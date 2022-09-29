import { Session } from "next-auth";
import { SessionProvider, useSession } from "next-auth/react";
import { ReactNode } from "react";
import type { AppProps } from "next/app";

import "../styles/globals.css";
import Layout from "../components/layout/index";
import Spinner from "../components/spinner";
import { useRouter } from "next/router";
import type { NextComponentType } from "next";

interface Props {
  children?: ReactNode;

  // any props that come into the component
}
type CustomAppProps = AppProps & {
  Component: NextComponentType & { Auth?: boolean }; // add auth type
};
function MyApp(
  { Component, pageProps }: CustomAppProps,
  session: Session | null | undefined,
) {
  return (
    <SessionProvider session={session}>
      <Layout>
        {Component.Auth ? (
          <Auth>
            <Component {...pageProps} />
          </Auth>
        ) : (
          <Component {...pageProps} />
        )}
      </Layout>
    </SessionProvider>
  );
}
function Auth({ children }: Props) {
  const router = useRouter();
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/unauthorized?message=login required");
      console.log("Nu Esti logat");
    },
  });

  console.log(session);
  if (status === "loading") {
    return <Spinner />;
  }
  return <div> {children}</div>;
}
export default MyApp;
