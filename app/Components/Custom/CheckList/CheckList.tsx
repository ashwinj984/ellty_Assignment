import React from "react";
import { Box, Text } from "../../core";
import { CustomCheckbox } from "../CustomCheckbox";
import { theme } from "@/app/src";

export const CheckList = ({ content }: { content: string }) => {
    return (
        <Box display='flex' sx={{
            bgcolor: theme.colorPalette.white,
            textAlign: "center",
            width: "24vw",
            height: "6vh",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: '1vh',
            paddingY: '1.2vh',
            paddingLeft: '1.5vw',
            paddingRight: '1vw',
        }}>
            <Text sx={{ fontFamily: 'Montserrat', color: '#1F2128', fontWeight: '400', verticalAlign: 'middle', fontSize: '14px' }}>
                {content}
            </Text>
            <CustomCheckbox />
        </Box>
    )
}