import { ComponentPropsWithoutRef, forwardRef } from "react";
import { Flex, Input, Select, Text } from "@mantine/core";
import Flag from "react-world-flags";
// import { useTranslation } from "react-i18next";

const LanguageOptions = [
  { label: "English", value: "us" },
  {
    label: "Türkçe",
    value: "tr",
  },
];

export default function ChangeLanguage() {
//   const { t, i18n } = useTranslation();

  // const changeLanguage = () => {
    // i18n.changeLanguage(lang);
  // };

  return (
    <Input.Wrapper
    //   label={t("settingsPage.languageLabel")}
    //   description={t("settingsPage.languageDescription")}
      style={{ maxWidth: 125 }}
    >
      <Select
        data={LanguageOptions}
        // value={i18n.language ?? "tr"}
        value={"tr"}
        // onChange={(value) =>
          // changeLanguage(
          //   LanguageOptions.find((c) => c.value === value)?.value ||
          //     LanguageOptions[0].value
          // )
        // }
        style={{ flex: 1, width: "100%" }}
        renderOption={(item) => (
          <SelectItem value={item.option.value} label={item.option.label} />
        )}
        // leftSection={<Flag code={i18n.language} width={20} height={20} />}
         leftSection={<Flag code={"tr"} width={20} height={20} />}
      />
    </Input.Wrapper>
  );
}

interface ItemProps extends ComponentPropsWithoutRef<"div"> {
  value: string;
  label: string;
}

const SelectItem = forwardRef<HTMLDivElement, ItemProps>(
  ({ value, label, ...others }: ItemProps, ref) => (
    <div ref={ref} {...others}>
      <Flex align="center" style={{ whiteSpace: "nowrap" }}>
        <Flag code={value} width={20} height={20} style={{ marginRight: 10 }} />
        <Text size="sm">{label}</Text>
      </Flex>
    </div>
  )
);

SelectItem.displayName = "SelectItem";