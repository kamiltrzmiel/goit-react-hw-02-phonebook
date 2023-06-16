import React from 'react';

function Filter({ value, onChangeFilter }) {
  return (
    <input type="text"
      name="filter"
      placeholder="Find contacts"
      value={value}
      onChange={onChangeFilter}
    />
  );
}

export default Filter;
