import React from "react";
import { Card as MUICard } from "@mui/material";


export const Card: React.FC<{ children?: React.ReactNode; }> = ({ children, ...props }) => {
  return <MUICard {...props}>{children}</MUICard>;
};
