import React from "react";
import CereriDeRezervare from "./CereriDeRezervare";
import Pag2 from "./pag2";
import Pag3 from "./pag3";
import Pag4 from "./pag4";
import Pag5 from "./pag5";

const PaginiDashboard = () => {
  return (
    <ul className=" w-full container flex h-auto justify-center ">
      <li id="1" className="block w-full h-screen transition-shadow">
        <CereriDeRezervare />
      </li>
      <li id="2" className="hidden transition">
        <Pag2 />
      </li>
      <li id="3" className="hidden transition">
        <Pag3 />
      </li>
      <li id="4" className="hidden">
        <Pag4 />
      </li>
      <li id="5" className="hidden">
        <Pag5 />
      </li>
    </ul>
  );
};

export default PaginiDashboard;
