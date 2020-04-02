import React from "react";
import { addDecorator } from "@storybook/react";
import MyContext from "../context";

addDecorator(story => {
  return <MyContext.Provider value="INITIALIZED">{story()}</MyContext.Provider>;
});
