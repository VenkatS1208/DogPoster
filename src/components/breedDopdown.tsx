import React, { useEffect } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

import withSelectComponent from "../hoc/wrapSelectComponent";

const BreedDropdown = (props: any) => {
  useEffect(() => {
    if (props.selectedItem?.value) {
      props.fetchSubBreed(props.selectedItem.value);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.selectedItem]);
  return (
    <FormControl>
      <InputLabel>Select Breed</InputLabel>
      <Select
        sx={{
          width: 250,
        }}
        value={props.selectedItem?.value || ""}
        onChange={(e) => props.handleChange(e, "breed")}
        labelId="breed-select-label"
        id="breed-select"
        label="Select Breed"
      >
        {props.breedData.map((item: any) => (
          <MenuItem key={item.id} value={item.breed}>
            {item.breed}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default withSelectComponent(BreedDropdown);
