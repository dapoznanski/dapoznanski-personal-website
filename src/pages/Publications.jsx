import React from "react";
import { Container, Typography, Button, Box } from "@mui/material";

const Publications = () => {
    return (
        <Container>
            <Box style={{ margin: "50px" }}>
                <h2>Publications</h2>
                <ul>
                    <li>
                        Jensen, M. P., Ghate, V. P., Wang, D., Apoznanski, D.
                        K., Bartholomew, M. J., Giangrande, S. E., Johnson, K.
                        L., and Thieman, M. M.: Contrasting characteristics of
                        open- and closed-cellular stratocumulus cloud in the
                        eastern North Atlantic, Atmos. Chem. Phys., 21,
                        14557–14571,{" "}
                        <a href="https://doi.org/10.5194/acp-21-14557-2021">
                            https://doi.org/10.5194/acp-21-14557-2021
                        </a>
                        , 2021.{" "}
                    </li>
                </ul>
            </Box>
        </Container>
    );
};

export default Publications;
