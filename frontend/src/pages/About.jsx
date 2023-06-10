import React from "react";
import { Container, Typography, Box, Grid } from "@mui/material";

import profilePic from "../static/profilePic.jpg";
import Footer from "../components/Footer";

const About = () => {
    const waveBackground1 = {
        backgroundImage:
            "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1440 320%22%3E%3Cpath fill=%22%23FFFFFF%22 fill-opacity=%221%22 d=%22M0,192L48,208C96,224,192,256,288,250.7C384,245,480,203,576,202.7C672,203,768,245,864,266.7C960,288,1056,288,1152,293.3C1248,299,1344,309,1392,314.7L1440,320L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z%22%3E%3C/path%3E%3C/svg%3E')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "600px",
    };

    const waveBackground2 = {
        backgroundImage:
            "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1440 320%22%3E%3Cpath fill=%22%23214175%22 fill-opacity=%221%22 d=%22M0,64L48,64C96,64,192,64,288,69.3C384,75,480,85,576,106.7C672,128,768,160,864,149.3C960,139,1056,85,1152,58.7C1248,32,1344,32,1392,32L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z%22%3E%3C/path%3E%3C/svg%3E')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        position: "relative",
        height: "500px",
        // paddingTop: "10px",
        top: "60px",
    };

    return (
        <>
            <style>
                {`
                body, html {
                    margin: 0;
                    padding: 0;
                    background-color: #0099ff;
                    height: 100%;
                }
                `}
            </style>
            <Box style={waveBackground1}>
                <Container>
                    <Typography variant="h4" gutterBottom>
                        About
                    </Typography>
                    <Grid container spacing={5}>
                        <Grid item md={3}>
                            <img
                                src={profilePic}
                                alt="Profile"
                                style={{ width: "100%", borderRadius: "50%" }}
                            />
                        </Grid>
                        <Grid item md={7}>
                            <Typography variant="body1">
                                I am currently a PhD student in the Atmospheric
                                Science program through the Department of
                                Environmental Sciences at Rutgers University. My
                                research, as part of the Megalopolitan Coastal
                                Transformation Hub (MACH) Hazards team,
                                investigates extreme flood risk from storm surge
                                associated with extratropical cyclones (ETCs,
                                locally known as nor’easters). I aim to find how
                                the likelihood of extreme ETC characteristics
                                has changed in the past due to increased carbon
                                emissions, what the likelihood is in our current
                                climate state, and how it may change in the
                                future using general circulation model output.
                                My professional goals include using scientific
                                research to aid organizations affected by
                                climate change and extreme weather events.
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Box>
                <Container style={{ color: "white" }}>
                    <Typography variant="h4" gutterBottom>
                        Before Rutgers
                    </Typography>
                    <Typography variant="body1">
                        Prior to my graduate studies, I worked on the
                        Catastrophe Modeling and Applied Research team at The
                        Hartford Insurance Group where I produced quarterly
                        reports of risk and researched new areas that could
                        bring future risks from natural catastrophes.
                    </Typography>
                    <br />
                    <Typography variant="body1">
                        I earned my undergraduate degree from Penn State
                        University in 2020 with a Bachelor of Science in
                        Meteorology and Atmospheric Science, a minor in Energy
                        Business and Finance, and a Certificate in Geographic
                        Information Science.
                    </Typography>
                    <br />
                    <Typography variant="body1">
                        In the summer of 2018, I was an intern at the US
                        Department of Energy’s Summer Undergraduate Laboratory
                        Internship (SULI), where I worked on a project
                        investigating marine boundary layer stratocumulus cloud
                        structures and precipitation characteristics. This work
                        led to my{" "}
                        <a href="https://acp.copernicus.org/articles/21/14557/2021/">
                            first scientific publication
                        </a>{" "}
                        in the journal of Atmospheric Chemistry and Physics (see
                        publications tab).
                    </Typography>
                </Container>
            </Box>
            <Box style={waveBackground2}>
                <Container style={{ paddingTop: "250px", color: "white" }}>
                    <Typography variant="h4" gutterBottom>
                        Personal
                    </Typography>
                    <Typography variant="body1">
                        I grew up on Long Island, NY where I naturally felt
                        inclined to understand coastal weather and directly
                        experienced its impacts (e.g., Hurricane Sandy, Winter
                        Storm Nemo, local beach erosion). This inclination
                        slowly grew into pursuing a scientific research career.
                    </Typography>
                    <br />
                    <Typography variant="body1">
                        In my free time, you may find me outdoors hiking,
                        biking, or paddle boarding (when the weather allows).
                        Or, curled up with a good book and my cat, Pickle.
                        Please see my “travel blog” tab for some updates on my
                        personal journey.
                    </Typography>
                </Container>
            </Box>
        </>
    );
};

export default About;
