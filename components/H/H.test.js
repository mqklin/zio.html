import React from "react";
import renderer from 'react-test-renderer';
import {mount} from 'enzyme';
import  H  from "./";

describe("H", () => {
  it("should be equal to snapshow", () => {
    const component = renderer.create(<H size="xs">I am small 👌</H>);
    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();

  });
  describe("props", () => {
    it("should change test based on new children prop",() => {
      const header = mount(<H size="xs">I am small 👌</H>)
      expect(header.text()).toEqual('I am small 👌')

      header.setProps({children: 'Not Small Anymore 😎'})
      expect(header.text()).toEqual('Not Small Anymore 😎')
    })
  });
});
