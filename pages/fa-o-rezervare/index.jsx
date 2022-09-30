import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import DateRangePickerComp from "../../components/date-range";
import { getError } from "../../utils/error";

const PaginaRezervare = () => {
  const [bautura, setVreauBautura] = useState(false);
  const [mancare, setVreauMancare] = useState(false);
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();
  const submitHandler = async () => {
    let nrValue = nrTelefon.value;
    let dataInceput = dePe.value;
    let dataFinal = panaPe.value;

    try {
      await axios.post("/api/rezervari/fa-o-rezervare", {
        nrValue,
        dataInceput,
        dataFinal,
        bautura,
        mancare,
      });
      toast.success("Rezervare Facuta!");
      reset();
    } catch (err) {
      toast.error(getError(err));
    }
  };
  const handleChange = () => {
    setVreauBautura(!bautura);
  };
  const handleChangeMancare = () => {
    setVreauMancare(!mancare);
  };

  return (
    <div>
      <h1>Fa o rezervare</h1>
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit(submitHandler)}
      >
        {" "}
        <div className="mb-4">
          <DateRangePickerComp register={register} />
        </div>
        <div className="mb-4">Pretul de inchiriere incepe de la 1000Lei</div>
        <div className="mb-4">
          <input {...register("nrTelefon")} type="tel" id="nrTelefon" />
          <label htmlFor="nrTelefon">Nr Contact</label>
        </div>
        <div className="container flex flex-col  border-2 " id="extra">
          <div className="border-2">
            {" "}
            <h1>Extra</h1>
          </div>
          <div className="p-6">
            <div className="flex flex-row-reverse justify-between relative mb-5">
              {bautura === true ? (
                <span className="absolute  -top-4 right-0">+200Lei</span>
              ) : (
                ""
              )}
              <input
                {...register("bautura")}
                id="bautura"
                type="checkbox"
                onChange={handleChange}
                defaultValue={bautura}
              />
              <label htmlFor="bautura">Vrei bautura inclusa? </label>
            </div>

            <div className="flex flex-row-reverse justify-between relative content-center items-center">
              {mancare === true ? (
                <span className="absolute  -top-4 right-0">+400Lei</span>
              ) : (
                ""
              )}
              <input
                {...register("mancare")}
                id="mancare"
                type="checkbox"
                onChange={handleChangeMancare}
                defaultValue={mancare}
              />
              <label htmlFor="bautura">Vrei mancare inclusa? </label>
            </div>
          </div>
        </div>
        <div className="mb-4">
          Pret Total :{" "}
          {1000 + (bautura === true ? 200 : 0) + (mancare === true ? 400 : 0)}
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default PaginaRezervare;
