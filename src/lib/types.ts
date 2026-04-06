import { z } from "zod";

export const contactSchema = z.object({
  nombre: z.string().min(2, "El nombre es obligatorio"),
  telefono: z.string().min(6, "Ingresá un teléfono válido"),
  tipoEvento: z.string().min(1, "Seleccioná un tipo de evento"),
  cantidadInvitados: z.string().min(1, "Indicá la cantidad de invitados"),
  fecha: z.string().min(1, "Seleccioná una fecha tentativa"),
  mensaje: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;
