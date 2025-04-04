import React from "react";
import { Box as MUIBox, BoxProps } from "@mui/material";

interface CustomBoxProps extends BoxProps {
  children?: React.ReactNode;
}

export const Box: React.FC<CustomBoxProps> = ({ children, ...props }) => {
  return (
    <MUIBox  {...props}>
      {children}
    </MUIBox>
  );
};