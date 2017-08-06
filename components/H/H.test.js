import React from "react";
import { mount } from "enzyme";
import { H } from "./H";

describe("H", () => {
  describe("props", () => {
    it("should change the text of tag", () => {
      const wrapper = mount(<H>unitest</H>);
      expect(wrapper.text()).toBe("unitest");

      wrapper.setProps({ children: "newtext" });
      expect(wrapper.text()).toBe("newtext");
    });
  });
});
