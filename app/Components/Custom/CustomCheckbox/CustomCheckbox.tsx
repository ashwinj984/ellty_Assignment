'use client';
import React, { useState } from "react";
import { SxProps } from "@mui/material";
import { Theme } from "@emotion/react";
import { Box } from "../../core";
import CheckMark from './checkmark.png'
import Image from "next/image";
import { theme } from "@/app/src";


export const CustomCheckbox: React.FC<{ sx?: SxProps<Theme> }> = ({ sx, ...props }) => {
    const [checked, setChecked] = useState(false);
    const [hovered, setHovered] = useState(false);
    const [pressingState, setPressingState] = useState(false);

    // Edge case : When onMouseUp is happening outside of Box


    const renderComponent = () => {
        if (!checked && hovered) {
            return (
                <Image src={CheckMark} alt={"Checkmark"} width={20}
                    height={20} style={{ opacity: 0.3 }} />
            )
        } else if (!checked && pressingState) {
            return (
                <Image src={CheckMark} alt={"Checkmark"} width={20}
                    height={20} style={{ opacity: 1 }} />
            )
        } else if (checked) {
            return (<Image src={CheckMark} alt={"Checkmark"} width={20}
                height={20} style={{ opacity: 1 }} />
            )
        }
        else {
            return null
        }
    }

    const handlePressingState = () => {
        setPressingState(true);
    }

    const handlePressingStateMouseUp = () => {
        setPressingState(false);
        setChecked(checked => !checked);
    }

    const handleBackgroundColor = () => {
        if (!checked) {
            return theme.colorPalette.white;
        } else if (checked && !hovered) {
            return theme.colorPalette.checkedNotHovered;
        } else if (checked && hovered) {
            return theme.colorPalette.checkedAndHovered;
        }
    }
    return (
        <Box
            width='23px'
            height='23px'
            borderRadius='6px'
            marginTop='6.5px'
            marginLeft='6px'
            border={pressingState ? (checked ? `2px solid ${theme.colorPalette.borderColor}` : `4px solid ${theme.colorPalette.borderColorChecked}`) : `2px solid ${theme.colorPalette.borderColor}`}
            display='flex'
            onMouseDown={() => {
                handlePressingState()

            }}
            /* eslint-disable @typescript-eslint/ban-ts-comment */
            // @ts-ignore
            backgroundColor={handleBackgroundColor()}
            onMouseUp={() => handlePressingStateMouseUp()}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => {
                setHovered(false)

            }}
            sx={{ ...sx }}
            {...props}>
            {renderComponent()}
        </Box >
    )
}