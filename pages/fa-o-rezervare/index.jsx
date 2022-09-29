import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import DateRangePickerComp from "../../components/date-range";
import { getError } from "../../utils/error";

const PaginaRezervare = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();
  const submitHandler = async () => {
    console.log(nrTelefon.value, data.value);
    let nrValue = nrTelefon.value;
    let dataValue = data.value;
    try {
      await axios.post("/api/rezervari/fa-o-rezervare", {
        nrValue,
        dataValue,
      });
      reset();
      if (result.error) {
        toast.error(result.error);
      }
    } catch (err) {
      toast.error(getError(err));
    }
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
        <div className="mb-4">
          <input {...register("nrTelefon")} type="tel" id="nrTelefon" />
          <label htmlFor="nrTelefon">Nr Contact</label>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default PaginaRezervare;
