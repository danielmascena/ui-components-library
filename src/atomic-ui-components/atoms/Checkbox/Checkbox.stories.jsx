import React from "react";

import Checkbox from "./Checkbox";

export default {
    title: "Checkbox",
    component: Checkbox
};

const Template = (args) => <Checkbox {...args} />;

export const RememberCheckBox = Template.bind({});
RememberCheckBox.args = {
};