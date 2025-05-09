import {
  ActionIcon,
  useMantineColorScheme,
  useComputedColorScheme,
  useMantineTheme,
} from "@mantine/core";
import { IconSun, IconMoon } from "@tabler/icons-react";
import cx from "clsx";
import classes from "./ThemeSwitch.module.css";

export default function Demo() {
  const { setColorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  return (
    <ActionIcon
      onClick={() =>
        setColorScheme(computedColorScheme === "light" ? "dark" : "light")
      }
      variant="default"
      size="lg"
      aria-label="Toggle color scheme"
    >
      <IconSun
        className={cx(classes.icon, classes.light)}
        stroke={1.5}
      />
      <IconMoon
        className={cx(classes.icon, classes.dark)}
        color={theme.colors.blue[6]}
        stroke={1.5}
      />
    </ActionIcon>
  );
}
