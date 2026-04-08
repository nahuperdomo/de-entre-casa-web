"use client";

import { useState } from "react";
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

export default function Calendar() {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const blockedSet = new Set(BLOCKED_DATES);

  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDay = getFirstDayOfMonth(currentYear, currentMonth);

  const todayStr = formatDate(
    today.getFullYear(),
    today.getMonth(),
    today.getDate()
  );

  function prevMonth() {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
    setSelectedDate(null);
  }

  function nextMonth() {
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
        `Hola! Quiero consultar disponibilidad para el ${selectedDate}`
      )}`
    : null;

  // Generar celdas del calendario
  const cells: (number | null)[] = [];
  for (let i = 0; i < firstDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  return (
    <div className="max-w-md mx-auto">
      {/* Header con navegación de meses */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={prevMonth}
          className="p-2 rounded-full hover:bg-tierra/10 transition-colors text-tierra"
          aria-label="Mes anterior"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h3 className="font-playfair text-xl text-tierra">
          {MONTH_NAMES[currentMonth]} {currentYear}
        </h3>
        <button
          onClick={nextMonth}
          className="p-2 rounded-full hover:bg-tierra/10 transition-colors text-tierra"
          aria-label="Mes siguiente"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Días de la semana */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {DAY_NAMES.map((day) => (
          <div
            key={day}
            className="text-center font-jost text-xs font-medium text-tierra/50 py-1"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Celdas del calendario */}
      <div className="grid grid-cols-7 gap-1">
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
                aspect-square rounded-lg flex items-center justify-center
                font-jost text-sm transition-all duration-200
                ${past ? "text-tierra/20 cursor-default" : ""}
                ${blocked ? "bg-red-100 text-red-400 cursor-not-allowed line-through" : ""}
                ${available && !isSelected ? "text-tierra hover:bg-campo/10 cursor-pointer" : ""}
                ${isSelected ? "bg-campo text-white shadow-md scale-105" : ""}
                ${isToday && !isSelected ? "ring-2 ring-bronce ring-offset-1" : ""}
              `}
            >
              {day}
            </button>
          );
        })}
      </div>

      {/* Leyenda */}
      <div className="flex flex-wrap gap-4 mt-6 justify-center text-xs font-jost text-tierra/60">
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded bg-campo/10 border border-campo/20" />
          Disponible
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded bg-red-100 border border-red-200" />
          Reservado
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded ring-2 ring-bronce" />
          Hoy
        </div>
      </div>

      {/* Botón de consulta por WhatsApp */}
      {selectedDate && (
        <div className="mt-6 text-center animate-fade-in">
          <p className="font-jost text-sm text-tierra/70 mb-3">
            Fecha seleccionada: <strong className="text-tierra">{selectedDate}</strong>
          </p>
          <a
            href={whatsappForDate!}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-white font-jost font-medium text-sm hover:bg-[#20BA5C] transition-colors shadow-md"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Consultar esta fecha por WhatsApp
          </a>
        </div>
      )}
    </div>
  );
}
