import React from "react";
import { Box, CheckList, Button, Text } from "../Components";
import { en, theme } from "../src";

export const Assignment = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '3',
                mx: '38vw',
                marginTop: '12vh',
                borderRadius: '8px',
            }}>
            <CheckList content={en.allPages} />
            <Box sx={{ height: "1px", width: "22vw", bgcolor: theme.colorPalette.borderColor, border: '0.7px', alignSelf: 'center' }} />
            {[...Array(4)].map((_, key) => (
                <Box key={key}>
                    <CheckList content={`${en.page} ${key + 1}`} />
                </Box>
            ))}

            <Box sx={{ height: "1px", width: "22vw", bgcolor: theme.colorPalette.borderColor, border: '0.7px', alignSelf: 'center', marginBottom: '1.5vh' }} />
            <Button
                sx={{
                    backgroundColor: '#FFCE22',
                    width: '22vw',
                    marginBottom: '2vh',
                    fontFamily: 'Montserrat',
                    fontWeight: '400',
                    ":hover": {
                        backgroundColor: theme.colorPalette.buttonHoverColor,
                    }
                }} >
                <Text sx={{ fontFamily: 'Montserrat', color: '#1F2128', fontWeight: '400', verticalAlign: 'middle', fontSize: '14px' }}>
                    Done
                </Text>
            </Button>
        </Box>

    )
}