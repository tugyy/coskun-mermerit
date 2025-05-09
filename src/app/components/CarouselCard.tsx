import { Carousel } from "@mantine/carousel";
import { Button, Card, Group, Image, Text } from "@mantine/core";
import classes from "./CarouselCard.module.css";
import "@mantine/carousel/styles.css";
import { RefObject } from "react";

export function CarouselCard({
  heading,
  isLoading,
  images,
  textRef,
  title,
  description,
}: {
  heading?: string;
  isLoading: boolean;
  images: string[];
  textRef?: RefObject<HTMLDivElement | null>;
  title: string;
  description: string;
}) {
  const slides = (
    images.map((image) => (
      <Carousel.Slide key={image} className="h-96">
        <Image
          src={image}
          width={600}
          height={600}
          className="w-full h-full object-cover"
          alt="Carousel slide image"
        />
      </Carousel.Slide>
    ))
  )

  const placeholderImage = (
    <Image
      src="/logo.webp"
      width={600}
      height={600}
      alt="Placeholder image"
    />
  )

  return (
    <div>
      <Text
        fw={700}
        fz="h2"
        ref={textRef}
        style={{ textAlign: "left", marginLeft: "10px" }}
      >
        {heading}
      </Text>

      <Card radius="md" withBorder mx="xs" maw={375} shadow="md">
        <Card.Section>
          <Carousel
            withIndicators
            loop
            classNames={{
              root: classes.carousel,
              controls: classes.carouselControls,
              indicator: classes.carouselIndicator,
            }}
          >
            {slides}
            {isLoading ? placeholderImage : null}
          </Carousel>
        </Card.Section>

        <Group justify="space-between" mt="lg">
          <Text fw={500} fz="lg">
            {title}
          </Text>
        </Group>

        <Text fz="sm" c="dimmed" mt="sm" className="h-20">
          {description}
        </Text>

        <Group justify="space-between">
          <div />

          <Button radius="md">Daha fazla bilgi</Button>
        </Group>
      </Card>
    </div>
  );
}
