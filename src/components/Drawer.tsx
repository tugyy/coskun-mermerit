"use client";

import {
  IconBook,
  IconChartPie3,
  IconChevronDown,
  IconCode,
  IconCoin,
  IconFingerprint,
  IconMoonStars,
  IconNotification,
  IconSun,
} from "@tabler/icons-react";
import {
  ActionIcon,
  Box,
  Center,
  Collapse,
  Divider,
  Drawer as MantineDrawer,
  Group,
  ScrollArea,
  Stack,
  Text,
  ThemeIcon,
  UnstyledButton,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./Header.module.css";
import Image from "next/image";

const mockdata = [
  {
    icon: IconCode,
    title: "Open source",
    description: "This Pokémon’s cry is very loud and distracting",
  },
  {
    icon: IconCoin,
    title: "Free for everyone",
    description: "The fluid of Smeargle’s tail secretions changes",
  },
  {
    icon: IconBook,
    title: "Documentation",
    description: "Yanma is capable of seeing 360 degrees without",
  },
  {
    icon: IconFingerprint,
    title: "Security",
    description: "The shell’s rounded shape and the grooves on its.",
  },
  {
    icon: IconChartPie3,
    title: "Analytics",
    description: "This Pokémon uses its flying ability to quickly chase",
  },
  {
    icon: IconNotification,
    title: "Notifications",
    description: "Combusken battles with the intensely hot flames it spews",
  },
];

export function Drawer() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const theme = useMantineTheme();

  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  const links = mockdata.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.title}>
      <Group wrap="nowrap" align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
          <item.icon size={22} color={theme.colors.blue[6]} />
        </ThemeIcon>
        <div>
          <Text size="sm" fw={500}>
            {item.title}
          </Text>
          <Text size="xs" c="dimmed">
            {item.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ));

  return (
    <Box hiddenFrom="sm">
      <header className={classes.header}>
          <Group justify="space-between" h="100%">
            <Group gap={0} style={{ display: drawerOpened ? "none" : "" }}>
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
              <Stack gap={0}>
                <Text className={classes.title}>COŞKUN</Text>
                <Text className={classes.title}>MERMERİT</Text>
              </Stack>
            </Group>

            <ActionIcon
              variant="outline"
              color={"primary"}
              onClick={toggleDrawer}
              title="Toggle color scheme"
              hiddenFrom="sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                style={{ transform: "scaleX(-1)" }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </ActionIcon>
          </Group>
      </header>

      <MantineDrawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="75%"
        padding="md"
        position="right"
        title={
          <Group gap={0}>
            <Image
              src={
                dark ? "/logo-beyaz-arkaplansız.png" : "/logo-arkaplansız.png"
              }
              alt="Logo"
              width={50}
              height={50}
              priority
            />
            <Stack gap={0}>
              <Text className={classes.title}>COŞKUN</Text>
              <Text className={classes.title}>MERMERİT</Text>
            </Stack>
          </Group>
        }
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h="calc(100vh - 80px" mx="-md">
          <Divider my="sm" />

          <a href="#" className={classes.link}>
            Home
          </a>
          <UnstyledButton className={classes.link} onClick={toggleLinks}>
            <Center inline>
              <Box component="span" mr={5}>
                Features
              </Box>
              <IconChevronDown size={16} color={theme.colors.blue[6]} />
            </Center>
          </UnstyledButton>
          <Collapse in={linksOpened}>{links}</Collapse>
          <a href="#" className={classes.link}>
            Learn
          </a>
          <a href="#" className={classes.link}>
            Academy
          </a>

          <Divider my="sm" />

          <Group justify="center" grow pb="xl" px="md">
            <ActionIcon
              variant="outline"
              color={dark ? "yellow" : "blue"}
              onClick={toggleColorScheme}
              title="Toggle color scheme"
            >
              {dark ? (
                <IconSun size="1.1rem" />
              ) : (
                <IconMoonStars size="1.1rem" />
              )}
            </ActionIcon>
          </Group>
        </ScrollArea>
      </MantineDrawer>
    </Box>
  );
}
