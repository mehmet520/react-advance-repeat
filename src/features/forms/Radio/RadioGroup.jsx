import React, { Children } from "react";
import './Radio.css'

function RadioGroup({ name, selected, onChange, children }) {
  return (
    <section className="RadioGroup">
      {React.Children.map(children, (child, index) => {
        console.log(child.props.value)
        if(child.props.checked) {
            onChange(child.props.value)
            
        }
        return React.cloneElement(child, {
            name,
            checked: child.props.value === selected,
            onChange: ()=>onChange(child.props.value),
            });
      })}
    </section>
  );
}

export default RadioGroup;
