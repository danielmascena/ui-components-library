import React from "react";

import InputBase from "./InputBase";

export default {
    title: "Text box",
    component: InputBase,
};

const Template = (args) => <InputBase {...args} />;

export const UsernameTextBox = Template.bind({});
UsernameTextBox.args = {
    labelText: "User name"
};