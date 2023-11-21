
import { useNavigate } from "react-router-dom";
import { CryptoState } from "../CryptoContext";
import { AppBar, Container, MenuItem, Select,  ThemeProvider,  Toolbar, Typography, createTheme,  } from "@mui/material";


const Header = () => {
  const navigate = useNavigate();

  const { currency, setCurrency } = CryptoState();

 const darkTheme = createTheme({
   palette: {
     mode: "dark",
   },
   type: "dark",
 });

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <AppBar  position="sticky">
          <Container>
            <Toolbar>
              <Typography
                onClick={() => navigate("/")}
                sx={{
                  flex: 1,
                  color: "yellow",
                  fontFamily: "Montserrat",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                Crypto
              </Typography>
              <Select
                variant="outlined"
                style={{
                  width: 100,
                  height: 40,
                  marginRight: 15,
                }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
              >
                <MenuItem value={"USD"}>USD</MenuItem>
                <MenuItem value={"INR"}>INR</MenuItem>
              </Select>
            </Toolbar>
          </Container>
        </AppBar>
      </ThemeProvider>
    </>
  );
};

export default Header;
