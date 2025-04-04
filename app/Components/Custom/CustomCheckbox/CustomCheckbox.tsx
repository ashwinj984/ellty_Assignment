import React from "react";
import { Checkbox as MUICheckbox, SxProps } from "@mui/material";
import { Theme } from "@emotion/react";
import { Box } from "../../core";

export const CustomCheckbox: React.FC<{ sx?: SxProps<Theme> }> = ({ sx, ...props }) => {
    return (
        <Box sx ={{backgroundColor : 'black'}}>
        Ashwin Jain</Box>
    )
}