import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import { shallow } from "enzyme";
import App from "./components/App";

it("renders without crashing", () => {
  shallow(<App />);
});

configure({ adapter: new Adapter() });
