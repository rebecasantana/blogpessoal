import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { TokenState } from "../../../store/tokens/TokensReducer";
import { addToken } from "../../../store/tokens/action";

function Navbar() {
  const history = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector<TokenState, TokenState["token"]>(
    (state) => state.token
  );

  function goLogout() {
    dispatch(addToken(""));
    toast.info("Usuário deslogado!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    history("/login");
  }

  var navbarComponent;

  if (token !== "") {
    navbarComponent = (
      <AppBar position="fixed">
        <Box
          sx={{ flexGrow: 1 }}
          style={{ backgroundColor: "#3f51b5" }}
          p={4}
          height={"10vh"}
          width={"100%"}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box display={"flex"}>
            <Link to={"/perfil"}>
              <Box marginY={2} className="icon"></Box>
            </Link>
            <Box marginY={4} marginLeft={2}>
              <Typography variant="h6" color="white">
                Lingua Ingleza
              </Typography>
            </Box>
          </Box>
          <Box display="flex" gap={10}>
            <Link to={"/home"} className="text-decorator-none">
              <Box mx={1} style={{ cursor: "pointer" }}>
                <Typography
                  variant="h6"
                  color="white"
                  className="logout-cursor"
                >
                  Home
                </Typography>
              </Box>
            </Link>
            <Link to={"/postagens"} className="text-decorator-none">
              <Box mx={1} style={{ cursor: "pointer" }}>
                <Typography
                  variant="h6"
                  color="white"
                  className="logout-cursor"
                >
                  Postagens
                </Typography>
              </Box>
            </Link>
            <Link to={"/temas"} className="text-decorator-none">
              <Box mx={1} style={{ cursor: "pointer" }}>
                <Typography
                  variant="h6"
                  color="white"
                  className="logout-cursor"
                >
                  Tema
                </Typography>
              </Box>
            </Link>
            <Link to={"/formularioTema"} className="text-decorator-none">
              <Box mx={1} style={{ cursor: "pointer" }}>
                <Typography
                  variant="h6"
                  color="white"
                  className="logout-cursor"
                >
                  Cadastrar tema
                </Typography>
              </Box>
            </Link>
          </Box>

          <Box
            mx={1}
            className="text-decorator-none"
            onClick={goLogout}
            paddingLeft={"5px"}
          >
            <Typography variant="h6" color="white" className="logout-cursor">
              logout
            </Typography>
          </Box>
        </Box>
      </AppBar>
    );
  }

  return <>{navbarComponent}</>;
}

export default Navbar;
