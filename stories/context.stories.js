import React from "react";
import MyContext from "../context";

export default {
  title: "Context"
};

const Div = () => {
  const value = React.useContext(MyContext);
  return <div>context value: {value}</div>;
};

export const directUsage = () => {
  const value = React.useContext(MyContext);
  return <div>direct usage context value: {value}</div>;
};

export const indirectUsage = () => {
  return <Div />;
};
