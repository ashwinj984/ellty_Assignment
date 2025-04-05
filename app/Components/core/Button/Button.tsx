"use client";

import React from "react";
import { Button as MUIButton, SxProps } from "@mui/material";
import { Theme } from "@emotion/react";

export const Button: React.FC<{
  children?: React.ReactNode;
  sx?: SxProps<Theme>;
  onClick?: () => void;
}> = ({ children, sx, onClick, ...props }) => {
  return (
    <MUIButton onClick={onClick} sx={{ ...sx }} {...props}>
      {children}
    </MUIButton>
  );
};
