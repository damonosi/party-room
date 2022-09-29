import React from "react";

const CereriDeRezervare = () => {
  const rezervariArray = new Array(1, 2, 3, 4, 5);

  return (
    <div className="text-center ">
      <h1> CereriDeRezervare</h1>
      <ul className="bg-slate-400 grid gap-6 grid-cols-3 p-6 ">
        {rezervariArray.map((rezervare, index) => {
          return (
            <li className="p-6 border-slate-600 border-4 gap-6" key={index}>
              <div>
                <h1>{rezervare}</h1>
                <hr />
                <h2>Lorem ipsum dolor sit amet.</h2>
                <h3>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Totam, ex.
                </h3>
                <p>200 Lei</p>
                <p>Data 20/05/2022</p>
                <button
                  type="button"
                  className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                >
                  Accepta Oferta
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CereriDeRezervare;
