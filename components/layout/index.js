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

      <div className=" flex min-h-screen flex-col justify-between relative h-full ">
        <div className="container m-auto mt-0">
          <Header />
        </div>
        <main className="container m-auto grid grid-cols-auto  h-full justify-center ">
          {children}
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Layout;
