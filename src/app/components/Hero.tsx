import { Button, Container, Overlay, Text } from "@mantine/core";
import classes from "./Hero.module.css";
import { TextAnimate } from "@/components/magicui/text-animate";
import { IconArrowRight } from "@tabler/icons-react";

export default function Hero() {
  return (
    <div className={classes.hero}>
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
        opacity={1}
        zIndex={0}
      />
      <Container className={classes.container} size="md">
        <TextAnimate
          className={classes.title}
          animation="blurInUp"
          by="character"
        >
          COŞKUN MERMERİT
        </TextAnimate>

        <Text className={classes.description} size="xl" mt="xl">
          Balıkesir&apos;in en kaliteli mermerit mutfak tezgahları, tezgah arası
          pano, akrino (süt beyaz), akrilik, banyo Hilton tezgahlarını sizler
          için üretiyoruz. Her türlü ihtiyacınıza uygun çözümler sunuyoruz.
        </Text>

        <Button
          variant="gradient"
          size="md"
          radius="md"
          className={classes.control}
          rightSection={<IconArrowRight />}
        >
          Hakkımızda
        </Button>
      </Container>

      <div className={classes.customShape}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className={classes.shapeFill}
          ></path>
        </svg>
      </div>
    </div>
  );
}
