"use client";

import { BlurIn } from "@/components/BlurInText";
import Iphone15Pro from "@/components/magicui/iphone-15-pro";
import { Button } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import Background from "./Background";
import { useQuery } from "@tanstack/react-query";
import { fetchVideoService } from "@/services/video/endpoint";

export default function Iphone15() {
  const { data } = useQuery({
    queryKey: ["video"],
    queryFn: fetchVideoService,
  });
  
  return (
    <div className="relative flex pt-12 pb-24 items-center justify-center gap-6 flex-col md:flex-row">
      <div className="absolute inset-0 z-0">
        <Background />
      </div>

      <div className="relative h-[700px] md:w-[25%]">
        <Iphone15Pro
          className="size-full"
          videoSrc={data?.videoUrl}
        />
      </div>

      <div className="md:w-[25%] mt-44 mb-20 md:mt-0 md:mb-0 flex flex-col items-center text-center gap-12">
        <BlurIn>
          Zarafetin Yeni Adı:
          <br /> Hazır Mutfak Döküm Tipi Mutfak Tezgahları
        </BlurIn>
        <Button radius="md" rightSection={<IconArrowRight />}>
          Çalışmalarımız
        </Button>
      </div>
    </div>
  );
}
