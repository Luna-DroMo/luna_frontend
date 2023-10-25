import React, { useState } from 'react';

const DynamicRadioButtons = ({ options }) => {
    const [selectedOption, setSelectedOption] = useState(null);
  
    const handleOptionChange = (event) => {
      const value = event.target.value;
      setSelectedOption(value);
      onSelect(value);
    };
  
    return (
      <div>
        <h3>Select an option:</h3>
        {options.map((option) => (
          <div key={option}>
            <input
              type="radio"
              id={option.value}
              name="dynamicRadio"
              value={option}
              checked={selectedOption === option}
              onChange={handleOptionChange}
            />
            <label htmlFor={option}>{option}</label>
          </div>
        ))}
      </div>
    );
  };
  
  export default DynamicRadioButtons;

  
