import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import withSelectComponent from "../hoc/wrapSelectComponent";

const SubBreedDropdown = (props: any) => {
  return (
    <FormControl>
      <InputLabel>Select Sub-Breed</InputLabel>
      <Select
        sx={{
          width: 250,
        }}
        value={props.selectedItem?.value || ""}
        onChange={(e) => props.handleChange(e)}
        labelId="subbreed-select-label"
        id="subbreed-select"
        label="Select Sub-Breed"
      >
        {props.subBreedList.map((item: any) => (
          <MenuItem key={item} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default withSelectComponent(SubBreedDropdown);
