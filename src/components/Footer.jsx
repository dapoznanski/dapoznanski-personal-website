import React from "react";
import { Typography, Link, Box } from "@mui/material";
import {
    AiFillGithub,
    AiOutlineInstagram,
    AiOutlineTwitter,
    AiFillLinkedin,
} from "react-icons/ai";

const Footer = () => {
    const buttonTextColor = "#083054"; // Text color for buttons
    const iconStyles = {
        fontSize: "24px",
        transition: "transform 0.3s",
    };

    const handleIconHover = (event) => {
        event.target.style.transform = "scale(1.2)";
    };

    const handleIconLeave = (event) => {
        event.target.style.transform = "scale(1)";
    };

    return (
        <Box
            sx={{
                backgroundColor: (theme) => theme.palette.primary.white,
                color: (theme) => theme.palette.common.white,
                padding: (theme) => theme.spacing(2),
                textAlign: "center",
                position: "fixed",
                bottom: 0,
                left: 0,
                width: "100%",
                zIndex: 10,
                marginTop: "auto",
            }}
        >
            <div
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Typography variant="body1">
                    <Link
                        href="https://www.linkedin.com/in/diana-apoznanski-976243127/"
                        target="_blank"
                        rel="noopener noreferrer"
                        color="inherit"
                        underline="none"
                        sx={{
                            marginLeft: (theme) => theme.spacing(1),
                            verticalAlign: "middle",
                        }}
                    >
                        <AiFillLinkedin
                            color={buttonTextColor}
                            size={30}
                            style={iconStyles}
                            onMouseEnter={handleIconHover}
                            onMouseLeave={handleIconLeave}
                        />
                    </Link>
                    <Link
                        href="https://www.instagram.com/diana.apz/"
                        target="_blank"
                        rel="noopener noreferrer"
                        color="inherit"
                        underline="none"
                        sx={{
                            marginLeft: (theme) => theme.spacing(1),
                            verticalAlign: "middle",
                        }}
                    >
                        <AiOutlineInstagram
                            color={buttonTextColor}
                            size={30}
                            style={iconStyles}
                            onMouseEnter={handleIconHover}
                            onMouseLeave={handleIconLeave}
                        />
                    </Link>
                    <Link
                        href="https://twitter.com/dapoznanski"
                        target="_blank"
                        rel="noopener noreferrer"
                        color="inherit"
                        underline="none"
                        sx={{
                            marginLeft: (theme) => theme.spacing(1),
                            verticalAlign: "middle",
                        }}
                    >
                        <AiOutlineTwitter
                            color={buttonTextColor}
                            size={30}
                            style={iconStyles}
                            onMouseEnter={handleIconHover}
                            onMouseLeave={handleIconLeave}
                        />
                    </Link>
                    <Link
                        href="https://github.com/dapoznanski"
                        target="_blank"
                        rel="noopener noreferrer"
                        color="inherit"
                        underline="none"
                        sx={{
                            marginLeft: (theme) => theme.spacing(1),
                            verticalAlign: "middle",
                        }}
                    >
                        <AiFillGithub
                            color={buttonTextColor}
                            size={30}
                            style={iconStyles}
                            onMouseEnter={handleIconHover}
                            onMouseLeave={handleIconLeave}
                        />
                    </Link>
                </Typography>
            </div>
        </Box>
    );
};

export default Footer;
