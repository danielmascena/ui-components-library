import React from "react";

import InputBase from "./InputBase";

export default {
    title: "Input base",
    component: InputBase,
};

const Template = (args) => <InputBase {...args} />;

export const UsernameInputBase = Template.bind({});
UsernameInputBase.args = {
    labelText: "User name",
    hasInnerLabel: false,
};

export const PasswordInputBase = Template.bind({});
PasswordInputBase.args = {
    labelText: "Password",
    hasInnerLabel: true,
    placeholderText: "the most secured password in the planet ",
};