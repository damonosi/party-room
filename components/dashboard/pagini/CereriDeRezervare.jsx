import axios from "axios";
import React from "react";
import useSWR from "swr";
import Spinner from "./../../spinner/index";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const CereriDeRezervare = () => {
  const { data, error } = useSWR("/api/rezervari/cereri", fetcher);

  if (error) return <div>Failed to load</div>;

  if (!data)
    return (
      <div>
        <Spinner />
      </div>
    );
  return (
    <div className="text-center ">
      <h1> CereriDeRezervare</h1>
      <ul className="bg-slate-400  h-fit overflow-hidden grid gap-6 sm:grid-cols-1 lg:grid-cols-3 sm:p-0 lg:p-16 ">
        {data.map((rezervare, index) => {
          return (
            <li className="p-6 border-slate-600 border-4 gap-6" key={index}>
              <div>
                <h1>De Pe {rezervare.data.dePe}</h1>
                <h2>Pana Pe {rezervare.data.panaPe}</h2>
                <hr />
                <h2>Lorem ipsum dolor sit amet.</h2>
                <h3>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Totam, ex.
                </h3>

                <h3>Extra:</h3>
                {rezervare.extra.bautura.acceptata === true ? (
                  <p>bautura extra{rezervare.extra.bautura.pret} lei </p>
                ) : (
                  ""
                )}
                <p>{rezervare.extra.bautura.pret}</p>
                <button
                  onClick={() => {
                    let idRevervare = rezervare._id;
                    axios.post("api/rezervari/accepta-cerere", { idRevervare });
                  }}
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
