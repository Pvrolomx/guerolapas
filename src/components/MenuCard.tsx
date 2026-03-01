"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import type { MenuItem } from "@/data/menu";

interface Props {
  item: MenuItem;
  locale: string;
  index: number;
}

export default function MenuCard({ item, locale, index }: Props) {
  const name = locale === "en" ? item.name.en : item.name.es;
  const desc = locale === "en" ? item.description.en : item.description.es;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
      className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden flex flex-col"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={item.image}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {item.popular && (
          <span className="absolute top-3 right-3 bg-gold text-navy text-xs font-inter font-semibold px-2 py-1 rounded-full">
            ★ Popular
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-playfair text-xl font-semibold text-white">{name}</h3>
        <p className="mt-2 font-inter text-sm italic text-white/60 line-clamp-2">{desc}</p>
        <p className="mt-auto pt-4 font-inter text-xl font-semibold text-gold">${item.price}</p>
      </div>
    </motion.article>
  );
}
