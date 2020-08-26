import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { NativeSelect, FormControl } from "@material-ui/core";

import { useDispatch } from "react-redux";
import { fetchAsyncGetCountry } from "../covidSlice";

const useStyle = makeStyles((theme) => ({
  formControl: {
    marginBottom: theme.spacing(3),
    minWidth: 320,
  },
}));

const SwitchCountry: React.FC = () => {
  const classes = useStyle();
  const dispatch = useDispatch();
  const countries = [
    "Japan",
    "China",
    "US",
    "France",
    "Italy",
    "Spain",
    "United Kingdom",
    "Germany",
    "Russia",
    "Brazil",
    "Taiwan",
    "Thailand",
    "New Zealand",
    "Sweden",
    "India",
  ];
  return (
    <FormControl className={classes.formControl}>
      <NativeSelect
        onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
          dispatch(fetchAsyncGetCountry(event.target.value))
        }
      >
        <option value="">Worldwide</option>
        {countries.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default SwitchCountry;
