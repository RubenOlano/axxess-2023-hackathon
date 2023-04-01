import { TRPCError } from "@trpc/server";
import { updatePatientSchema } from "./../schema/patient.schema";

import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";
import { Configuration, OpenAIApi } from "openai";
import { env } from "~/env.mjs";

export const clientDataRouter = createTRPCRouter({
  updatePatient: protectedProcedure
    .input(updatePatientSchema)
    .mutation(async ({ ctx, input }) => {
      const userId = ctx.session.user.id;
      try {
        const patient = await ctx.prisma.patientData.findUniqueOrThrow({
          where: { id: input.id },
        });

        if (patient.id !== userId)
          throw new TRPCError({
            code: "UNAUTHORIZED",
            message: "Unauthorized",
          });

        const config = new Configuration({ apiKey: env.OPENAI_API_KEY });

        const openai = new OpenAIApi(config);

        const completion = await openai.createCompletion({
          model: "text-davinci-3",
          prompt:
            "Translate the following into English: \n\n" + input.medicalHistory,
        });

        const data = completion.data.choices;

        if (data.length === 0 || !data[0]?.text)
          throw new TRPCError({ code: "INTERNAL_SERVER_ERROR" });

        const text = data[0].text;

        const updatedPatient = await ctx.prisma.patientData.update({
          where: { id: input.id },
          data: {
            ...input,
            translatedDocument: text,
          },
        });

        return updatedPatient;
      } catch (error) {}
    }),
});
