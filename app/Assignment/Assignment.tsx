import React from "react";
import { Box, CheckList, Button, Text, CustomCheckbox } from "../Components";

export const Assignment = () => {
    return (
        <>
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
            <CheckList content='All the Pages' />
            <Box sx={{ height: "1px", width: "22vw", bgcolor: "#CDCDCD", border: '0.7px', alignSelf: 'center', }} />
            <CheckList content={"All the Pages"} />
            <CheckList content={"All the Pages"} />
            <CheckList content={"All the Pages"} />
            <CheckList content={"All the Pages"} />
            <Box sx={{ height: "1px", width: "22vw", bgcolor: "#CDCDCD", border: '0.7px', alignSelf: 'center', marginBottom: '1.5vh' }} />
            <Button

                sx={{
                    backgroundColor: "#FFCE22",
                    width: '22vw',
                    marginBottom: '2vh',
                    fontFamily: 'Montserrat',
                    fontWeight: '400',
                    ":hover":{
                        backgroundColor: "#FFD84D",
                    }
                }} >
                <Text sx={{ fontFamily: 'Montserrat', color: '#1F2128', fontWeight: '400', verticalAlign: 'middle', fontSize: '14px' }}>
                 Done
                </Text>
            </Button>
        </Box>

        <CustomCheckbox/>
        </>

    )
}