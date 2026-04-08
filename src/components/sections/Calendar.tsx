"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BLOCKED_DATES, CONTACT } from "@/lib/constants";

const MONTH_NAMES = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre",
];

const DAY_NAMES = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}

function formatDate(year: number, month: number, day: number) {
  const m = String(month + 1).padStart(2, "0");
  const d = String(day).padStart(2, "0");
  return `${year}-${m}-${d}`;
}

function formatDisplayDate(dateStr: string) {
  const [year, month, day] = dateStr.split("-");
  const monthName = MONTH_NAMES[parseInt(month) - 1];
  return `${parseInt(day)} de ${monthName} de ${year}`;
}

export default function Calendar() {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [direction, setDirection] = useState(0);

  const blockedSet = new Set(BLOCKED_DATES);

  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDay = getFirstDayOfMonth(currentYear, currentMonth);

  const todayStr = formatDate(
    today.getFullYear(),
    today.getMonth(),
    today.getDate()
  );

  function prevMonth() {
    setDirection(-1);
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
    setSelectedDate(null);
  }

  function nextMonth() {
    setDirection(1);
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
    setSelectedDate(null);
  }

  const isPast = (dateStr: string) => dateStr < todayStr;
  const isBlocked = (dateStr: string) => blockedSet.has(dateStr);

  function handleDateClick(dateStr: string) {
    if (isPast(dateStr) || isBlocked(dateStr)) return;
    setSelectedDate(dateStr === selectedDate ? null : dateStr);
  }

  const whatsappForDate = selectedDate
    ? `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(
        `Hola! Quiero consultar disponibilidad para el ${formatDisplayDate(selectedDate)}`
      )}`
    : null;

  const cells: (number | null)[] = [];
  for (let i = 0; i < firstDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  return (
    <div className="max-w-md mx-auto">
      {/* Header con navegación */}
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={prevMonth}
          className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-tierra/10 transition-all duration-300 text-tierra group"
          aria-label="Mes anterior"
        >
          <svg className="w-5 h-5 transition-transform group-hover:-translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="text-center">
          <h3 className="font-playfair text-2xl text-tierra">
            {MONTH_NAMES[currentMonth]}
          </h3>
          <span className="font-jost text-xs text-tierra/40 tracking-widest">{currentYear}</span>
        </div>
        <button
          onClick={nextMonth}
          className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-tierra/10 transition-all duration-300 text-tierra group"
          aria-label="Mes siguiente"
        >
          <svg className="w-5 h-5 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Días de la semana */}
      <div className="grid grid-cols-7 gap-1.5 mb-3">
        {DAY_NAMES.map((day) => (
          <div
            key={day}
            className="text-center font-jost text-[11px] font-medium text-bronce/60 uppercase tracking-wider py-2"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Separador */}
      <div className="h-px bg-gradient-to-r from-transparent via-lino/30 to-transparent mb-3" />

      {/* Celdas del calendario */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`${currentYear}-${currentMonth}`}
          initial={{ opacity: 0, x: direction * 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction * -30 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="grid grid-cols-7 gap-1.5"
        >
          {cells.map((day, i) => {
            if (day === null) {
              return <div key={`empty-${i}`} className="aspect-square" />;
            }

            const dateStr = formatDate(currentYear, currentMonth, day);
            const past = isPast(dateStr);
            const blocked = isBlocked(dateStr);
            const isToday = dateStr === todayStr;
            const isSelected = dateStr === selectedDate;
            const available = !past && !blocked;

            return (
              <button
                key={dateStr}
                onClick={() => handleDateClick(dateStr)}
                disabled={past || blocked}
                className={`
                  aspect-square rounded-xl flex items-center justify-center
                  font-jost text-sm transition-all duration-300
                  ${past ? "text-tierra/15 cursor-default" : ""}
                  ${blocked ? "bg-red-50 text-red-300 cursor-not-allowed line-through decoration-red-300/50" : ""}
                  ${available && !isSelected ? "text-tierra hover:bg-campo/10 hover:text-campo cursor-pointer hover:shadow-sm" : ""}
                  ${isSelected ? "bg-campo text-white shadow-lg shadow-campo/25 scale-110 font-medium" : ""}
                  ${isToday && !isSelected ? "ring-2 ring-bronce/50 ring-offset-2 font-medium text-bronce" : ""}
                `}
              >
                {day}
              </button>
            );
          })}
        </motion.div>
      </AnimatePresence>

      {/* Leyenda */}
      <div className="flex flex-wrap gap-5 mt-8 justify-center text-[11px] font-jost text-tierra/50 uppercase tracking-wider">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-md bg-campo/10 border border-campo/20" />
          Disponible
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-md bg-red-50 border border-red-200" />
          Reservado
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-md ring-2 ring-bronce/50 ring-offset-1" />
          Hoy
        </div>
      </div>

      {/* Botón de consulta por WhatsApp */}
      <AnimatePresence>
        {selectedDate && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="mt-8 text-center"
          >
            <div className="h-px bg-gradient-to-r from-transparent via-lino/30 to-transparent mb-6" />
            <p className="font-jost text-sm text-tierra/60 mb-4">
              Fecha seleccionada
            </p>
            <p className="font-playfair text-lg text-tierra mb-5">
              {formatDisplayDate(selectedDate)}
            </p>
            <a
              href={whatsappForDate!}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#25D366] text-white font-jost font-medium text-sm hover:bg-[#20BA5C] transition-all duration-300 shadow-lg shadow-[#25D366]/20 hover:shadow-xl hover:shadow-[#25D366]/30 hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Consultar esta fecha por WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
