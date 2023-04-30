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

  if (token !== "") {
    footerComponent = (
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid alignItems="center" item xs={12}>
          <Box>
            <Box
              paddingTop={1}
              display="flex"
              alignItems="center"
              justifyContent="center"
              className='box'
            >
              <Typography
                variant="h5"
                align="center"
                gutterBottom
                className="descricao"
              >
                {" "}
                Me acompanhe no Linkedin
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="center">
              <a href="http://www.linkedin.com" target="blank">
                <LinkedInIcon className="icones" />
              </a>
            </Box>
          </Box>
          <Box className="boxPrincipal">
            <Box paddingTop={1}>
              <Typography
                variant="subtitle2"
                align="center"
                gutterBottom
                className="descricao"
              >
                {" "}
                {/*2023 Copyright*/}
              </Typography>
            </Box>
            <Box>
              <a
                target="blank"
                href="https://www.linkedin.com/in/rebecasantana/"
              >
                <Typography
                  variant="subtitle2"
                  gutterBottom
                  align="center"
                  className="textoFooter"
                >
                  {" "}
                 Desenvolvido por Rebeca Silva{" "}
                </Typography>
              </a>
            </Box>
          </Box>
        </Grid>
      </Grid>
    );
  }
  return <>{footerComponent}</>;
}

export default Footer;
