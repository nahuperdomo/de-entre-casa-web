"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface PhotoCardProps {
  src: string;
  alt: string;
  aspect?: string;
  priority?: boolean;
  onClick?: () => void;
}

export default function PhotoCard({
  src,
  alt,
  aspect = "aspect-[4/3]",
  priority = false,
  onClick,
}: PhotoCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`relative ${aspect} overflow-hidden rounded-2xl group cursor-pointer`}
      onClick={onClick}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        priority={priority}
      />
      {onClick && (
        <div className="absolute inset-0 bg-tierra/0 group-hover:bg-tierra/40 transition-colors duration-300 flex items-center justify-center">
          <svg
            className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
            />
          </svg>
        </div>
      )}
    </motion.div>
  );
}
