import React from "react";
import { Button as MUIButton, SxProps } from "@mui/material";
import { Theme } from "@emotion/react";

export const Button: React.FC<{ children?: React.ReactNode; sx?: SxProps<Theme> }> = ({ children, sx, ...props }) => {
  return <MUIButton sx={{ ...sx }}{...props}>{children}</MUIButton>;
};
