"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { contactSchema, type ContactFormData } from "@/lib/types";
import Button from "@/components/ui/Button";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-campo/10 flex items-center justify-center">
          <svg className="w-8 h-8 text-campo" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-playfair text-2xl text-tierra mb-2">¡Mensaje enviado!</h3>
        <p className="font-jost font-light text-tierra/70">
          Te respondemos a la brevedad. ¡Gracias por elegirnos!
        </p>
      </motion.div>
    );
  }

  const inputClasses =
    "w-full px-4 py-3 rounded-xl border border-lino/30 bg-white font-jost text-sm text-tierra placeholder:text-tierra/40 focus:outline-none focus:ring-2 focus:ring-campo/30 focus:border-campo transition-all";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <input
            {...register("nombre")}
            placeholder="Tu nombre"
            className={inputClasses}
          />
          {errors.nombre && (
            <p className="text-red-500 text-xs mt-1 font-jost">{errors.nombre.message}</p>
          )}
        </div>
        <div>
          <input
            {...register("telefono")}
            placeholder="Teléfono / WhatsApp"
            className={inputClasses}
          />
          {errors.telefono && (
            <p className="text-red-500 text-xs mt-1 font-jost">{errors.telefono.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <select {...register("tipoEvento")} className={inputClasses} defaultValue="">
            <option value="" disabled>
              Tipo de evento
            </option>
            <option value="boda">Boda</option>
            <option value="cumpleanos">Cumpleaños</option>
            <option value="corporativo">Evento corporativo</option>
            <option value="quinceanero">Quinceañero</option>
            <option value="otro">Otro</option>
          </select>
          {errors.tipoEvento && (
            <p className="text-red-500 text-xs mt-1 font-jost">{errors.tipoEvento.message}</p>
          )}
        </div>
        <div>
          <input
            {...register("cantidadInvitados")}
            placeholder="Cantidad de invitados"
            className={inputClasses}
          />
          {errors.cantidadInvitados && (
            <p className="text-red-500 text-xs mt-1 font-jost">
              {errors.cantidadInvitados.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <input
          type="date"
          {...register("fecha")}
          className={inputClasses}
        />
        {errors.fecha && (
          <p className="text-red-500 text-xs mt-1 font-jost">{errors.fecha.message}</p>
        )}
      </div>

      <div>
        <textarea
          {...register("mensaje")}
          placeholder="Contanos más sobre tu evento (opcional)"
          rows={4}
          className={`${inputClasses} resize-none`}
        />
      </div>

      {status === "error" && (
        <p className="text-red-500 text-sm font-jost">
          Hubo un error al enviar. Intentá de nuevo o contactanos por WhatsApp.
        </p>
      )}

      <Button type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Enviando..." : "Enviar consulta"}
      </Button>
    </form>
  );
}
