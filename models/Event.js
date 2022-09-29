import mongoose from "mongoose";

export const eventSchema = new mongoose.Schema(
  {
    nrTelefon: { type: String, required: true },
    data: { type: String, required: true, unique: true },
    extra: {
      bautura: { type: Boolean, required: true, default: false, pret: 200 },
      mancare: { type: Boolean, required: true, default: false, pret: 100 },
    },
    pretTotal: { type: Boolean, required: false, default: false },

    acceptata: { type: Boolean, required: false, default: false },
  },
  {
    timestamps: true,
  },
);

export const Event =
  mongoose.models.Event || mongoose.model("Event", eventSchema);
