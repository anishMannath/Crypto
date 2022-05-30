import {
  AppBar,
  Container,
  createTheme,
  makeStyles,
  MenuItem,
  Select,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useNavigate } from "react-router-dom";
import { CryptoState } from "../CryptoContext";

const usestyles = makeStyles(() => ({
  title: {
    flex: 1,
    color: "gold",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer",
  },
}));

const Header = () => {
  const classes = usestyles();
  const history = useNavigate();
  const { currency, setcurrency } = CryptoState();
  // console.log(val);
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="transparent" position="static">
        <Container maxWidth={false}>
          <Toolbar>
            <Typography
              onClick={() => history("/")}
              className={classes.title}
              variant="h6"
            >
              Crypto Track
            </Typography>
            <Select
              variant="outlined"
              defaultValue="INR"
              style={{
                height: 40,
                width: 100,
                marginRight: 15,
              }}
              value={currency}
              onChange={(e) => {
                setcurrency(e.target.value);
              }}
            >
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"INR"}>INR</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
