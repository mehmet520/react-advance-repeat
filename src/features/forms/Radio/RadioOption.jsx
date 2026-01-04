
function RadioOption({ name, value, checked, onChange, children }) {
  return (
    <label htmlFor={value} className="RadioOption">
        <input 
        id={value}
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