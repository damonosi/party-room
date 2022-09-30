import React from "react";
import useSWR from "swr";
import Spinner from "./../../spinner/index";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const CereriAcceptate = () => {
  const { data, error } = useSWR("/api/rezervari/acceptate", fetcher);
  if (error) return <div>Failed to load</div>;
  if (!data)
    return (
      <div>
        <Spinner />
      </div>
    );
  return (
    <div>
      {data.map((eveniment) => {
        return (
          <div key={eveniment._id}>
            <h4>nr Contact {eveniment.nrTelefon}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default CereriAcceptate;
