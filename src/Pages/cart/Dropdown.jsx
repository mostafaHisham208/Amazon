import React from "react";
const Dropdown = ({ num }) => {
  console.log(num);

  let dropDown = [];
  for (var i = 1; i <= num; i++) {
    dropDown.push(i);
  }
  return (
    <>
      {dropDown.map((e) => (
        <option key={e} value={e}>
          {e}
        </option>
      ))}
    </>
  );
};

export default Dropdown;
