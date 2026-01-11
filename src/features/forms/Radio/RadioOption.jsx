
function RadioOption({ name, value, checked, onChange, children }) {
  return (
    <label htmlFor={`${name}-${value}`} className="RadioOption">
        <input 
        id={`${name}-${value}`}
        type="radio" 
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}    
        />
        {children}
    </label>
  )
}

export default RadioOption;