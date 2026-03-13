"use client";

import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { BASE_PATH } from "@/lib/utils";
import { InView } from "@/components/ui/in-view";

const sliderImages = [
  { src: `${BASE_PATH}/images/clientes/satisfecho-1.jpeg`, alt: "Cliente satisfecho 1" },
  { src: `${BASE_PATH}/images/clientes/satisfecho-2.jpeg`, alt: "Cliente satisfecho 2" },
  { src: `${BASE_PATH}/images/clientes/satisfecho-3.jpeg`, alt: "Cliente satisfecho 3" },
  { src: `${BASE_PATH}/images/clientes/satisfecho-4.jpeg`, alt: "Cliente satisfecho 4" },
  { src: `${BASE_PATH}/images/clientes/satisfecho-5.jpeg`, alt: "Cliente satisfecho 5" },
  { src: `${BASE_PATH}/images/clientes/satisfecho-6.jpeg`, alt: "Cliente satisfecho 6" },
  { src: `${BASE_PATH}/images/clientes/satisfecho-7.jpeg`, alt: "Cliente satisfecho 7" },
  { src: `${BASE_PATH}/images/clientes/satisfecho-8.jpeg`, alt: "Cliente satisfecho 8" },
];

export default function ClientSlider() {
  return (
    <section className="relative py-10 md:py-16 overflow-hidden">
      <InView
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        transition={{ duration: 0.8 }}
      >
        <div className="mb-6 text-center">
          <p className="text-sm text-text-muted tracking-wide uppercase">
            Clientes que ya viajan con sus mascotas
          </p>
        </div>

        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-bg-primary to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-bg-primary to-transparent z-10 pointer-events-none" />

          <InfiniteSlider
            images={sliderImages}
            speed={25}
            gap={12}
            height={180}
          />
        </div>
      </InView>
    </section>
  );
}
