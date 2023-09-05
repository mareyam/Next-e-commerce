import Filters from 'components/common/Filters';
import React, { useState, useEffect } from 'react';

function Test2() {
  const [selectedOption, setSelectedOption] = useState('low');

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  useEffect(() => {
    // console.log("selected is " + selectedOption);
  }, [selectedOption]);

  return (
    <div>
      <Filters/>
      {/* <h1>Dropdown Example</h1>
      <select value={selectedOption} onChange={handleDropdownChange}>
        <option value="low">Low</option>
        <option value="high">High</option>
      </select>
      <p>Selected option: {selectedOption}</p> */}
    </div>
  );
}

export default Test2;
