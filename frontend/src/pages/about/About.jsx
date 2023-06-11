import React from "react";
import "./About.css";
import {
    Container,
    Typography,
    Box,
    Grid,
    Paper,
    List,
    ListItemText,
    ListItemButton,
    useMediaQuery,
} from "@mui/material";

import profilePic from "../../static/profilePic.jpg";
import bird1 from "../../static/bird1.svg";
import bird2 from "../../static/bird2.svg";
import bird3 from "../../static/bird3.svg";
import fish1 from "../../static/fish1.svg";
import fish2 from "../../static/fish2.svg";
import fish3 from "../../static/fish3.svg";
import whale1 from "../../static/whale.svg";
import squid1 from "../../static/squid.svg";

const About = () => {
    const isMobileView = useMediaQuery("(max-width: 1750px)");

    const handleNavClick = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <>
            <Box className="section white">
                {!isMobileView && (
                    <>
                        <img
                            src={bird1}
                            style={{
                                position: "absolute",
                                top: "60%",
                                left: "2%", // Adjust the left position as needed
                                transform: "translateY(-50%)",
                                width: "400px",
                            }}
                            alt="bird1"
                        />
                        <img
                            src={bird2}
                            style={{
                                position: "absolute",
                                top: "80%",
                                left: "90%", // Adjust the left position as needed
                                transform: "translateY(-50%)",
                                width: "150px",
                            }}
                            alt="bird2"
                        />
                        <img
                            src={bird3}
                            style={{
                                position: "absolute",
                                top: "10%",
                                left: "80%", // Adjust the left position as needed
                                transform: "translateY(-50%)",
                                width: "150px",
                            }}
                            alt="bird3"
                        />
                    </>
                )}
                <Container style={{ posistion: "relative", zIndex: 1 }}>
                    <Typography
                        variant="h4"
                        gutterBottom
                        style={{
                            textAlign: "center",
                            marginTop: "20px",
                            textShadow: "2px 2px 4px rgba(128, 128, 128, 0.5)",
                            fontFamily: "Montserrat",
                        }}
                        id="about-section"
                    >
                        About
                    </Typography>
                    <Paper
                        elevation={3}
                        style={{ backgroundColor: "#f7f7f7", padding: "50px" }}
                    >
                        <Grid container spacing={5}>
                            <Grid item xs={12} sm={12} md={3}>
                                <img
                                    src={profilePic}
                                    alt="Profile"
                                    style={{
                                        width: "100%",
                                        borderRadius: "50%",
                                        border: "4px solid rgb(73, 120, 182)",
                                        textShadow:
                                            "2px 2px 4px rgba(128, 128, 128, 0.5)",
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={9}>
                                <Typography
                                    variant="body1"
                                    style={{
                                        fontFamily: "Montserrat",
                                        fontWeight: 500,
                                    }}
                                >
                                    I am currently a PhD student in the
                                    Atmospheric Science program through the
                                    Department of Environmental Sciences at
                                    Rutgers University. My research, as part of
                                    the{" "}
                                    <a href="https://coastalhub.org/">
                                        Megalopolitan Coastal Transformation Hub
                                    </a>{" "}
                                    (MACH) Hazards team, investigates extreme
                                    flood risk from storm surge associated with
                                    extratropical cyclones (ETCs, locally known
                                    as nor’easters).
                                </Typography>
                                <br />
                                <Typography
                                    variant="body1"
                                    style={{
                                        fontFamily: "Montserrat",
                                        fontWeight: 500,
                                    }}
                                >
                                    I aim to find how the likelihood of extreme
                                    ETC characteristics has changed in the past
                                    due to increased carbon emissions, what the
                                    likelihood is in our current climate state,
                                    and how it may change in the future using
                                    general circulation model output. My
                                    professional goals include using scientific
                                    research to aid organizations affected by
                                    climate change and extreme weather events.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                </Container>
            </Box>
            <div className="spacer layer1"></div>

            <Box className="section light-blue" id="before-rutgers-section">
                {!isMobileView && (
                    <>
                        <img
                            src={fish1}
                            style={{
                                position: "absolute",
                                top: "70%",
                                left: "80px", // Adjust the left position as needed
                                transform: "translateY(-50%)",
                                width: "300px",
                            }}
                            alt="fish1"
                        />
                        <img
                            src={fish2}
                            style={{
                                position: "absolute",
                                top: "0%",
                                left: "60%", // Adjust the left position as needed
                                transform: "translateY(-50%)",
                                width: "200px",
                            }}
                            alt="fish2"
                        />
                        <img
                            src={fish3}
                            style={{
                                position: "absolute",
                                top: "80%",
                                left: "80%", // Adjust the left position as needed
                                transform: "translateY(-50%)",
                                width: "200px",
                            }}
                            alt="fish3"
                        />
                    </>
                )}
                <Container style={{ posistion: "relative", zIndex: 1 }}>
                    <Typography
                        variant="h4"
                        gutterBottom
                        style={{
                            textAlign: "center",
                            textShadow: "2px 2px 4px rgba(128, 128, 128, 0.5)",
                            fontFamily: "Montserrat",
                            fontWeight: 500,
                        }}
                    >
                        Before Rutgers
                    </Typography>
                    <Paper
                        elevation={5}
                        style={{
                            backgroundColor: "#59bdff",
                            padding: "20px",
                            textShadow: "2px 2px 4px rgba(128, 128, 128, 0.5)",
                        }}
                    >
                        <Typography
                            variant="body1"
                            style={{
                                fontFamily: "Montserrat",
                                fontWeight: 500,
                            }}
                        >
                            Prior to my graduate studies, I worked on the
                            Catastrophe Modeling and Applied Research team at
                            The Hartford Insurance Group where I produced
                            quarterly reports of risk and researched new areas
                            that could bring future risks from natural
                            catastrophes.
                        </Typography>
                        <br />
                        <Typography
                            variant="body1"
                            style={{
                                fontFamily: "Montserrat",
                                fontWeight: 500,
                            }}
                        >
                            I earned my undergraduate degree from Penn State
                            University in 2020 with a Bachelor of Science in
                            Meteorology and Atmospheric Science, a minor in
                            Energy Business and Finance, and a Certificate in
                            Geographic Information Science.
                        </Typography>
                        <br />
                        <Typography
                            variant="body1"
                            style={{
                                fontFamily: "Montserrat",
                                fontWeight: 500,
                            }}
                        >
                            In the summer of 2018, I was an intern at the US
                            Department of Energy’s Summer Undergraduate
                            Laboratory Internship (SULI), where I worked on a
                            project investigating marine boundary layer
                            stratocumulus cloud structures and precipitation
                            characteristics. This work led to my{" "}
                            <a href="https://acp.copernicus.org/articles/21/14557/2021/">
                                first scientific publication
                            </a>{" "}
                            in the journal of Atmospheric Chemistry and Physics
                            (see publications tab).
                        </Typography>
                    </Paper>
                </Container>
            </Box>

            <div className="spacer layer2"></div>

            <Box className="section dark-blue" id="personal-section">
                {!isMobileView && (
                    <>
                        <img
                            src={whale1}
                            style={{
                                position: "absolute",
                                top: "0%",
                                left: "2%", // Adjust the left position as needed
                                transform: "translateY(-50%)",
                                width: "500px",
                            }}
                            alt="whale1"
                        />
                        <img
                            src={squid1}
                            style={{
                                position: "absolute",
                                top: "50%",
                                left: "80%", // Adjust the left position as needed
                                transform: "translateY(-50%)",
                                width: "150px",
                            }}
                            alt="squid1"
                        />
                    </>
                )}
                <Container style={{ posistion: "relative", zIndex: 1 }}>
                    <Typography
                        variant="h4"
                        gutterBottom
                        style={{
                            textAlign: "center",
                            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                            fontFamily: "Montserrat",
                            fontWeight: 500,
                        }}
                    >
                        Personal
                    </Typography>
                    <Paper
                        elevation={5}
                        style={{
                            backgroundColor: "#2f79c2",
                            padding: "20px",
                            color: "white",
                            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                        }}
                    >
                        <Typography
                            variant="body1"
                            style={{
                                fontFamily: "Montserrat",
                                fontWeight: 500,
                            }}
                        >
                            I grew up on Long Island, NY where I naturally felt
                            inclined to understand coastal weather and directly
                            experienced its impacts (e.g., Hurricane Sandy,
                            Winter Storm Nemo, local beach erosion). This
                            inclination slowly grew into pursuing a scientific
                            research career.
                        </Typography>
                        <br />
                        <Typography
                            variant="body1"
                            style={{
                                fontFamily: "Montserrat",
                                fontWeight: 500,
                            }}
                        >
                            In my free time, you may find me outdoors hiking,
                            biking, or paddle boarding (when the weather
                            allows). Or, curled up with a good book and my cat,
                            Pickle.
                        </Typography>
                    </Paper>
                </Container>
            </Box>

            {!isMobileView && (
                <Box sx={{ width: 300, position: "fixed", top: 160, right: 0 }}>
                    <Paper
                        elevation={3}
                        style={{
                            background: "rgba(247, 247, 247, 0.85)",
                            margin: "20px",
                            padding: "10px",
                        }}
                    >
                        <List
                            component="nav"
                            aria-label="code blocks navigation"
                        >
                            <Typography
                                variant="h5"
                                sx={{
                                    textDecoration: "underline",
                                    fontFamily: "Montserrat",
                                    fontWeight: 500,
                                }}
                            >
                                Contents
                            </Typography>
                            <ListItemButton
                                onClick={() => handleNavClick("about-section")}
                            >
                                <ListItemText primary="About" />
                            </ListItemButton>
                            <ListItemButton
                                onClick={() =>
                                    handleNavClick("before-rutgers-section")
                                }
                            >
                                <ListItemText primary="Before Rutgers" />
                            </ListItemButton>
                            <ListItemButton
                                onClick={() =>
                                    handleNavClick("personal-section")
                                }
                            >
                                <ListItemText primary="Personal" />
                            </ListItemButton>
                        </List>
                    </Paper>
                </Box>
            )}
        </>
    );
};

export default About;
