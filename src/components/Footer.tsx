"use client";

import { IconBrandInstagram, IconBrandWhatsapp } from "@tabler/icons-react";
import { ActionIcon, Container, Group, Text } from "@mantine/core";
import classes from "./Footer.module.css";
import Image from "next/image";

const data = [
  {
    title: "Hakkımızda",
    links: [
      { label: "Biz kimiz", link: "#" },
      { label: "İletişim", link: "#" },
      { label: "Yorumlar", link: "#" },
    ],
  },
  {
    title: "Hizmetlerimiz",
    links: [
      { label: "Modellerimiz", link: "#" },
      { label: "Kataloğumuz", link: "#" },
      { label: "Çalışmalarımız", link: "#" },
    ],
  },
];

export function Footer() {
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<"a">
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          <Group align="center" wrap="nowrap" gap="0">
            <Image
              src={"/logo-arkaplansız.png"}
              className={classes.dark}
              alt="Logo"
              width={50}
              height={50}
              priority
            />
             <Image
              src={"/logo-beyaz-arkaplansız.png"}
              className={classes.light}
              alt="Logo"
              width={50}
              height={50}
              priority
            />
            <Text className={classes.title}>COŞKUN MERMERİT</Text>
          </Group>
          <Text size="xs" c="dimmed" className={classes.description}>
            Hazır Mutfak Döküm Tipi Mutfak Tezgahları
          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text c="dimmed" size="sm">
          © {new Date().getFullYear()} Coşkun Mermerit. Tüm hakları saklıdır.
        </Text>

        <Group
          gap={0}
          className={classes.social}
          justify="flex-end"
          wrap="nowrap"
        >
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandWhatsapp size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandInstagram size={18} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}
