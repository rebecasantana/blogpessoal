import React from "react";
import { Typography, Grid, Button } from "@material-ui/core";
import { Box } from "@mui/material";
import "./Home.css";

function Home() {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        style={{ backgroundColor: "#EBF2F2" }}
      >
        <Grid alignItems="center" item xs={6}>
          <Box paddingX={20}>
            <Typography
              variant="h3"
              gutterBottom
              color="textPrimary"
              component="h3"
              align="center"
              style={{ color: "#3F51B5", fontWeight: "bold" }}
            >
              Olá,Estudante(a)!
            </Typography>
            <Typography
              variant="h5"
              gutterBottom
              color="textPrimary"
              component="h5"
              align="center"
              style={{ color: "#3F51B5", fontWeight: "normal" }}
            >
              Aqui estão algumas dicas e conteúdos para ajudá-lo a aprender
              inglês.
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center">
            <Box marginRight={1}></Box>
            <Button
              variant="outlined"
              style={{
                borderColor: "white",
                backgroundColor: "#3F51B5",
                color: "white",
              }}
            >
              Ver Postagens
            </Button>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <img
            src="https://ik.imagekit.io/zc68f3m83/English_teacher-pana__1_.png?updatedAt=1681429625289"
            alt=""
            width="540px"
            height="500px"
          />
        </Grid>
        <Grid xs={12} style={{ backgroundColor: "white" }}></Grid>
      </Grid>
    </>
  );
}

export default Home;
