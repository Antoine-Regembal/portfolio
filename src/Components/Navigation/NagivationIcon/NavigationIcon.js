import React from "react";
import Icon from "react-eva-icons";

import "./NavigationIcon.css";

const NavigationIcon = ({ navigationIconContent }) => (
  <Icon
    name={navigationIconContent.label}
    size={navigationIconContent.size}
    fill={navigationIconContent.fill}
    animation={{
      type: navigationIconContent.animation.type,
      hover: navigationIconContent.animation.hover,
      infinite: navigationIconContent.animation.infinite,
    }}
  />
);

export default NavigationIcon;
