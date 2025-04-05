"use client";
import React from "react";
import { Box, CheckList, Button, Text } from "../Components";
import { en, theme } from "../src";
import { ToastContainer, toast } from "react-toastify";

export const Assignment = () => {

    const Msg = () => (
        <Box display='flex' flexDirection='column' justifyContent='flex-start'>
            <Text sx={{ color: theme.colorPalette.white }}>{en.funText1}</Text>
            <Text sx={{ color: theme.colorPalette.white }}>{en.funText2}</Text>
        </Box >
    );

    const handleClick = () => {
        toast(Msg);
    };

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
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                theme="dark"
            />
            <Button
                onClick={() => handleClick()}
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