import mongoose from "mongoose";

export const eventSchema = new mongoose.Schema(
  {
    nrTelefon: { type: String, required: true },
    data: {
      dePe: { type: String, required: true },
      panaPe: { type: String, required: true },
    },
    extra: {
      bautura: {
        acceptata: { type: Boolean, required: true, default: false },
        pret: { type: Number, required: false, default: 200 },
      },
      mancare: {
        acceptata: { type: Boolean, required: true, default: false },
        pret: { type: Number, required: false, default: 400 },
      },
    },
    pretLocatie: { type: Number, required: false, default: 1000 },
    pretTotal: {
      type: Number,
      required: false,
      default: 1000,
    },

    acceptata: { type: Boolean, required: false, default: false },
  },
  {
    timestamps: true,
  },
);

export const Event =
  mongoose.models.Event || mongoose.model("Event", eventSchema);
