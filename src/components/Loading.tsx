
import React, { useEffect } from "react";
import { LoadingOverlay as MantineLoadingOverlay } from "@mantine/core";

interface LoadingOverlayProps {
  visible: boolean;
}

const LoadingOverlay = ({ visible }: LoadingOverlayProps) => {

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [visible]);

  return (
    <MantineLoadingOverlay
      pos="fixed"
      visible={visible}
      zIndex={1000}
      overlayProps={{ radius: "sm", blur: 2 }}
      loaderProps={{ type: "bars" }}
    />
  );
};

export default LoadingOverlay;