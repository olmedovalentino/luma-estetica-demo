"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

import { ButtonLink } from "@/components/button-link";
import { bookingServices, bookingTimeOptions, createWhatsAppUrl, services, site } from "@/lib/site";

type BookingFormState = {
  service: string;
  date: string;
  time: string;
  name: string;
  phone: string;
  comment: string;
};

const initialFormState: BookingFormState = {
  service: "",
  date: "",
  time: "",
  name: "",
  phone: "",
  comment: "",
};

function getTodayDate() {
  const now = new Date();
  const offset = now.getTimezoneOffset();
  const localDate = new Date(now.getTime() - offset * 60_000);
  return localDate.toISOString().split("T")[0];
}

function buildBookingMessage(form: BookingFormState) {
  const lines = [
    "Hola! Quiero solicitar un turno en Urani Studio.",
    `Servicio: ${form.service || "-"}`,
    `Fecha: ${form.date || "-"}`,
    `Horario: ${form.time || "-"}`,
    `Nombre: ${form.name || "-"}`,
    `Teléfono: ${form.phone || "-"}`,
  ];

  if (form.comment.trim()) {
    lines.push(`Comentario: ${form.comment.trim()}`);
  }

  return lines.join("\n");
}

export function BookingRequestSection() {
  const [form, setForm] = useState<BookingFormState>(initialFormState);

  const selectedService = services.find((service) => service.title === form.service);
  const minDate = useMemo(() => getTodayDate(), []);
  const whatsappHref = useMemo(() => createWhatsAppUrl(buildBookingMessage(form)), [form]);

  const isComplete =
    Boolean(form.service) &&
    Boolean(form.date) &&
    Boolean(form.time) &&
    Boolean(form.name.trim()) &&
    Boolean(form.phone.trim());

  function updateField<K extends keyof BookingFormState>(field: K, value: BookingFormState[K]) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  const selectedServiceImageClassName =
    selectedService?.title === "Soft Gel"
      ? "object-cover [object-position:center_35%]"
      : selectedService?.imagePosition ?? "object-cover object-center";

  return (
    <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
      <div className="rounded-[2rem] border border-white/80 bg-[#FFFDFC] p-6 shadow-soft sm:p-7">
        <div className="grid gap-6">
          <div>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#9E7277]">
              {site.bookingEyebrow}
            </p>
            <h2 className="mt-3 font-serif text-2xl font-semibold tracking-tight text-[#2F2624] sm:text-3xl">
              {site.bookingTitle}
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-[#5B4B47] sm:text-base">
              {site.bookingDescription}
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-[#2F2624]">1. Elegí el servicio</p>
            <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {bookingServices.map((option) => {
                const isSelected = form.service === option;
                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => updateField("service", option)}
                    className={`rounded-[1.2rem] border px-4 py-3 text-left text-sm font-medium transition ${
                      isSelected
                        ? "border-[#C98E95] bg-[#F7E5E7] text-[#2F2624] shadow-soft"
                        : "border-[#E9D6CE] bg-white text-[#6C5852] hover:border-[#D8B6A4] hover:bg-[#FCF4F1]"
                    }`}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-[#2F2624]">2. Elegí una fecha</p>
            <label className="mt-3 block">
              <span className="mb-2 block text-sm text-[#6C5852]">Día tentativo</span>
              <input
                type="date"
                min={minDate}
                value={form.date}
                onChange={(event) => updateField("date", event.target.value)}
                className="w-full rounded-[1rem] border border-[#E9D6CE] bg-white px-4 py-3 text-sm text-[#2F2624] outline-none transition focus:border-[#C98E95] focus:ring-2 focus:ring-[#F2D5D9]"
              />
            </label>
          </div>

          <div>
            <p className="text-sm font-semibold text-[#2F2624]">3. Elegí un horario</p>
            <div className="mt-3 flex flex-wrap gap-2.5">
              {bookingTimeOptions.map((option) => {
                const isSelected = form.time === option;
                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => updateField("time", option)}
                    className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                      isSelected
                        ? "border-[#C98E95] bg-[#F7E5E7] text-[#2F2624]"
                        : "border-[#E9D6CE] bg-white text-[#6C5852] hover:border-[#D8B6A4] hover:bg-[#FCF4F1]"
                    }`}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-[#2F2624]">4. Completá tus datos</p>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm text-[#6C5852]">Nombre</span>
                <input
                  value={form.name}
                  onChange={(event) => updateField("name", event.target.value)}
                  placeholder="Tu nombre"
                  className="w-full rounded-[1rem] border border-[#E9D6CE] bg-white px-4 py-3 text-sm text-[#2F2624] outline-none transition placeholder:text-[#A08B86] focus:border-[#C98E95] focus:ring-2 focus:ring-[#F2D5D9]"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm text-[#6C5852]">Teléfono</span>
                <input
                  value={form.phone}
                  onChange={(event) => updateField("phone", event.target.value)}
                  placeholder="351..."
                  className="w-full rounded-[1rem] border border-[#E9D6CE] bg-white px-4 py-3 text-sm text-[#2F2624] outline-none transition placeholder:text-[#A08B86] focus:border-[#C98E95] focus:ring-2 focus:ring-[#F2D5D9]"
                />
              </label>
            </div>

            <label className="mt-3 block">
              <span className="mb-2 block text-sm text-[#6C5852]">Comentario opcional</span>
              <textarea
                value={form.comment}
                onChange={(event) => updateField("comment", event.target.value)}
                placeholder="Contanos si querés sumar un detalle o consulta."
                rows={4}
                className="w-full resize-none rounded-[1rem] border border-[#E9D6CE] bg-white px-4 py-3 text-sm text-[#2F2624] outline-none transition placeholder:text-[#A08B86] focus:border-[#C98E95] focus:ring-2 focus:ring-[#F2D5D9]"
              />
            </label>
          </div>
        </div>
      </div>

      <div className="rounded-[2rem] border border-white/80 bg-[#FDF6F3] p-6 shadow-soft sm:p-7">
        <div className="overflow-hidden rounded-[1.4rem] border border-white/80 bg-white/80">
          <div className="relative h-[250px]">
            <Image
              src={selectedService?.image ?? "/images/urani/hero.jpg"}
              alt={selectedService?.alt ?? "Detalle de Urani Studio"}
              fill
              sizes="(min-width: 1024px) 32vw, 100vw"
              className={selectedServiceImageClassName}
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(47,38,36,0.02),rgba(47,38,36,0.34))]" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <p className="text-xs uppercase tracking-[0.24em] text-white/80">
                Consulta de disponibilidad
              </p>
              <p className="mt-2 text-lg font-semibold">
                {selectedService?.title ?? "Elegí un servicio para ver el resumen"}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-5 rounded-[1.4rem] border border-[#E9D6CE] bg-white/85 p-5">
          <p className="text-sm font-semibold text-[#2F2624]">5. Resumen de tu solicitud</p>
          <div className="mt-4 grid gap-3">
            <div className="rounded-[1rem] bg-[#FCF4F1] px-4 py-3">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-[#9E7277]">
                Servicio
              </p>
              <p className="mt-1 text-sm text-[#2F2624]">
                {form.service || "Seleccioná una opción"}
              </p>
            </div>
            <div className="rounded-[1rem] bg-[#FCF4F1] px-4 py-3">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-[#9E7277]">
                Fecha
              </p>
              <p className="mt-1 text-sm text-[#2F2624]">
                {form.date || "Elegí una fecha específica"}
              </p>
            </div>
            <div className="rounded-[1rem] bg-[#FCF4F1] px-4 py-3">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-[#9E7277]">
                Horario
              </p>
              <p className="mt-1 text-sm text-[#2F2624]">
                {form.time || "Elegí un horario específico"}
              </p>
            </div>
          </div>

          <p className="mt-5 text-sm leading-6 text-[#5B4B47]">{site.bookingNote}</p>

          <div className="mt-5">
            <ButtonLink
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-disabled={!isComplete}
              className={`w-full ${!isComplete ? "pointer-events-none opacity-60" : ""}`}
            >
              Enviar solicitud por WhatsApp
            </ButtonLink>
          </div>

          <p className="mt-3 text-xs leading-5 text-[#7A6661]">
            Completá servicio, fecha, horario, nombre y teléfono. Te respondemos para confirmar.
          </p>
        </div>
      </div>
    </div>
  );
}
