import {
  ThemeProvider,
  FormControl,
  Button,
  Container,
  TextField,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";
import { Autocomplete } from "@material-ui/lab";
import { useForm } from "react-hook-form";
import countries from "../helpers/countryList";
import { readData, sendData } from "../firebase/firestore";
import { useUser } from "../store/userContext";
import { useEffect, useState } from "react";

const theme = createTheme();

const countriesList = {
  options: countries,
  getOptionLabel: (option) => option.name,
};

export const UserInfoEdit = () => {
  const user = useUser();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => sendData(data, user.uid);
  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState("");

  useEffect(() => {
    readData(user.uid).then((response) => {
      if (!response) return;
      setName(response.name);
      setBirthday(response.birthday);
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <h1>Edit information</h1>
        <FormControl onSubmit={handleSubmit(onSubmit)} fullWidth>
          {/* <FormLabel>Gender</FormLabel>
          <RadioGroup
            {...register("gender")}
            row
            aria-label="gender"
            name="row-radio-buttons-group"
          >
            <FormControlLabel
              {...register("gender")}
              value="female"
              control={<Radio color="primary" />}
              label="Female"
            />
            <FormControlLabel
              {...register("gender")}
              value="male"
              control={<Radio color="primary" />}
              label="Male"
            />
            <FormControlLabel
              {...register("gender")}
              value="other"
              control={<Radio color="primary" />}
              label="Other"
            />
          </RadioGroup> */}

          <TextField
            {...register("name")}
            id="name"
            label="Name"
            type="text"
            margin="normal"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />

          <TextField
            {...register("birthday")}
            id="date"
            label="Birthday"
            type="date"
            defaultValue={birthday}
            value={birthday}
            InputLabelProps={{
              shrink: true,
            }}
            margin="normal"
            onChange={(e) => {
              setBirthday(e.target.value);
            }}
          />

          {/* <Autocomplete
            {...countriesList}
            autoHighlight
            id="country"
            renderInput={(countries) => (
              <TextField
                {...register("country")}
                {...countries}
                label="Country"
                variant="outlined"
                margin="normal"
              />
            )}
          />

          <TextField
            {...register("phone")}
            id="phone"
            label="Phone number"
            margin="normal"
          />

          <TextField
            {...register("about")}
            id="about"
            label="About myself"
            multiline
            rows={4}
            defaultValue=""
            margin="normal"
          /> */}

          <Button
            type="submit"
            onClick={handleSubmit(onSubmit)}
            variant="contained"
            color="primary"
          >
            Save
          </Button>
        </FormControl>
      </Container>
    </ThemeProvider>
  );
};
