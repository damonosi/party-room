import Link from "next/link";
import React, { useState, useEffect, useRef, createRef } from "react";
import PaginiDashboard from "./../../components/dashboard/pagini/index";

const Dashboard = ({ evAcceptate, cereri }) => {
  const ref = useRef();
  const handleClick = (e) => {
    const linkId = e.currentTarget.id;

    const idList = [1, 2, 3, 4, 5];
    let cloneArray = idList.slice();
    let i = linkId - 1;

    cloneArray.splice(i, 1);
    const paginaTintita = ref.current.children[0].children[linkId - 1];
    const paginiTintita = ref.current.children[0].children;

    if (paginaTintita.id === linkId) {
      paginaTintita.className = "block";
      cloneArray.map((arr) => {
        let paginiHidden = paginiTintita[arr - 1];
        paginiHidden.className = "hidden";
      });
    }
  };

  return (
    <div className="container flex flex-row w-screen  h-auto relative">
      <div className="flex bg-red-50 h-96 rounded-r-xl  w-32 justify-center items-center sticky  top-0">
        <ul className="flex flex-col w-full h-96  justify-between p-6 pl-1 pr-1 ">
          <li className="border-2 p-2">
            <Link href="#">
              <a id="1" onClick={handleClick}>
                <button>Cereri De Rezervare</button>
              </a>
            </Link>{" "}
          </li>
          <li className="border-2 p-2">
            <Link href="#">
              <a id="2" onClick={handleClick}>
                Optiune2
              </a>
            </Link>{" "}
          </li>
          <li className="border-2 p-2">
            <Link href="#">
              <a id="3" onClick={handleClick}>
                {" "}
                Optiune3
              </a>
            </Link>{" "}
          </li>
          <li className="border-2 p-2">
            <Link href="#">
              <a id="4" onClick={handleClick}>
                {" "}
                Optiune4
              </a>
            </Link>{" "}
          </li>
          <li className="border-2 p-2">
            <Link href="#">
              <a id="5" onClick={handleClick}>
                {" "}
                Optiune5
              </a>
            </Link>{" "}
          </li>
        </ul>
      </div>

      <div ref={ref} className="container m-0 flex justify-center p-6 h-full">
        <PaginiDashboard
          evAcceptate={evAcceptate}
          cereri={cereri}
          handleClick={handleClick}
        />
      </div>
    </div>
  );
};
export async function getServerSideProps(context) {
  const res = await fetch(`http://localhost:3000/api/rezervari/acceptate`);
  const evAcceptate = await res.json();

  const resCereri = await fetch(`http://localhost:3000/api/rezervari/cereri`);
  const cereri = await resCereri.json();

  return {
    props: { evAcceptate, cereri },
  };
}
export default Dashboard;
