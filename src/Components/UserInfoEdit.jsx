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
import countries from "../countryList";
import { readData, sendData } from "../firestore";

const theme = createTheme();

const countriesList = {
  options: countries,
  getOptionLabel: (option) => option.name,
};

export const UserInfoEdit = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <button onClick={sendData}>Send Data</button>
        <button onClick={readData}>Read Data</button>
        <h1>Edit information</h1>
        <FormControl onSubmit={handleSubmit(onSubmit)} fullWidth>
          <FormLabel>Gender</FormLabel>
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
          </RadioGroup>

          <TextField
            {...register("name")}
            id="name"
            label="Name"
            type="text"
            margin="normal"
          />

          <TextField
            {...register("birthday")}
            id="date"
            label="Birthday"
            type="date"
            defaultValue="1994-09-07"
            InputLabelProps={{
              shrink: true,
            }}
            margin="normal"
          />

          <Autocomplete
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
          />

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
