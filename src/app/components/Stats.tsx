import { NumberTicker } from "@/components/magicui/number-ticker";
import React from "react";
import { HeartHandshake, Smile, Briefcase, Palette } from "lucide-react";

export default function Stats() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-24 md:py-16 lg:px-8 lg:py-20">
      <div className="row-gap-8 grid grid-cols-2 md:grid-cols-4">
        <div className="mb-12 text-center md:mb-0 md:border-r-2">
          <Palette className="mx-auto mb-3 h-12 w-12 text-emerald-600 transition-transform duration-300 hover:scale-125" />
          <div className="text-[2rem] font-bold lg:text-4xl xl:text-5xl">
            <NumberTicker value={17} />+
          </div>
          <p className="text-md font-semibold tracking-widest lg:text-base">
            RENK SEÇENEĞİ
          </p>
        </div>

        <div className="mb-12 text-center md:mb-0 md:border-r-2">
          <Briefcase className="mx-auto mb-3 h-12 w-12 text-sky-700 transition-transform duration-300 hover:scale-125" />
          <div className="text-[2rem] font-bold lg:text-4xl xl:text-5xl">
            <NumberTicker value={20} />+
          </div>
          <p className="text-md font-semibold tracking-widest lg:text-base">
            YIL TECRÜBE
          </p>
        </div>

        <div className="text-center md:mb-0 md:border-r-2">
          <HeartHandshake className="mx-auto mb-3 h-12 w-12 text-red-600 transition-transform duration-300 hover:scale-125" />
          <div className="text-[2rem] font-bold lg:text-4xl xl:text-5xl">
            <NumberTicker value={250} />+
          </div>
          <p className="text-md font-semibold tracking-widest lg:text-base">
            FİRMA İLE İŞBİRLİĞİ
          </p>
        </div>

        <div className="text-center md:mb-0">
          <Smile className="mx-auto mb-3 h-12 w-12 text-yellow-400 transition-transform duration-300 hover:scale-125" />
          <div className="text-[2rem] font-bold lg:text-4xl xl:text-5xl">
            %<NumberTicker value={100} />
          </div>
          <p className="text-md font-semibold tracking-widest lg:text-base">
            MEMNUNİYET
          </p>
        </div>
      </div>
    </div>
  );
}
