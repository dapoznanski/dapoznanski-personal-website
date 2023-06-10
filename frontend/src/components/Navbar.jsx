import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AppBar, Toolbar, Button, Box } from "@mui/material";

const Navbar = () => {
    const location = useLocation();
    const isHomePage =
        location.pathname === "/home" || location.pathname === "/";

    const buttonTextColor = "#083054"; // Text color for buttons
    const mainTitleColor = buttonTextColor; // Use the same color as the buttons
    const mainTitleSize = "24px"; // Adjust the font size as desired
    const subTitleColor = buttonTextColor; // Use the same color as the buttons
    const subTitleFontStyle = "italic"; // Apply italic style to the subtitle

    const [isMobileView, setIsMobileView] = useState(false);

    useEffect(() => {
        const checkIfMobileView = () => {
            const mobileBreakpoint = 768;
            setIsMobileView(window.innerWidth < mobileBreakpoint);
        };

        checkIfMobileView();

        window.addEventListener("resize", checkIfMobileView);
        return () => {
            window.removeEventListener("resize", checkIfMobileView);
        };
    }, []);

    const navbarStyles = {
        height: isHomePage ? "20vh" : "95px",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        // borderBottom: "1px black",
    };

    const toolbarStyles = {
        display: "flex",
        justifyContent: "center",
        paddingBottom: "20px",
    };

    const buttonBoxStyles = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "10px",
    };

    const linkStyles = {
        color: buttonTextColor,
        padding: "0 20px",
        textDecoration: "none",
    };

    return (
        <AppBar position="static" style={navbarStyles}>
            <Toolbar style={toolbarStyles}>
                <Box style={{ textAlign: "center" }}>
                    <Box
                        component={Link}
                        to="/"
                        className="navbar-link"
                        style={{ textDecoration: "none" }}
                    >
                        <strong
                            style={{
                                color: mainTitleColor,
                                fontSize: mainTitleSize,
                            }}
                        >
                            Diana K. Apoznanski
                        </strong>
                    </Box>
                    <Box style={{ textAlign: "center" }}>
                        <span
                            style={{
                                color: subTitleColor,
                                fontStyle: subTitleFontStyle,
                            }}
                        >
                            PHD Student, Rutgers University
                        </span>
                    </Box>
                    {isMobileView && (
                        <Box style={buttonBoxStyles}>
                            <Button
                                component={Link}
                                to="/about"
                                style={linkStyles}
                            >
                                About
                            </Button>
                            <Button
                                component={Link}
                                to="/publications"
                                style={linkStyles}
                            >
                                Publications
                            </Button>
                            <Button
                                component={Link}
                                to="/cv"
                                style={linkStyles}
                            >
                                CV
                            </Button>
                        </Box>
                    )}
                </Box>
                {!isMobileView && (
                    <Box style={buttonBoxStyles}>
                        <Button component={Link} to="/about" style={linkStyles}>
                            About
                        </Button>
                        <Button
                            component={Link}
                            to="/publications"
                            style={linkStyles}
                        >
                            Publications
                        </Button>
                        <Button component={Link} to="/cv" style={linkStyles}>
                            CV
                        </Button>
                    </Box>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
