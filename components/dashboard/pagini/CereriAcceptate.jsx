import React from "react";

const CereriAcceptate = ({ evAcceptate }) => {
  return (
    <div>
      {evAcceptate.map((eveniment) => {
        return (
          <div key={eveniment._id}>
            <h3>{eveniment?.data}</h3>

            <h4>nr Contact {eveniment.nrTelefon}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default CereriAcceptate;
