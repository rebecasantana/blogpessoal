import React from "react";
import "./Footer.css";
import { Grid } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/TokensReducer";

function Footer() {
  const dispatch = useDispatch();

  const token = useSelector<TokenState, TokenState["token"]>(
    (state) => state.token
  );

  let footerComponent;

  if (token != "") {
    footerComponent = (
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid alignItems="center" item xs={12}>
          <Box style={{ backgroundColor: "#3F51B5", height: "50px" }}>
            <Box paddingTop={1}>
              <Typography
                variant="subtitle2"
                align="center"
                gutterBottom
                style={{ color: "white" }}
              >
                Desenvolvido por Rebeca © 2023 Copyright:
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    );
  }
  return <>{footerComponent}</>;
}

export default Footer;
