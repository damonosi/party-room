import Link from "next/link";
import React from "react";

const Dashboard = () => {
  return (
    <div className="container flex flex-row w-screen h-screen relative">
      <div className="flex bg-red-50 relative w-32 justify-center items-center">
        <ul className="flex flex-col w-full h-screen justify-between p-6 pl-0 pr-0">
          <li className="border-2 p-2">
            <Link href="#">
              <a>Optiune1</a>
            </Link>{" "}
          </li>
          <li className="border-2 p-2">
            <Link href="#">
              <a>Optiune2</a>
            </Link>{" "}
          </li>
          <li className="border-2 p-2">
            <Link href="#">
              <a> Optiune3</a>
            </Link>{" "}
          </li>
          <li className="border-2 p-2">
            <Link href="#">
              <a> Optiune4</a>
            </Link>{" "}
          </li>
          <li className="border-2 p-2">
            <Link href="#">
              <a> Optiune5</a>
            </Link>{" "}
          </li>
        </ul>
      </div>

      <div className="container flex justify-center p-6">
        <h1>Dashboard</h1>
      </div>
    </div>
  );
};

export default Dashboard;
