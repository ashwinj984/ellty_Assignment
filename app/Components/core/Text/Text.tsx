import React from "react";
import { Typography as MUIText, SxProps, Theme } from "@mui/material";

export const Text: React.FC<{ children?: React.ReactNode, sx?: SxProps<Theme> }> = ({ children, sx, ...props }) => {
  return (<MUIText color="primary" sx={{ ...sx }} {...props}>{children}</MUIText>);
};
