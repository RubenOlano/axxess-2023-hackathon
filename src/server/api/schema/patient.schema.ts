import { z } from "zod";

export const updatePatientSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  phone: z.string(),
  medicalHistory: z.string(),
});
