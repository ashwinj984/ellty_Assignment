import React from "react";
import { Box, Checkbox, Text } from "../../core";

export const CheckList = ({ content }: { content: string }) => {
    return (
        <Box display='flex' sx={{
            bgcolor: "#ffffff",
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


            <Checkbox sx={{
                width: '2.3vw', height: '5.03vh', borderRadius: '2', "&.Mui-checked": {
                    color: "blue", // ✅ Checkmark color
                },
                "&.Mui-checked.MuiIconButton-root": {
                    backgroundColor: "white !important", // ✅ Forces white background
                },

            }} />
        </Box>
    )
}