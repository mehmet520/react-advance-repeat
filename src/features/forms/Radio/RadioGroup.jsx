import React from "react";
import "./Radio.css";

function RadioGroup({ name, selected, onChange, children }) {

  const enhancedChildren = React.Children.map(children, (child, index) => 
    React.cloneElement(child, {
      name,
      checked: child.props.value === selected,
      onChange: () => onChange(child.props.value),
    })
  );

  return <section className="RadioGroup">
    {enhancedChildren}
  </section>;
}

export default RadioGroup;
