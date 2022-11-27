import React from "react";
import { shallow } from "enzyme";

import SubBreedDropdown from "../components/subBreedDropdown";

describe("<SubBreedDropdown />", () => {
  let component;

  beforeEach(() => {
    component = shallow(<SubBreedDropdown />);
  });
  test("It should mount", () => {
    expect(component.length).toBe(1);
  });
});
