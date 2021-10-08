import {
  Avatar,
  Box,
  Button,
  Container,
  createTheme,
  CssBaseline,
  Grid,
  Input,
  ThemeProvider,
  Typography,
} from "@material-ui/core";
import { useState } from "react";

const theme = createTheme();

export const SignIn = ({
  submitBtnName,
  routeBtnName,
  submitBtnHandler,
  routeBtnHandler,
}) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleInputLog = (e) => {
    setLogin(e.target.value);
  };

  const handleInputPass = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    submitBtnHandler(login, password);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
          <Typography component="h1" variant="h5">
            {submitBtnName}
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <Input
              margin="normal"
              required
              fullWidth
              value={login}
              autoFocus
              onChange={handleInputLog}
              placeholder="Login"
            />
            <Input
              margin="normal"
              required
              fullWidth
              placeholder="Password"
              type="password"
              value={password}
              onChange={handleInputPass}
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              sx={{ mt: 3, mb: 2 }}
            >
              {submitBtnName}
            </Button>
            <Button
              onClick={routeBtnHandler}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {routeBtnName}
            </Button>
            <Grid container>
              <Grid item></Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};
