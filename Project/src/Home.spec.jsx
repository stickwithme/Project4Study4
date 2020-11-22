import React from "react";
import { Home } from "./Home";
import { render } from "@testing-library/react";

describe("Home", () => {
  it("renders correctly", () => {
    const { getByLabelText } = render(<Home />);
    expect(getByLabelText('Email:')).toHaveAttribute('name', 'email')
    expect(getByLabelText('Password:')).toHaveAttribute('name', 'password')
  });
});
