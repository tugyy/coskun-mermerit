import { Marquee } from "@/components/magicui/marquee";
import { cn } from "@/lib/utils";
import classes from "./Comments.module.css";
import { Text } from "@mantine/core";
import { RefObject } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchCommentsService } from "@/services/comments/endpoint";

const ReviewCard = ({
  color,
  createdAt,
  author,
  text,
  rating,
}: {
  color: string;
  createdAt: string;
  author: string;
  text: string;
  rating: number | undefined; // rating artık undefined olabilir
}) => {
  // İsim ve soyadından sadece ilk iki kelimenin baş harflerini al
  const getInitials = (name: string) => {
    const nameParts = name.split(" ").slice(0, 2); // Sadece ilk iki kelimeyi al
    const initials = nameParts.map((part) => part.charAt(0).toUpperCase());
    return initials.join(""); // Baş harfleri birleştir
  };

  // Rating için yıldızları render etme fonksiyonu
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const emptyStars = 5 - fullStars;
    return (
      <>
        {[...Array(fullStars)].map((_, index) => (
          <span key={`full-${index}`} className="text-yellow-500">
            ★
          </span> // Dolu yıldız
        ))}
        {[...Array(emptyStars)].map((_, index) => (
          <span key={`empty-${index}`} className="text-gray-400">
            ★
          </span> // Boş yıldız
        ))}
      </>
    );
  };

  // Rating yoksa 5 göster
  const effectiveRating = rating !== undefined ? rating : 0;

  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        {/* Burada renkli daireyi ve baş harfleri gösteriyoruz */}
        <div
          style={{
            backgroundColor: color, // color prop'unu arka plan rengi olarak kullanıyoruz
            width: "30px", // Yuvarlağın genişliği
            height: "30px", // Yuvarlağın yüksekliği
            borderRadius: "50%", // Yuvarlak şekil
            display: "flex", // İçeriği ortalamak için flex kullanıyoruz
            alignItems: "center", // Dikeyde ortalama
            justifyContent: "center", // Yatayda ortalama
            color: "white", // Baş harflerinin rengini beyaz yapıyoruz
            fontWeight: "600", // Baş harflerini kalın yapmak için
            fontSize: "14px", // Baş harflerinin boyutu
          }}
        >
          {getInitials(author)} {/* İsim ve soyisim baş harflerini göster */}
        </div>
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium">{author}</figcaption>
          <p className="text-xs font-small">
            {new Date(createdAt).toLocaleString(undefined, {
              day: "numeric",
              month: "long",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{text}</blockquote>

      {/* Rating kısmını burada ekliyoruz */}
      {/* <div className="flex justify-end items-center gap-1 mb-2"> */}

      <div className="mt-2 flex justify-end items-center gap-1">
        {renderStars(effectiveRating)} {/* Yıldızları göster */}
        <span className="text-xs text-gray-600">
          ({effectiveRating.toFixed(1)})
        </span>{" "}
        {/* Rating sayısal değeri */}
      </div>
    </figure>
  );
};

export function MarqueeDemo({}: {
  textRef?: RefObject<HTMLDivElement | null>;
}) {
  const { data } = useQuery({
    queryKey: ["comments"],
    queryFn: fetchCommentsService,
  });

  const firstRow = data?.comments.slice(0, 6);
  const secondRow = data?.comments.slice(6, 12);

  return (
    <div className="w-full overflow-hidden">
      <Text
        fw={700}
        fz="h2"
        // mb="lg"
        // ref={textRef}
        style={{ textAlign: "center", padding: "1rem" }}
      >
        Yorumlar
      </Text>

      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        {firstRow && (
          <Marquee pauseOnHover className="[--duration:40s]">
            {firstRow.map((review) => (
              <ReviewCard key={review.createdAt} {...review} />
            ))}
          </Marquee>
        )}
        {secondRow && (
          <Marquee reverse pauseOnHover className="[--duration:40s]">
            {secondRow.map((review) => (
              <ReviewCard key={review.createdAt} {...review} />
            ))}
          </Marquee>
        )}
        <div
          className={`pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#242424] ${classes.light}`}
        ></div>
        <div
          className={`pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#242424] ${classes.light}`}
        ></div>

        <div
          className={`pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white ${classes.dark}`}
        ></div>
        <div
          className={`pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white  ${classes.dark}`}
        ></div>
      </div>
    </div>
  );
}
