import React from "react";
import Icon from "react-eva-icons";

import "./NavigationIcon.css";

const NavigationIcon = ({ navIconLabel, navIconPoperties }) => (
  <Icon
    name={navIconLabel}
    size={navIconPoperties.size}
    fill={navIconPoperties.fill}
    animation={{
      type: navIconPoperties.animation.type,
      hover: navIconPoperties.animation.hover,
      infinite: navIconPoperties.animation.infinite,
    }}
  />
);

export default NavigationIcon;
