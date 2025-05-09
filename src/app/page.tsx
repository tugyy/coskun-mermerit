"use client";

import { CarouselCard } from "./components/CarouselCard";
import { MarqueeDemo } from "./components/Comments";
import Hero from "./components/Hero";
import { Flex } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import Stats from "./components/Stats";
import { useLayoutEffect, useRef } from "react";
import Iphone15 from "./components/IphoneSection/Iphone15";
import { useQuery } from "@tanstack/react-query";
import { fetchModelPhotosService } from "@/services/models/endpoints";
import LoadingOverlay from "@/components/Loading";

export default function Home() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const { data, isLoading } = useQuery({
    queryKey: ["modelPhotos"],
    queryFn: fetchModelPhotosService,
  });

  const text1Ref = useRef<HTMLDivElement>(null);
  const text2Ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (text1Ref.current && text2Ref.current) {
      // İlk Text'in x pozisyonunu al
      const text1Position = text1Ref.current.getBoundingClientRect().left;

      // İkinci Text'i aynı x pozisyonuna ayarla
      text2Ref.current.style.position = "relative";
      text2Ref.current.style.left = `${text1Position}px`;
    }
  }, []);

  return (
    <>
      <LoadingOverlay visible={isLoading} />
      <Hero />
      <Flex
        wrap="wrap"
        gap="xl"
        my={32}
        justify="center"
        align={isMobile ? "center" : "flex-end"}
        direction={isMobile ? "column" : "row"}
      >
        <CarouselCard
          heading="Modellerimiz"
          images={data?.["tezgah-arası-pano"]?.slice(0, 5) || []}
          isLoading={isLoading}
          textRef={text1Ref}
          title="Tezgah Arası Pano"
          description="Tezgah arası panolar, mutfaklarda tezgah ile dolap arasındaki duvar alanını kaplayan dekoratif ve işlevsel panolardır."
        />
        <CarouselCard
          images={data?.akrino?.slice(0, 5) || []}
          isLoading={isLoading}
          title="Akrino (Süt Beyaz)"
          description="Akrino, şıklığı ve fonksiyonelliği bir araya getiren özel bir mermerit çeşididir. Genellikle mutfak ve banyo tezgahlarında kullanılır."
        />
        <CarouselCard
          images={data?.["banyo-hilton"]?.slice(0, 5) || []}
          isLoading={isLoading}
          title="Banyo Hilton Tezgahı"
          description="Banyo Hilton tezgahları, banyo alanlarına zarif bir dokunuş katan özel mermerit tezgah modelleridir."
        />
      </Flex>

      <Stats />

      <Iphone15 />

      <MarqueeDemo textRef={text2Ref} />
    </>
  );
}
