import Header from "../header";
import Footer from "../footer";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>PartyRoom</title>
        <meta name="description" content="Ecommerce Website" />
      </Head>
      <ToastContainer position="bottom-center" limit={1} />

      <Header />

      <main className="container  min-h-screen   w-full grid grid-cols-auto  h-fit mt-0 justify-center relative">
        {children}
      </main>

      <Footer />
    </>
  );
};

export default Layout;
