import React from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Spinner from "../spinner/index";

const CereriDeRezervare = dynamic(() => import("./pagini/CereriDeRezervare"), {
  suspense: true,
});
const CereriAcceptate = dynamic(() => import("./pagini/CereriAcceptate"), {
  suspense: true,
});

const Pag3 = dynamic(() => import("./pagini/pag3"), {
  suspense: true,
});
const Pag4 = dynamic(() => import("./pagini/pag4"), {
  suspense: true,
});
const Pag5 = dynamic(() => import("./pagini/pag5"), {
  suspense: true,
});

const PaginiDashboard = () => {
  return (
    <ul className=" w-full container flex  h-fit justify-center ">
      <li id="1" className="block w-full h-fit ">
        <Suspense fallback={<Spinner />}>
          <CereriDeRezervare />
        </Suspense>
      </li>
      <li id="2" className="hidden  w-full h-fit">
        <Suspense fallback={<Spinner />}>
          <CereriAcceptate />
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
