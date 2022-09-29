import React from "react";

import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

const Header = () => {
  const { data: session, status } = useSession();

  const logoutClickHandler = () => {
    signOut({ callbackUrl: "/auth/login" });
  };
  return (
    <header className=" bg-fundal px-4 border-roz border-b-8">
      <nav className="flex h-12 items-center px-4 justify-between shadow-md">
        <Link href="/">
          <a>PartyRoom</a>
        </Link>
        <Link href="/fa-o-rezervare">
          <a>Rezerva Locatia</a>
        </Link>
        {session?.user?.isAdmin ? (
          <Link href="/dashboard">
            <a>Panou de Comanda</a>
          </Link>
        ) : (
          ""
        )}

        {status === "authenticated" ? (
          <a href="#" onClick={logoutClickHandler}>
            LogOut
          </a>
        ) : (
          <Link href="/auth/login">Logare</Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
