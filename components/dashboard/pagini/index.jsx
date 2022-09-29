import React from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Spinner from "./../../spinner/index";

const CereriDeRezervare = dynamic(() => import("./CereriDeRezervare"), {
  suspense: true,
});
const CereriAcceptate = dynamic(() => import("./CereriAcceptate"), {
  suspense: true,
});

const Pag3 = dynamic(() => import("./pag3"), {
  suspense: true,
});
const Pag4 = dynamic(() => import("./pag4"), {
  suspense: true,
});
const Pag5 = dynamic(() => import("./pag5"), {
  suspense: true,
});

const PaginiDashboard = ({ evAcceptate }) => {
  return (
    <ul className=" w-full container flex  h-fit justify-center ">
      <li id="1" className="block w-full h-fit ">
        <Suspense fallback={<Spinner />}>
          <CereriDeRezervare />
        </Suspense>
      </li>
      <li id="2" className="hidden  w-full h-fit">
        <Suspense fallback={<Spinner />}>
          <CereriAcceptate evAcceptate={evAcceptate} />
        </Suspense>
      </li>
      <li id="3" className="hidden  w-full h-fit">
        <Suspense fallback={<Spinner />}>
          {" "}
          <Pag3 />
        </Suspense>
      </li>
      <li id="4" className="hidden w-full h-fit">
        <Suspense fallback={<Spinner />}>
          {" "}
          <Pag4 />
        </Suspense>
      </li>
      <li id="5" className="hidden w-full h-fit">
        <Suspense fallback={<Spinner />}>
          <Pag5 />
        </Suspense>
      </li>
    </ul>
  );
};

export default PaginiDashboard;
