import React, { Component, PropTypes } from 'react';

function buildHandleChange(props) {
  return function handleChange(e) {
    props.onChange(props.name, e.target.value);
  };
}

const TextInput = (props) => {
  const handleChange = buildHandleChange(props);

  return (
    <input className="small"
      type="text"
      placeholder={props.placeholder}
      value={props.value}
      onChange={handleChange} />
	);
};

TextInput.propTypes = {
	name: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	placeholder: PropTypes.string,
	value: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	])
};

export default TextInput;
