import React from "react";

import ButtonBase from "./ButtonBase";

export default {
    title: "Button base",
    component: ButtonBase
};

const Template = (args) => <div style={{width: "30%"}}><ButtonBase {...args} /></div>;

export const SignInButtonBase = Template.bind({});
SignInButtonBase.args = {
    textButton: "Sign in",
    isPrimary: true,
    isRounded: true,
    fullWidth: true
};


export const PrimaryWithTextButtonBase = Template.bind({});
PrimaryWithTextButtonBase.args = {
    textButton: "Add",
    isPrimary: true,
    isRounded: true,
};